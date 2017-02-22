// @flow

import React from 'react'
import { Modal, Text, TouchableHighlight, View } from 'react-native'
import styles from './Styles/ExampleModalStyle'

export default class ExampleModal extends React.Component {

  state = {
   modalVisible: true,
 }

 setModalVisible(visible) {
   this.setState({modalVisible: visible});
 }

 render() {
   return (
     <View style={{marginTop: 122}}>
       <Modal
         animationType={"slide"}
         transparent={false}
         visible={this.state.modalVisible}
         onRequestClose={() => {alert("Modal has been closed.")}}
         >
        <View style={{marginTop: 22}}>
         <View>
           <Text>Hello World!</Text>

           <TouchableHighlight onPress={() => {
             this.setModalVisible(false)
           }}>
             <Text>Hide Modal</Text>
           </TouchableHighlight>

         </View>
        </View>
       </Modal>

       <TouchableHighlight onPress={() => {
         this.setModalVisible(true)
       }}>
         <Text>Show Modal</Text>
       </TouchableHighlight>

     </View>
   );
 }
}

// // Prop type warnings
// ExampleModal.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// ExampleModal.defaultProps = {
//   someSetting: false
// }
