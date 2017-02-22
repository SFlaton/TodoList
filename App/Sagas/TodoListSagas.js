/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to Sagas/index.js
*  - This template uses the api declared in Sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import TodoListActions from '../Redux/TodoListRedux'

export function * getTodoList (api, action) {
  // make the call to the api
  const response = yield call(api.getTodolist)
  console.log('hallo!!', response)

  //success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(TodoListActions.todoListSuccess(response.data.tasks))
    // console.log('succes!!', response.data.tasks)
  } else {
    yield put(TodoListActions.todoListFailure())
  }
}

export function * createTodo (api, action) {
  const { task } = action

  yield call(api.createTodo, task)
  const response = yield call(api.getTodolist)

  if (response.ok) {
    console.log("succes!", response)
    yield put(TodoListActions.createSuccess(response.data.tasks))
  } else {
    yield put(TodoListActions.todoListFailure())
  }
}
