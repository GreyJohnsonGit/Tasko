import React from 'react';
import Task from 'types/Task';
import { CommonCss, CustomCss } from 'styles/Style';

interface TaskMenuProps {
  getTasks: Task[]
  setTasks: (tasks: Task[]) => void
  setSelectedTask: (id: string) => void
}

function TaskMenu (props: TaskMenuProps) {
  const addTask = () => {
    const taskName = prompt('Enter Task Name', 'Task') ?? '';
    const taskDescription = prompt('Enter Task Description', 'Description') ?? '';
    const newTasks = [...props.getTasks];
    newTasks.push({
      name: taskName,
      description: taskDescription,
      isComplete: false
    });
    props.setTasks(newTasks);
  };

  const panelStyle =
    CommonCss.panel + 
    CommonCss.smallPanel;

  const taskMenuStyle =
    CustomCss.views.task.menu;

  return (
    <div className={panelStyle}>
      <div className={taskMenuStyle}>
        <AddButton addTask={addTask}/>
        <TaskEntries tasks={props.getTasks} setTasks={props.setTasks} setSelectedTask={props.setSelectedTask}/>
      </div>
    </div>
  );
}

interface AddButtonProps {
  addTask: () => void,
}

function AddButton(props: AddButtonProps) {
  const onClick = () => {
    props.addTask();
  };
  
  const addStyle =
    CustomCss.views.task.add;

  return (
    <div className={addStyle} onClick={onClick}>
      +
    </div>
  );
}

interface TaskEntriesProps {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
  setSelectedTask: (id: string) => void
}

function TaskEntries(props: TaskEntriesProps) {
  const toggleCompletion = (id: string) => {
    const newTasks = [...props.tasks];
    const index = Number(id);
    newTasks[index].isComplete = !newTasks[index].isComplete;
    props.setTasks(newTasks);
  };

  const deleteEntry = (id: string) => {
    const newTasks = [...props.tasks];
    const index = Number(id);
    newTasks.splice(index, 1);
    props.setTasks(newTasks);
  };

  const editEntry = (id: string) => {
    const newTasks = [...props.tasks];
    const index = Number(id);
    const task = newTasks[index];

    const newName = prompt('Enter new name.', task.name);
    if (!newName) {
      return;
    }
    task.name = newName;

    const newDescription = prompt('Enter new description.', task.description) ?? task.description;
    if (!newDescription) {
      return;
    }task.description = newDescription;

    props.setTasks(newTasks);
  };

  const moveEntry = (id: string, change: number) => {
    const newTasks = [...props.tasks];
    const index = Number(id);

    const task = newTasks.splice(index, 1)[0];
    const newIndex = Math.min(props.tasks.length - 1, Math.max(0, index + change));
    newTasks.splice(newIndex, 0, task);
    props.setTasks(newTasks);
  };

  const containerStyle =
    CommonCss.fill;

  return (
    <div className={containerStyle}>
      {
        props.tasks.map((task, index) => {
          const id = String(index);

          const entryStyle =
            CommonCss.flex +
            CustomCss.views.task.entries.entry +
            (task.isComplete ? 
              CommonCss.strike +
              CustomCss.views.task.entries.complete : '');

          return (
            <div key={index} className={entryStyle}>
              <CheckBox id={id} isComplete={task.isComplete} toggleCompletion={toggleCompletion}/>
              <Text id={id} taskName={task.name} setSelectedTask={props.setSelectedTask}/>
              <EditButton id={id} editEntry={editEntry}/>
              <DeleteButton id={id} deleteEntry={deleteEntry}/>
              <MoveButton id={id} length={props.tasks.length} moveEntry={moveEntry}/>
            </div>
          );
        })
      }
    </div>
  );
}

interface CheckBoxProps {
  isComplete: boolean,
  id: string,
  toggleCompletion: (index: string) => void
}

function CheckBox(props: CheckBoxProps) {
  const onClick = () => {
    props.toggleCompletion(props.id);
  };

  const checkBoxStyle =
    CustomCss.views.task.check.base +
    (props.isComplete ? 
      CustomCss.views.task.check.checked : '');

  return (
    <div className={checkBoxStyle} onClick={onClick}></div>
  );
}

interface TextProps {
  id: string,
  taskName: string,
  setSelectedTask: (id: string) => void
}

function Text(props: TextProps) {
  const onClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      props.setSelectedTask(props.id);
    }
  };
  
  const textStyle = 
    CustomCss.views.task.text;

  return (
    <div className={textStyle} onClick={onClick}>{props.taskName}</div>
  );
}

interface EditButtonProps {
  id: string,
  editEntry: (id: string) => void
}

function EditButton(props: EditButtonProps) {
  const onClick = () => {
    props.editEntry(props.id);
  };
  
  const editStyle =
    CustomCss.views.task.button +
    CustomCss.views.task.edit;

  return (
    <div className={editStyle} onClick={onClick}></div>
  );
}

interface DeleteButtonProps {
  id: string,
  deleteEntry: (id: string) => void
}

function DeleteButton(props: DeleteButtonProps) {
  const onClick = () => {
    props.deleteEntry(props.id);
  };

  const editStyle =
    CustomCss.views.task.button +
    CustomCss.views.task.delete;

  return (
    <div className={editStyle} onClick={onClick}></div>
  );
}

interface MoveButtonProps {
  id: string,
  length: number,
  moveEntry: (id: string, change: number) => void
}

function MoveButton(props: MoveButtonProps) {
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    let change = -1;

    if (event.shiftKey) {
      change = -change;
    }

    if (event.ctrlKey) {
      change *= props.length;
    }

    props.moveEntry(props.id, change);
  };
  
  const editStyle =
    CustomCss.views.task.button +
    CustomCss.views.task.move;

  return (
    <div className={editStyle} onClick={onClick}></div>
  );
}


export default TaskMenu;
