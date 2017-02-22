// @flow

import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import TodoListActions from '../Redux/TodoListRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import RoundedButton from '../Components/RoundedButton'
import _ from 'lodash'

// Styles
import styles from './Styles/CreateTodoStyle'

class CreateTodo extends React.Component {

  constructor(props) {
    super(props)

    const aap = props.todo
    this.state = { aap }
  }

  componentWillReceiveProps (newProps) {
    console.log('FORTHENEWPROPS', newProps)
    this.setState({
      aap: newProps.todo
    })
  }

  onTextChange = (text) => {
    this.setState({aap: text })
  }

  handlePressCreate = () => {
    this.props.todoCreate(this.state.aap)
  }

  render() {
    console.log(this.state)
    return (
      <View>
        <Text style={styles.textStyle}>Add Todo</Text>
        <TextInput
          style={styles.textInputStyle}
          value={this.state.aap}
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
  console.log('STATETOPROPS', _.get(state.todos, ['newTask']))
  return {
    todo: _.get(state.todos, ['newTask'])
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    todoCreate: (task) => dispatch(TodoListActions.todoCreate(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
