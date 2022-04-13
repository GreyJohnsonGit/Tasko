use super::task::Task;

#[derive(Debug)]
pub struct Timeline {
    pub name: String,
    pub description: String,
    tasks: Vec<Task>,
}

impl Timeline {
    pub fn new(name: String, description: String) -> Self {
        return Timeline {
            name: name,
            description: description,
            tasks: Vec::new(),
        };
    }

    pub fn add_task(&mut self, task: Task) {
        self.tasks.push(task);
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn new() {
        let (name, description) = ("Test", "Timeline");

        let timeline = Timeline::new(String::from(name), String::from(description));

        assert_eq!(timeline.name, name);
        assert_eq!(timeline.description, description);
    }

    #[test]
    fn add_task() {
        let task_name = "Test Task";
        let task = Task::new(String::from(task_name), String::new());
        let mut timeline = Timeline::new(String::new(), String::new());

        timeline.add_task(task);

        assert_eq!(timeline.tasks[0].name, task_name);
    }
}
