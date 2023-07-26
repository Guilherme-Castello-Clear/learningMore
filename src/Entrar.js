import React, { Component } from 'react'
import { View, Text, StyleSheet, Keyboard, Image, TouchableOpacity, ScrollView, FlatList, Switch, TextInput, Modal, Button } from 'react-native'


export default class App extends Component{
    render(){
        return(
            <View style={{backgroundColor: 'green', width: '100%', height: 350, borderRadius: 15}}>
                <Text style={{textAlign: 'center', paddingTop:15, fontSize: 28}}>Seja bem-vindo!</Text>
                <Button title="Sair" onPress={() => this.props.fechar()}></Button>
            </View>
        )
    }
}