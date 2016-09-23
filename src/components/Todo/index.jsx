import React, { PropTypes } from 'react';
import moment from 'moment';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import { ListItem } from 'material-ui/List';

const Todo = ({ id, task, done, taskDate, deleteTask, taskDone }) =>
  <ListItem
    style={done ? { textDecoration: 'line-through' } : { }}
    onClick={() => taskDone(id)}
    primaryText={task}
    secondaryText={moment(taskDate).format('MMMM Do YYYY, h:mm a')}
    rightIcon={
      <ActionDelete
        color="red"
        onClick={() => deleteTask(id)}
      />
    }
  />;

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  taskDate: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
  taskDone: PropTypes.func.isRequired,
};

export default Todo;
