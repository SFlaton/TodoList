// @flow

import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import TodoListActions from '../Redux/TodoListRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RoundedButton from '../Components/RoundedButton'

// Styles
import styles from './Styles/CreateTodoStyle'

type CreateTodoProps = {
  dispatch: () => any,
  fetching: boolean
}

class CreateTodo extends React.Component {

  props: CreateTodoProps

  state: {
    todo: string
  }

  constructor(props: CreateTodoProps) {
    super(props)
    this.state = {
      todo: ''
    }
  }

  onTextChange = (text) => {
    this.setState({todo: text })
  }

  handlePressCreate = () => {
    this.props.todoCreate(this.state.todo)
  }

  render() {
    console.log(this.state)
    return (
      <View>
        <Text style={styles.textStyle}>Add Todo</Text>
        <TextInput
          style={styles.textInputStyle}
          value={this.state.todo}
          onChangeText={this.onTextChange}
        />
      <RoundedButton onPress={this.handlePressCreate}>
          save
        </RoundedButton>
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    task: state.todo
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    todoCreate: (task) => dispatch(TodoListActions.todoCreate(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
