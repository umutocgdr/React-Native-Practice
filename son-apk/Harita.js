import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MapView } from 'expo';
const Harita = ({ navigation }) => (
  <View style={styles.HaritaZemin}>
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 38.3246814,
        longitude: 26.7208725,
        latitudeDelta: 1.3,
        longitudeDelta: 0.3,
      }}
    />
    <View
      style={{
        flex: 0.1,
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('LoginGiris')}>
        <Image
          style={{ width: 42, height: 42 }}
          source={require('./icons8-punisher-512.png')}
        />
      </TouchableOpacity>
    </View>
  </View>
);
Harita.navigationOptions = {
  header: null,
};

export default Harita;