import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Switch, TextInput } from 'react-native'

import {Picker} from '@react-native-picker/picker'
import Pessoas from './src/Pessoas/'
import Slider from '@react-native-community/slider'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      nome: '',
      idade: 1,
      sexo: 1,
      limite: 100,
      estudante: false,
    }
    this.enviar = this.enviar.bind(this)
  }

  enviar(){
    alert(`
      Nome: ${this.state.nome}
      Idade: ${this.state.idade}
      Sexo: ${this.state.sexo == 1 ? 'Masculino' : 'Feminino'}
      Limite: ${this.state.limite.toFixed()}
      Estudante? ${this.state.estudante ? 'Sim' : 'Não'}
    `)
  }

  render(){

    return(
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={styles.titulo}>Insira seu nome:</Text>
          <TextInput style={styles.input} onChangeText={(evt) => this.setState({nome: evt})} label={'A'}/>
        </View>
        <View style={styles.label}>
          <Text style={styles.titulo}>Insira sua idade:</Text>
          <TextInput style={styles.input} onChangeText={evt => this.setState({idade: evt})} label={'A'}/>
        </View>
        <View style={styles.label}>
          <Text style={styles.titulo}>Selecione seu sexo</Text>
          <Picker selectedValue={this.state.sexo} onValueChange={itemValue => {this.setState({sexo: itemValue})}}>
            <Picker.Item value={1} key={1} label='Masculino'/>
            <Picker.Item value={2} key={2} label='Feminino'/>
          </Picker>
        </View>
        <View style={styles.label}>
          <Text style={styles.titulo}>Selecione seu limite:</Text>
          <Slider minimumValue={100} onValueChange={value => this.setState({limite: value})} maximumValue={10000} style={{flex: 1}}/>
          <Text>{this.state.limite.toFixed()}</Text>
        </View>
        <View style={styles.label}>
          <Text style={styles.titulo}>Estudante?</Text>
          <Switch value={this.state.estudante} onValueChange={value => this.setState({estudante: value})}/>
        </View>
        <View style={styles.btnLabel}>
          <TouchableOpacity onPress={() => this.enviar()} style={styles.button} value={'Criar conta'}><Text style={styles.buttonText}>Enviar</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20
  },
  label:{
    flexDirection: 'row',
    margin: 20
  },
  input:{
    backgroundColor: 'gray',
    marginLeft: 10,
    flex: 1,
    marginRight: 10,
    borderColor: 'red',
    borderRadius: 10,
    color: 'black'
  },
  titulo:{
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  button:{
    text: 'red',
    width: 100,
    height: 40,
    borderRadius:20,
    backgroundColor: 'green'
  },
  buttonText:{
    textAlign: 'center',
    marginTop: 9
  },
  btnLabel:{
    padding: 20,
    alignItems: 'center'
  }

})

export default App;