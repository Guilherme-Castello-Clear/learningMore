import React, { Component } from 'react'
import { View, Text, StyleSheet, Keyboard, Image, TouchableOpacity, ScrollView, FlatList, Switch, TextInput } from 'react-native'

import Lista from './src/Lista'
import {Picker} from '@react-native-picker/picker'
import Pessoas from './src/Pessoas/'
import Slider from '@react-native-community/slider'

import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      input: '',
      nome: 'Gui'
    }

    this.gravaNome = this.gravaNome.bind(this)
  }

  async componentDidMount(){
    await AsyncStorage.getItem('nome').then((value) => {
      this.setState({nome: value})
    }).catch(e => {console.log(e)})
  }

  async componentDidUpdate(_, prevState){
    const nome = this.state.nome
    if(prevState !== nome){
      await AsyncStorage.setItem('nome', nome)
    }
  }

  gravaNome(){
    this.setState({
      nome: this.state.input
    })
    alert('Salvo com sucesso!')
    Keyboard.dismiss();
  }

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput style={styles.input} value={this.state.input}
            onChangeText={text => this.setState({input: text})}
            underlineColorAndroid="transparent"
          />

          <TouchableOpacity onPress={() => this.gravaNome()}>
            <Text style={styles.botao}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nome}>{this.state.nome}</Text>
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
  viewInput:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  input:{
    width:300,
    height:40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  botao:{
    backgroundColor: '#222',
    color: 'black',
    height: 40,
    padding: 10,
    marginLeft: 4
  },
  nome:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  }
});

export default App;