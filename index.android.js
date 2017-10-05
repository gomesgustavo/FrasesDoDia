import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

export default class MeuProjetoRN extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity onPress={this.gerarNovaFrase} style={styles.botao}>
            <Text style={styles.textoBotao}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }

  gerarNovaFrase(){
    var numAleatorio = Math.random();
    numAleatorio = Math.floor(numAleatorio * 5);

    var frases = Array();
    frases[0] = 'aa';
    frases[1] = 'bb';
    frases[2] = 'cc';
    frases[3] = 'dd';
    frases[4] = 'ee';

    var fraseEscolhida = frases[numAleatorio];
    Alert.alert(fraseEscolhida);
  }







}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  botao:{
    backgroundColor:'#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  textoBotao:{
    color:'white',
    fontSize:16,
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('MeuProjetoRN', () => MeuProjetoRN);
