import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import firebase from 'firebase'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  todoListRequest: null,
  todoListSuccess: ['tasks'],
  todoListFailure: null,
  todoCreate: ['task'],
  createSuccess: ['tasks']
})

export const TodoListTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  tasks: [{
    id: 14,
    title: "Create some tasks",
    completed: true,
    created_at: "2017-01-13T11:20:45.848Z",
    updated_at: "2017-01-18T08:30:20.126Z"
  }],
  newTask: '',
  fetching: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = state =>
  state.merge({ fetching: true })

// successful api lookup
export const todoListSuccess = (state, action) => {
  const { tasks } = action
  return state.merge({ tasks, fetching: false, error: null })
}

export const createSuccess = (state, action) => {
  const { tasks } = action
  return state.merge({ tasks, fetching: false, error: null, newTask: '' })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true})

export const todoCreate = (state, action) => {
  const { task } = action
  return state.merge({ fetching: false, error: false, newTask: task })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TODO_LIST_REQUEST]: request,
  [Types.TODO_LIST_SUCCESS]: todoListSuccess,
  [Types.CREATE_SUCCESS]: createSuccess,
  [Types.TODO_LIST_FAILURE]: failure,
  [Types.TODO_CREATE]: todoCreate,
})
