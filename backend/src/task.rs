#[derive(Debug)]
pub struct Task {
    pub name: String,
    pub description: String,
}

impl Task {
    pub fn new(name: String, description: String) -> Self {
        return Task {
            name: name,
            description: description,
        };
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn new() {
        let (name, description) = ("Test", "Task");

        let task = Task::new(String::from(name), String::from(description));

        assert_eq!(task.name, name);
        assert_eq!(task.description, description);
    }
}
