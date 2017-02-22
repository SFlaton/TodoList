// @flow
import _ from 'lodash'
import React, { Component } from 'react'
import { ListView, Text, Animated, View, TouchableHighlight , StyleSheet} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
import TodoListActions from '../Redux/TodoListRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import CreateTodo from './CreateTodo'
import RoundedButton from '../Components/RoundedButton'

import { ApplicationStyles } from '../Themes/'

// Styles
// import styles from './Styles/TodoListStyle'

class TodoList extends Component {

  componentWillMount() {
    this.props.todoListRequest()

    this.createDataSource(this.props)

    console.log('aap', this.props)
  }

  componentWillReceiveProps(nextProps) {
    console.log('paardProps', nextProps)
    this.createDataSource(nextProps)
  }

  createDataSource({tasks}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(tasks)
  }

  renderTask(task) {
    return (
      <View>
        <Text style={styles.sectionText}>
          {task.title}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        <CreateTodo />
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderTask}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('DRAAK', state)
  return {
    tasks: _.get(state.todos, ['tasks'])
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    todoListRequest: () => dispatch(TodoListActions.todoListRequest())
  }
}

const styles = StyleSheet.create({
  ...ApplicationStyles.screen
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
