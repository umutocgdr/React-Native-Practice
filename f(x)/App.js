import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo'; 
import AssetExample from './components/AssetExample';
import { Card } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={Mysitil.Anazemin}>
 <View style={Mysitil.Purplezemin}>
 <Text>U</Text> </View>
 <View style={Mysitil.Pinkzemin}>
 <Text>M</Text> </View>
 <View style={Mysitil.Greenzemin}>
 <Text>U</Text> </View>
 <View style={Mysitil.Blackzemin}>
 <Text>T</Text> </View>


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
  Purplezemin :{
    backgroundColor: 'purple',
    flex :1,
    justifyContent: 'Center',
    alignItems  : 'Center ',

  } ,
  Pinkzemin :{
   backgroundColor: 'pink',
    flex :1,
marginTop: 20,
justifyContent: 'Center',
    alignItems  : 'Center ',


  },
  Greenzemin :{

  backgroundColor: 'green',
    flex :1,
marginTop: 20,
justifyContent: 'Center',
    alignItems  : 'Center ',
  },
  Blackzemin :{

  backgroundColor: 'black',
    flex :1,
marginTop: 20,
justifyContent: 'Center',
    alignItems  : 'Center ',
  },



  Ustbaslik :{
    fontSize:50,
    color:'blue',
    marginTop: 20,
    marginBottom : 200,
    fontWeight : 'bold',
    

  },
});
