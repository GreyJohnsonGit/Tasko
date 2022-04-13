#[macro_use]
extern crate juniper;

use juniper::FieldResult;
use warp::{
    reject::{custom, Reject},
    reply, Filter, http::Method, Rejection, Reply 
};
use mini_redis::{client, Result};
use serde::{Deserialize, Serialize};
use rand::{
    distributions::{Alphanumeric},
    thread_rng, Rng
};

#[derive(GraphQLInputObject, Deserialize, Serialize)]
#[graphql(description = "A Task")]
struct Task {
    id: Option<String>,
    name: Option<String>,
    description: Option<String>,
    is_complete: Option<bool>
}

impl Task {
    fn new() -> Task {
        Task {
            id: Some(String::new()),
            name: Some(String::new()),
            description: Some(String::new()),
            is_complete: Some(false)
        }
    }
}

struct MiniresDBConnection;

impl MiniresDBConnection {
    fn new() -> MiniresDBConnection {
        return MiniresDBConnection {}; 
    }

    fn get_task(self) -> Task {
        Task::new()
    }

    fn set_task(self) -> Task {
        Task::new()
    }
}

struct DatabasePool;

impl DatabasePool {
    fn get_connection(&self) -> MiniresDBConnection{
        return MiniresDBConnection::new();
    }
}

struct Context {
    pool: DatabasePool,
}

impl juniper::Context for Context {}

struct Query;

graphql_object!(Query: Context |&self| {

    field apiVersion() -> &str {
        "1.0"
    }

    field human(&executor, id: String) -> FieldResult<Task> {
        let context = executor.context();
        let connection = context.pool.get_connection();
        let human = connection.get_task();
        Ok(human)
    }
});

struct Mutation;

graphql_object!(Mutation: Context |&self| {

    field createTask(&executor) -> FieldResult<Task> {
        let db = executor.context().pool.get_connection();
        let task: Task = db.set_task();
        Ok(task)
    }
});

//type Schema = juniper::RootNode<'static, Query, Mutation>;

async fn _do_db_things() -> Result<()> {
    let mut client = client::connect("127.0.0.1:6379").await?;
    client.set("hello", "world".into()).await?;
    let result = client.get("hello").await?;
    println!("got value from the server; result={:?}", result);
    Ok(())
}

async fn task_router(method: Method, body: Task) -> String {
    let mut client = client::connect("127.0.0.1:6379").await.expect("Failed to connect to Redis server");


    let mut result;
    match method {
        Method::GET => {
            match body.id {
                Some(id) => {
                    result = client.get(&format!("task_{}", id) as &str).await;
                    println!("got value from the server; result={:?}", result);
                    String::from("success")
                },
                None => {
                    String::from("No id provided")
                }
            }
        },
        _ => {
            return String::new();
        }
    }
}

fn user_router(method: warp::http::Method, body: Task) -> String {
    return format!("{}_user", method)
}

async fn test(method: warp::http::Method, body: Task) -> std::result::Result<Box<dyn Reply>, Rejection> {
    let mut client = client::connect("127.0.0.1:6379").await.expect("Failed to connect to Redis server");

    match method {
        Method::GET => {
            match body.id {
                Some(id) => {
                    let serialized_task = client.get(&format!("task_{}", id) as &str).await;
                },
                None => {
                    println!("No id provided");
                }
            }
        },
        Method::POST => {
            let id = String::from_utf8(thread_rng().sample_iter(&Alphanumeric).take(256).collect()).expect("");
            println!("RandomId={}", id);
            client.set(&format!("task_{}", id), "f".into()).await;
        },
        _ => {
            String::new();
        }
    }
    
    Ok(Box::new(reply::json(&Task::new())))
}

#[tokio::main]
async fn main() {

    let api = warp::path("v1");
    let task = api
        .and(warp::path("task"))
        .and(warp::path::end())
        .and(warp::method())
        .and(warp::body::json())
        .and_then(test);

    let user = api
        .and(warp::path("user"))
        .and(warp::path::end())
        .and(warp::method())
        .and(warp::body::json())
        .map(|method, body: Task| user_router(method, body));

    let routes = warp::any().and(
        task
        .or(user)
    );
    

    warp::serve(routes).run(([127, 0, 0, 1], 3030)).await;
}
