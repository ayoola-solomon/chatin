import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import TodoList from '../TodoList';
import TodosActions from '../../actions/todos';
import './App.css';

class App extends Component {

  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <div className="App">
        <AppBar title="React Firebase Demo Chat App" />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

App.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array,
};

const mapStateToProps = ({ todos }) => ({
  todos: todos.todos,
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(TodosActions.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
