import React from 'react';

const TaskFilter = ({ filterStatus, setFilterStatus }) => {
  return (
    <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default TaskFilter;
