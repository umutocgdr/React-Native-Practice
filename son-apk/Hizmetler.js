import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';

class Hizmetler extends Component {
  state = {
    JsonVeri:[]
  }

  componentWillMount() {
    axios.get('http://www.galesizler.com/json.php?Ara=')
    .then(Gv=>this.setState({JsonVeri:Gv.data}))
  }

  Detayver =(item) => {
    alert("Seçtiğiniz Ürünün Numarası: "+item.id);
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <ScrollView>
        {
          this.state.JsonVeri.map((item, index) => (
            <TouchableOpacity style={VeriSitil.Str}
            onPress = {() => this.Detayver(item)}
            >
              <Text>{item.acik} {item.fiyat} ₺</Text>
              <Image style={VeriSitil.Foto} source={{uri:item.foto}} />
            </TouchableOpacity>
          ))                                          
        }
        </ScrollView>
      </View>
    )

  }
}

export default Hizmetler;

const VeriSitil = StyleSheet.create({
  Str: {
    backgroundColor:'green',
    padding:5,
    margin:5,
  },
  Foto: {
    width:150,
    height:150
  }
})