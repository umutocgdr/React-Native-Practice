import * as React from 'react';
import { Text, Image, View, WebView, TouchableOpacity } from 'react-native';
import styles from './styles';

const Iletisim = ({ navigation }) => (
  <View style={styles.IletisimZemin}>
   <WebView
        source={{uri: ''}}
        style={{marginTop: 20}}
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

Iletisim.navigationOptions = {
  header: null, 
  headerTintColor: '#fff',
  title: 'Login Sayfası',
  headerStyle: {
    backgroundColor: 'darkred'
  }
  
}
export default Iletisim;