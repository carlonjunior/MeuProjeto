import React , {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Saudacao extends Component {
    render(){
        let textoSaudacao = 'Olá Seja Bem-Vindo';
        let nome = 'Carlon';
        return(
            <View style={styles.title}>
                <Text style={{color: '#0000FF'}}>
                    { textoSaudacao }
                </Text>
                <Text> Lorem Ipsum is simply dummy text of the {nome}</Text>
            </View>
        )
    }




}

const styles = StyleSheet.create({
    title:{
      alignItems: 'center'
    }
    

  })