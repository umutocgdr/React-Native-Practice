import * as React from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity, Image,Fields } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Hakkimizda = ({ navigation }) => (
  <View style={styles.HakkimizdaZemin}>
  <ScrollView style={{flex:1}}>
    <Text style={styles.HakkimizdaBaslik}>
      HAKKIMIZDA
    </Text>
    <Text style={{padding:5,fontSize:20} }>
    Merhaba ben 11HOPE SOFTWARE'in sahibi Umut ÖÇGÜDER
    11Hope 11 Kasım 2019'da kurulan teknoloji hedefli bir şirkettir. (yalan bu staj ödevim kuruluş tarihi bile yalan moruk)
    </Text>
    </ScrollView>
    <View> 
    
<Text style={ { fontSize:15,padding:-5,textAlign: 'center'}}>
Created by Umut ÖÇGÜDER
</Text>
<Text style={{  fontSize:15,textAlign: 'center'}}>
Design by Ferhat KÜÇÜKŞAKALAK
</Text>

 </View>

    <View style={{
      flex:0.1, alignItems: 'center',}}>
        <TouchableOpacity onPress={() =>
        navigation.navigate('LoginGiris')}>
          <Image style={{width:42,height:42}}
          source={require('./icons8-punisher-512.png')} />
        </TouchableOpacity>
    </View>
  </View>
);

Hakkimizda.navigationOptions = {
  header: null
}

export default Hakkimizda;