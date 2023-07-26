import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'

import {Picker} from '@react-native-picker/picker'
import Pessoas from './src/Pessoas/'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedPizza: 0,
      pizzas:[
        {key: 1, nome: "Strogonoff", valor: 35.99},
        {key: 2, nome: "Calabresa", valor: 33.99},
        {key: 3, nome: "Quatro Queijos", valor: 50.99},
        {key: 4, nome: "Mussarela", valor: 25.99},

      ]
    }
  }

  render(){

    let pizzasItem = this.state.pizzas.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return(
      <View style={styles.container}>
        <Text style={styles.logo}>Menu de Pizzas</Text>
        <Picker selectedValue={this.state.selectedPizza} onValueChange={ (itemValue, itemIndex) => this.setState({selectedPizza: itemValue})}>
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.selectedPizza].nome}</Text>
        <Text style={styles.pizzas}>R$ {this.state.pizzas[this.state.selectedPizza].valor}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas:{
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }

})

export default App;