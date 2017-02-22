// @flow

import React, { Component } from 'react'
import { ScrollView, Text, Animated, View, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import CreateTodo from './CreateTodo'
import RoundedButton from '../Components/RoundedButton'

// Styles
// import styles from './Styles/TodoListStyle'

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      _animatedValue: new Animated.Value(0),
      _widthValue: new Animated.Value(0),
      _heightValue: new Animated.Value(0),
      _bGValue: new Animated.Value(0),
      _textOpacityValue: new Animated.Value(0),
      _textZIndexValue: new Animated.Value(0),
      _textSizeValue: new Animated.Value(1)
    }
  }

  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state._bGValue, {
          toValue: 100,
          duration: 1000
        }),
        Animated.timing(this.state._animatedValue, {
          toValue: 100,
          duration: 3000
        }),
      ]),
      Animated.parallel([
        Animated.timing(this.state._heightValue, {
          toValue: 400,
          duration: 2000,
        }),
        Animated.timing(this.state._widthValue, {
          toValue: 400,
          duration: 2000
        }),
      ]),
      Animated.timing(this.state._textOpacityValue, {
        toValue: 1
      })
    ]).start()
  }

  onPressText() {
    console.log(this.state)
    Animated.timing(this.state._textSizeValue, {
      toValue: 1.2
    }).start()
  }

  render() {
    const { _animatedValue, _bGValue, _textOpacityValue, _textSizeValue } = this.state

    const interpolatedRotateAnimation = _animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['0deg', '90deg']
    })

    const interpolatedBackgroundColor = _bGValue.interpolate({
      inputRange: [0, 100],
      outputRange: ['transparent', 'red'],
      extrapolate: 'clamp'
    })

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, {transform: [{rotate: interpolatedRotateAnimation}]}, {backgroundColor: interpolatedBackgroundColor}, {height: this.state._heightValue}, {width: this.state._widthValue}]}
          resizeMode='stretch'
        >
          <Animated.View style={{opacity: _textOpacityValue}}>
            <Animated.Text
              style={[{transform: [{rotate: '270deg'}, {scale: _textSizeValue}]}]}
              onPress={this.onPressText.bind(this)}
            >
              A very nice red square
            </Animated.Text>
          </Animated.View>
        </Animated.View>
        <RoundedButton onPress={NavigationActions.slider}>
          Go to next
        </RoundedButton>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  box: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: 'red'
  }
};


export default TodoList;
