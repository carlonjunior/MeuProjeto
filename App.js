import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import Botao from './src/Components/Botao';
import Imagem from './src/Components/Imagem'
import Saudacao from './src/Components/Saudacao';

class App extends Component {
  
  render(){
    return(
      <View style={styles.container}>
        <Saudacao/>
        <Imagem largura={250} altura={200} nomeImagem='Clique aqui para acessar' />
        <Botao/>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    container:{
      margin: 20,
      alignItems:'center',
      flex: 1
    }
  })

export default App;