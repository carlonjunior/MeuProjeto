import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

export default class Imagem extends Component {
    render(){
      let imagem = 'https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-add-user-icon-png-image_4101420.jpg';
  
      return(
        <View >
          <Image  
          source={{uri: imagem }}
          style={{width: this.props.largura , height: this.props.altura}}
          />
          <Text> {this.props.nomeImagem} </Text>
        </View>
      )
    }
}





