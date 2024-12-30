import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import "./index.css"

const TaskForm = ({ task, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: task?.name || '',
    description: task?.description || '',
    dueDate: task?.dueDate || '',
    status: task?.status || 'Pending',
    priority: task?.priority || 'Low'
  });

  useEffect(() => {
    if (task) {
      setFormData({
        name: task.name,
        description: task.description,
        dueDate: task.dueDate,
        status: task.status,
        priority: task.priority
      });
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (task) {
        await axios.patch(`/tasks/${task._id}`, formData);
      } else {
        await axios.post('/tasks', formData);
      }
      onSave();
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="taskName">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter task name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className='task-input'
          style={{"max-width":"450px","margin-left":"10px"}}
        />
      </Form.Group>

      <Form.Group controlId="taskDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Task Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          style={{"max-width":"500px","margin-right":"10px"}}

        />
      </Form.Group>

      <Form.Group controlId="taskDueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          value={formData.dueDate}
          onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
          style={{"max-width":"450px","margin-left":"10px"}}

        />
      </Form.Group>

      <Form.Group controlId="taskStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="taskPriority">
        <Form.Label>Priority</Form.Label>
        <Form.Control
          as="select"
          value={formData.priority}
          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Form.Control>
      </Form.Group>

      <div className="d-flex justify-content-between mt-4">
        <Button variant="primary" type="submit">
          Save Task
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default TaskForm;
