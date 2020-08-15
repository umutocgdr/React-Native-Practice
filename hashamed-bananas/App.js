import * as React from 'react';
import { Text, View, StyleSheet,Image , Platform ,TouchableOpacity, ScrollView,Alert,WebView} from 'react-native';
import { Constants } from 'expo';
import AssetExample from './components/AssetExample';
export default class App extends React.Component {
  state={
    Takim1:'Los Angeles Lakers',
    Takim2:'Golden State Warriors',
    Takim3:'Chicago Bulls',
    Takim4:'Los Angeles Lakers',

    K1:'(LAL)',
    K2:'(GSW)',
    K3:'(CB)',
    K4:'(LAL)',

    Foto1:'https://m.media-amazon.com/images/M/MV5BZDFmM2NhYjktNGFmZS00ZjE1LWJhYjQtZTk0MzVjNDk3MjBmXkEyXkFqcGdeQXVyODkwMzE1OQ@@._V1_.jpg',//lakers
    Foto2:'https://crookedscoreboard.com/wp-content/uploads/2016/03/Golden-State-Warriors-1.jpg',//warriors
    Foto3:'https://images-na.ssl-images-amazon.com/images/I/81obqt4Q9uL._SX466_.jpg',//bulls
    Foto4:'https://m.media-amazon.com/images/M/MV5BZDFmM2NhYjktNGFmZS00ZjE1LWJhYjQtZTk0MzVjNDk3MjBmXkEyXkFqcGdeQXVyODkwMzE1OQ@@._V1_.jpg',//lakers

    Url1:'https://www.nba.com/lakers/',
    Url2:'https://www.nba.com/warriors/',
    Url3:'https://www.nba.com/bulls/',
    Url4:'https://www.nba.com/lakers/',
  
  }
  Lal=()=> {
     this.setState({K2:this.state.K4}),
     this.setState({Takim2:this.state.Takim4}),
     this.setState({Foto2:this.state.Foto4}),
     this.setState({Url2:this.state.Url4})
      }
  Gsw=()=> {
     this.setState({K1:this.state.K2}),
     this.setState({Takim1:this.state.Takim2}),
     this.setState({Foto1:this.state.Foto2}),
     this.setState({Url1:this.state.Url2})
      }
  Cb=()=> {
    this.setState({K1:this.state.K3}),
    this.setState({Takim1:this.state.Takim3}),
    this.setState({Foto1:this.state.Foto3}),
    this.setState({Url1:this.state.Url3})
      }
  
  render() {
    return (
     // <ScrollView>
      <View style={umut.container}>
      <TouchableOpacity onPress ={this.Gsw}>
      <Text style={umut.Yazi}> {this.state.Takim1}
      </Text>
      </TouchableOpacity>
       <TouchableOpacity onPress ={this.LaL}>
      <Text style={umut.Yazi}> {this.state.K1}
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress ={this.Cb}>
         <Image source={{uri:this.state.Foto1}} 
      style={umut.Foto}/>
       </TouchableOpacity>
      // <ScrollView>
      <WebView
        source={{uri:this.state.Url1}}
        style={{marginTop: 10}}
      />
       //</ScrollView>
      </View>
    //  </ScrollView>
    );
  }
}

const umut = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS=='ios'?  'yellow': 'purple' ,
    padding: Platform.OS=='ios' ? 20 : 50,
  },
  Yazi: {
 //   backgroundColor: 'blue' ,
    justifyContent: 'center',
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 2,
  },
 Foto: {
  width: '100%',
  height :265
  },
});
