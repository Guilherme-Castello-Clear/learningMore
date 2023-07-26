import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Pessoas extends Component{
    render(){
      return(
        <View style={styles.areapessoa}>
          <Text style={styles.txtpessoa}>{this.props.data.nome}</Text>
          <Text style={styles.txtpessoa}>{this.props.data.idade}</Text>
          <Text style={styles.txtpessoa}>{this.props.data.email}</Text>
        </View>
      )
    }
  }

const styles = StyleSheet.create({
    areapessoa:{
        backgroundColor: '#222',
        height: 200,
        marginBottom: 15
      },
      txtpessoa:{
        color: '#FFF',
        fontSize: 20
      }
})

export default Pessoas