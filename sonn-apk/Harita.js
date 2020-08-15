import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MapView } from 'expo';




const Harita = ({ navigation }) => (

  
  <View style={styles.HaritaZemin}>
  
  <MapView style={{ flex: 1 }} 
  initialRegion={{ 
      latitude: 37.872608,
      longitude: 32.492008,
      latitudeDelta: 0.015,
      longitudeDelta:0.015
    }}
  />

    <View style={{
      flex:0.1, alignItems: 'center',}}>
        <TouchableOpacity onPress={() => 
        navigation.navigate('LoginGiris')}>
          <Image style={{width:30,height:30}}
          source={require('./home-512.png')} />
        </TouchableOpacity>
    </View>


    

  </View>
);

Harita.navigationOptions = {
  header: null
}

export default Harita;