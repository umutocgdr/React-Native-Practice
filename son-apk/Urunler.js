import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import axios from 'axios';

class JsonGetir extends Component {
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
      <View style={{flex:1,paddingTop: 5,backgroundColor:'#12aa61'}}>
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

export default JsonGetir;

const VeriSitil = StyleSheet.create({
  Str: {
    backgroundColor:'#25ed8c',
    padding:7,
    margin:5,
  },
  Foto: {
    width:120,
    height:120
  }
})