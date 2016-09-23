import Constants from '../constants';
import firebase from 'firebase';
import _ from 'lodash';

const config = {
  apiKey: "AIzaSyCTrUVaWEm2qRG_HKwWl0eErp5L5xcks-E",
  authDomain: "todos-bfa2f.firebaseapp.com",
  databaseURL: "https://todos-bfa2f.firebaseio.com",
  storageBucket: "todos-bfa2f.appspot.com",
  messagingSenderId: "284146393410"
};
firebase.initializeApp(config);

const ref = firebase.database().ref();
const Todos = ref.child('todos');

const Actions = {
  fetchTodos: () => {
    return dispatch => {
      return Todos.orderByValue().on('value', (snapshot) => {
        dispatch({
          type: Constants.FETCH_TODOS,
          payload: _.values(snapshot.val()),
        });
      });
    };
  },

  addTask: (task) => {
    return dispatch => {
      const newTaskKey = Todos.push().key;
      task.id = newTaskKey;
      return Todos.child(newTaskKey).update(task);
    }
  },

  updateTask: (id) => {
    return dispatch => {
      const taskRef = Todos.child(id);
      taskRef.once('value', (snapshot) => {
        const task = snapshot.val();
        task.done = !task.done;
        return taskRef.update(task);
      });
    }
  },

  deleteTask: (id) => {
    return dispatch => {
      return Todos.child(id).remove();
    }
  }
}

export default Actions;
