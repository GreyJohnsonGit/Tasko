import React, { useState } from 'react';
import TaskMenu from 'components/views/task/TaskMenu';
import TaskViewer from 'components/views/task/TaskViewer';
import UserMenu from 'components/UserMenu';
import TEMP_STATICS from 'etc/TempStatics.json';
import { CommonCss } from 'styles/Style';

function TaskContent () {
  const [getSelectedTask, setSelectedTask] = useState('0');
  const [getTasks, setTasks] = useState(TEMP_STATICS.GENERIC_TASK_DATA);
  
  const contentStyle = 
    CommonCss.flex +
    CommonCss.fill;

  return (
    <div className={contentStyle}>
      <TaskMenu getTasks={getTasks} setTasks={setTasks} setSelectedTask={setSelectedTask}/>
      <TaskViewer getTasks={getTasks} getSelectedTask={getSelectedTask}/>
    </div>
  );
}

export default TaskContent;
