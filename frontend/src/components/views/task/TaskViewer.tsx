import React from 'react';
import Task from 'types/Task';
import { CommonCss } from 'styles/Style';

interface TaskViewerProps {
    getTasks: Task[],
    getSelectedTask: string,
}

function TaskViewer(props: TaskViewerProps) {
  const index = Number(props.getSelectedTask);
  
  const task = props.getTasks[index] ?? props.getTasks[0] ?? {
    name: '<-- Create Task',
    isCompleted: false
  };

  const panelStyle = 
    CommonCss.panel +
    CommonCss.largePanel;


  return (
    <div className={panelStyle}>
      <div className='task-frame'>
        <div className='task-title'>{task.name}</div>
        <div className='task-description'>{task.description}</div>
      </div>
    </div>
  );
}

export default TaskViewer;