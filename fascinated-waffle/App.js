import * as React from 'react';
import { Text, View, StyleSheet , ScrollViev,Button,Alert,Image,TouchableOpacity} from 'react-native';
export default class App extends React.Component {

 ButonFonk(){
    Alert.alert('one');
    }
      render() {
    return (
     
      <View style={Ana.zemin}>
       <Text style={Ana.baslik}>
        HELL YEAH !
       </Text>
        <Button title="metallica"
   //     color='purple'
        onPress={this.ButonFonk} />
        <TouchableOpacity onPress={this.ButonFonk} >
     <Image style={Ana.TiritStil}  source={{uri:'https://img-s1.onedio.com/id-5b040dab2c2d3961102bdf34/rev-0/w-635/f-jpg-webp/s-048c34216d6bc9243df5b05861e66db10a3279f1.webp'}}/>
     </TouchableOpacity>
      </View>
    );
  }
}
const Ana = StyleSheet.create({
  zemin:{
  backgroundColor: 'darkblue',
  flex: 1,
  },
  TiritStil :{
  justifyContent: 'center',
    textAlign: 'center',
  width : '100%',
  height : 300,
  padding:35,
  },
  baslik: {
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
 //   margin: 24,
    textAlign: 'center',
 //   paddingTop:,
    backgroundColor: 'pink',
padding:35,
  },
 // buton:{
  //color: 'blue',
  
  //},
//duz: {
  //  margin: 24,
    //fontSize: 18,
    //fontWeight: 'bold',
   // textAlign: 'center',
//  },
 
});
