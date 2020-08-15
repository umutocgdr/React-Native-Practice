import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo'; //s
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style= {{backgroundColor:'red',width: '100%',height:200 ,  marginTop:24 }}>
        <View style={{backgroundColor:'darkblue', width :50, height :100,marginLeft: 30}}> </View>
          
      
      </View>
    );
  }
}
