import React from 'react';
import TaskItem from '../TaskTracker';

const TaskList = ({ tasks, filterStatus, onEdit, onDelete }) => {
  const filteredTasks = tasks.filter(task => 
    filterStatus === 'All' || task.status === filterStatus
  );

  return (
    <div>
      {filteredTasks.map(task => (
        <TaskItem 
          key={task._id} 
          task={task} 
          onEdit={() => onEdit(task)} 
          onDelete={() => onDelete(task._id)} 
        />
      ))}
    </div>
  );
};

export default TaskList;
