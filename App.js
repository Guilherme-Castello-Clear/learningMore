import React, { Component } from 'react'
import { View, Text, StyleSheet, Keyboard, Image, TouchableOpacity, ScrollView, FlatList, Switch, TextInput, Modal, Button } from 'react-native'

import Lista from './src/Lista'
import {Picker} from '@react-native-picker/picker'
import Pessoas from './src/Pessoas/'
import Slider from '@react-native-community/slider'

import AsyncStorage from '@react-native-async-storage/async-storage';


import Entrar from './src/Entrar'
class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      modalVisible: false
    }

    this.entrar = this.entrar.bind(this)
    this.sair = this.sair.bind(this)
  }

  entrar(){
    this.setState({modalVisible: true})
  }

  sair(){
    this.setState({modalVisible: false})
  }

  render(){

    return(
      <View style={styles.container}>
        <Button title={"Entrar"} onPress={ this.entrar }>a</Button>

        <Modal animationType='slide' visible={this.state.modalVisible}>
          <View style={{margin: 15, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Entrar fechar={this.sair}/>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: 'gray'
  },
});

export default App;