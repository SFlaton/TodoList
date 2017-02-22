// @flow

import React from 'react'
import { Text, TouchableWithoutFeedback, View, Button } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import * as Animatable from 'react-native-animatable'
import RoundedButton from '../Components/RoundedButton'
import ExampleModal from '../Components/ExampleModal'

// Styles
import styles from './Styles/SliderStyle'

class Slider extends React.Component {

  constructor (props) {
    super(props)
  }


  swing() {
    return (
      <Animatable.View ref="view">
        <Button title='Swing me!' onPress={() =>
          this.refs.view.swing(800).then(NavigationActions.modal)}
        />
      </Animatable.View>
    )
  }

  render () {
    return (
      <View style={[styles.container]}>
        {this.swing()}
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)
