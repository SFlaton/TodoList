import test from 'ava'
import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/TodoListRedux'

test('attempt', t => {
  const state = reducer(INITIAL_STATE, Actions.todoListRequest('data'))

  t.true(state.fetching)
})

test('success', t => {
  const state = reducer(INITIAL_STATE, Actions.todoListSuccess('hi'))

  t.is(state.payload, 'hi')
})

test('failure', t => {
  const state = reducer(INITIAL_STATE, Actions.todoListFailure(99))

  t.false(state.fetching)
  t.true(state.error)
})
