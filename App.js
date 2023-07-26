import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Switch } from 'react-native'

import {Picker} from '@react-native-picker/picker'
import Pessoas from './src/Pessoas/'
import Slider from '@react-native-community/slider'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      status: false
    }
  }

  render(){

    return(
      <View style={styles.container}>
        <Switch value={this.state.status} thumbColor={'red'} onValueChange={e => this.setState({status: e})}/>
        <Text>{this.state.status ? "Ativo" : "Inativo"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20
  },

})

export default App;