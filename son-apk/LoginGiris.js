import * as React from 'react';
import { Text, View, Image, TouchableOpacity ,ImageBackground,WebView} from 'react-native';
import styles from './styles';

const LoginGiris = ({ navigation }) => (
  <View style={styles.LoginAnaZemin}>
   <ImageBackground source={require('./ASDCXZCZX.png')} 
    style={{width: '100%', height: '100%'}}>
      <View style={styles.AnaGirisSatir}>
        <View style={styles.AnaGirisHucre1}>
          <Image style={{width:175,height:170}}
          source={require('./Çalışma Yüzeyi 2.png.png')} />
          </View>
          <View style={styles.AnaGirisHucre2}>

          <TouchableOpacity onPress={() =>
          <WebView
          source={{uri:'https://google.com'}}
          style={{marginTop: 20}}
          />}>
          <Image style={{width:30,height:30}}
          source={require('./Çalışma Yüzeyi 2.png.png')}  />
          </TouchableOpacity> 

          <TouchableOpacity onPress={() =>
          <WebView
          source={{uri:'https://google.com'}}
          style={{marginTop: 20}}
          />}>
          <Image style={{width:30,height:30}}
          source={require('./icons8-facebook-filled-48.png')} />
          </TouchableOpacity> 

          <TouchableOpacity onPress={() =>
          <WebView
          source={{uri:'https://google.com'}}
          style={{marginTop: 20}}
          />}>
          <Image style={{width:30,height:30}}
          source={require('./icons8-twitter-filled-48.png')} />
          </TouchableOpacity> 

          <TouchableOpacity onPress={() =>
          <WebView
          source={{uri:'https://github.com/facebook/react-native'}}
          style={{marginTop: 20}}
          />}>
          <Image style={{width:30,height:30}}
          source={require('./icons8-instagram-filled-48.png')} />
          </TouchableOpacity> 

          <TouchableOpacity onPress={() =>
          <WebView
          source={{uri:'https://github.com/facebook/react-native'}}
          style={{marginTop: 20}}
          />}>
          <Image style={{width:30,height:30}}
          source={require('./icons8-play-button-filled-48.png')} />
          </TouchableOpacity> 

          <TouchableOpacity onPress={() =>
          <WebView
          source={{uri:'https://github.com/facebook/react-native'}}
          style={{marginTop: 20}}
          />}>
          <Image style={{width:30,height:30}}
          source={require('./icons8-linkedin-filled-48.png')} />
          </TouchableOpacity> 

          <TouchableOpacity onPress={() =>
          <WebView
          source={{uri:'https://github.com/facebook/react-native'}}
          style={{marginTop: 20}}
          />}>
          <Image style={{width:30,height:30}}
          source={require('./icons8-stack-overflow-filled-48.png')} />
          </TouchableOpacity> 

          <TouchableOpacity onPress={() =>
          <WebView
          source={{uri:'https://github.com/facebook/react-native'}}
          style={{marginTop: 20}}
          />}>
          <Image style={{width:30,height:30}}
          source={require('./icons8-github-filled-50.png')} />
          </TouchableOpacity> 

        </View> 
     </View>
           <TouchableOpacity style={styles.AnaGirisHucre1} onPress={() => 
        navigation.navigate('Urunler')}>
        <Text style={styles.HucreText}>
        ÜRÜNLER</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.AnaGirisHucre1} onPress={() => 
        navigation.navigate('Harita')}> 
        <Text style={styles.HucreText}>HARİTA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.AnaGirisHucre1} onPress={() => 
        navigation.navigate('Hakkimizda')}>
        <Text style={styles.HucreText}>HAKKIMIZDA</Text>
        </TouchableOpacity>
  </ImageBackground>
  </View>
);

LoginGiris.navigationOptions = {
  header: null, 
  headerTintColor: '#fff',
  title: 'Login Sayfası',
  headerStyle: {
    backgroundColor: 'darkred'
  }
  
}
export default LoginGiris;