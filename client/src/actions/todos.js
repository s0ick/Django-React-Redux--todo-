import axios from 'axios';
import { GET_TODO_LIST, ADD_NEW_TODO, DELETE_TODO, TOGGLE_TODO } from './types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

export const getTodos = () => (dispatch) => {
  axios.get('api/todo/')
    .then(response => {
      dispatch({
        type: GET_TODO_LIST,
        payload: response.data
      });
    }).catch(error => console.log(error));
};

export const deleteTodo = (id) => (dispatch) => {
  axios.delete(`api/todo/${id}/`)
  .then(response => {
    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  }).catch(error => console.log(error));
};

export const toggleTodo = (todo) => (dispatch) => {
  todo.done = !todo.done;
  axios.put(`api/todo/${todo.id}/`, todo)
  .then(response => {
    dispatch({
      type: TOGGLE_TODO,
      payload: response.data
    });
  }).catch(error => console.log(error));
};

export const addTodo = (todo) => (dispatch) => {
  todo.done = !todo.done;
  axios.post(`api/todo/`, todo)
  .then(response => {
    dispatch({
      type: ADD_NEW_TODO,
      payload: response.data
    });
  }).catch(error => console.log(error));
};