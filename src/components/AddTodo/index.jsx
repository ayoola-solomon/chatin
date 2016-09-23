import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './AddTodo.css';

const AddTodo = ({ task, taskDate, onTaskChange, onTaskDateChange, addTask }) =>
  <div className="AddTodo-Input">
    <input
      type="text"
      name="task"
      value={task}
      placeholder="Enter your task here"
      onChange={onTaskChange}
    />
    <input
      type="datetime-local"
      value={taskDate}
      name="Date and Time for task"
      onChange={onTaskDateChange}
    />
    <RaisedButton label="Add" primary style={{ margin: 12 }} onClick={addTask} />
  </div>;

AddTodo.propTypes = {
  task: PropTypes.string.isRequired,
  taskDate: PropTypes.string.isRequired,
  onTaskChange: PropTypes.func.isRequired,
  onTaskDateChange: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export default AddTodo;
