import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'

import {Picker} from '@react-native-picker/picker'
import Pessoas from './src/Pessoas/'
import Slider from '@react-native-community/slider'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      valor: 0
    }
  }

  render(){

    return(
      <View style={styles.container}>
        <Slider 
          inimumValue={0}
          maximumValue={100} 
          onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado}) }
          value={this.state.valor}
          minimumTrackTintColor={'green'}
          maximumTrackTintColor={'red'}
        />
        <Text>{this.state.valor.toFixed()}</Text>
        
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