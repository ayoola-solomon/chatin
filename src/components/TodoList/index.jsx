import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card } from 'material-ui/Card';
import { List } from 'material-ui/List';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Subheader from 'material-ui/Subheader';
import Todo from '../Todo';
import AddTodo from '../AddTodo';
import TodosActions from '../../actions/todos';
import './TodoList.css';

const style = {
  container: {
    textAlign: 'center',
    padding: '10px',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

class TodoList extends React.Component {

  constructor() {
    super();
    this.state = {
      task: '',
      taskDate: '',
      done: false,
    };
  }

  onTaskChange = (e) => {
    const input = e.target;

    this.setState({
      task: input.value,
    });
  }

  onTaskDateChange = (e) => {
    const input = e.target;

    this.setState({
      taskDate: input.value,
    });
  }

  onTaskDone = (id) => {
    this.props.updateTask(id);
  }

  addTask = () => {
    this.props.addTask(this.state);
    this.setState({
      task: '',
      taskDate: '',
    });
  }

  deleteTask = (id) => {
    this.props.deleteTask(id);
  }

  render() {
    const { todos } = this.props;
    return (
      <div className="TodoList">
        <Card>
          <List>
            <AddTodo
              {...this.state}
              onTaskChange={this.onTaskChange}
              onTaskDateChange={this.onTaskDateChange}
              addTask={this.addTask}
            />
            <Subheader>Todos</Subheader>
            { !todos.length && (
              <div style={style.container}>
                <RefreshIndicator
                  size={50}
                  left={0}
                  top={0}
                  status="loading"
                  style={style.refresh}
                />
              </div>
            )
            }
            { Boolean(todos.length) && (
              todos.map((todo, index) =>
                (<Todo
                  key={index}
                  taskDone={this.onTaskDone}
                  deleteTask={this.deleteTask}
                  {...todo}
                />)
                )
              )
            }
          </List>
        </Card>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  addTask: PropTypes.func,
  deleteTask: PropTypes.func,
  updateTask: PropTypes.func,
};

const mapStateToProps = ({ todos }) => ({
  todos: todos.todos,
});

const mapDispatchToProps = dispatch => ({
  deleteTask: id => dispatch(TodosActions.deleteTask(id)),
  addTask: task => dispatch(TodosActions.addTask(task)),
  updateTask: id => dispatch(TodosActions.updateTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
