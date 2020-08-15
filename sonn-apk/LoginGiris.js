import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const LoginGiris = ({ navigation }) => (
  <View style={styles.LoginAnaZemin}>
    <View style={styles.AnaGirisSatir}>
        <TouchableOpacity style={styles.AnaGirisHucre1}>
        <Text style={styles.HucreText}>MERHABA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.AnaGirisHucre2} onPress={() => 
        navigation.navigate('Hakkimizda')}>
        <Text style={styles.HucreText}>HAKKIMIZDA</Text>
        </TouchableOpacity>
    </View>


    <View style={styles.AnaGirisSatir}>
        <TouchableOpacity style={styles.AnaGirisHucre2} onPress={() => 
        navigation.navigate('Harita')}>
        <Text style={styles.HucreText}>HARİTA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.AnaGirisHucre1} onPress={() => 
        navigation.navigate('Iletisim')}>
        <Text style={styles.HucreText}>İLETİŞİM</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.AnaGirisSatir}>
        <TouchableOpacity style={styles.AnaGirisHucre1} onPress={() => 
        navigation.navigate('Urunler')}>
        <Text style={styles.HucreText}>
        ÜRÜNLER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.AnaGirisHucre2} onPress={() => 
        navigation.navigate('Hakkimizda')}>
        <Text style={styles.HucreText}>HAKKIMIZDA</Text>
        </TouchableOpacity>
    </View>


    <View style={styles.AnaGirisSatir}>
        <TouchableOpacity style={styles.AnaGirisHucre2} onPress={() => 
        navigation.navigate('Hakkimizda')}>
        <Text style={styles.HucreText}>ANA SAYFA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.AnaGirisHucre1} onPress={() => 
        navigation.navigate('Hakkimizda')}>
        <Text style={styles.HucreText}>HAKKIMIZDA</Text>
        </TouchableOpacity>
    </View>
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