import * as React from 'react';
import styles from './styles'
import Galeri from './galeri'
import { Text, View, StyleSheet ,ScrollView,Image } from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.zemin}>
       <ScrollView>
        <Text style={styles.baslik}>
        UMUT SANAT GALERİSİ
        </Text>
        <Galeri/>
      </ScrollView>
      </View>
    );
  }
}