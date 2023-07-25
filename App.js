import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      feed:[
        {id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.matheus'},
        {id: '2', nome: 'Matheus', idade: 50, email: 'matheus@matheus.matheus'},
        {id: '3', nome: 'Matheus', idade: 50, email: 'matheus@matheus.matheus'},
        {id: '4', nome: 'Matheus', idade: 50, email: 'matheus@matheus.matheus'}

      ]
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => <Pessoas data={item}/>}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },

})

export default App;