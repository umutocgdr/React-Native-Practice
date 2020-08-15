import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo'; 
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={Mysitil.Anazemin}>
        <Text> asdasdas
        </Text>
      </View>
    );
  }
}
const Mysitil=StyleSheet.create({
  Anazemin :{ 
    backgroundColor: 'red',
    marginTop: 20,
    justifyContent: 'Center',
    alignItems  : 'Center ',
  },
});


