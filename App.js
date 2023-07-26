import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Switch, TextInput } from 'react-native'

import Lista from './src/Lista'
import {Picker} from '@react-native-picker/picker'
import Pessoas from './src/Pessoas/'
import Slider from '@react-native-community/slider'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar ', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'aa', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
    }
  }


  render(){

    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('./src/img/logo.png')}
              style={styles.logo}
              />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            resizeMode='cover'
              source={require('./src/img/send.png')}
              style={styles.send}
              />
          </TouchableOpacity>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={true}
          keyExtractor={item => item.id}
          data={this.state.feed}
          renderItem={ ({item}) => <Lista data={item} />}
        /> 
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: '#FFF',
    height: 55,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 5,
    shadowColor: '#000',
    borderBottomWidth: 0.2,
    alignItems: 'center',
    elevation: 1,
  },
  send:{
    width: 23,
    height: 23
  }

});

export default App;