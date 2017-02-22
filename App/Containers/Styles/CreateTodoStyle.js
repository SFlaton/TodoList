// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  textStyle: {
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  textInputStyle: {
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    marginHorizontal: Metrics.section,
    marginBottom: Metrics.smallMargin
  }
})
