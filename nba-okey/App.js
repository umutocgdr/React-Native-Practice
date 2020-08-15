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
  Gsw=()=> {
    if(this.state.Foto1 == 'https://m.media-amazon.com/images/M/MV5BZDFmM2NhYjktNGFmZS00ZjE1LWJhYjQtZTk0MzVjNDk3MjBmXkEyXkFqcGdeQXVyODkwMzE1OQ@@._V1_.jpg'){
   
     (this.setState({K1:this.state.K2})),
     (this.setState({Takim1:this.state.Takim2})),
     (this.setState({Foto1:this.state.Foto2})),
     (this.setState({Url1:this.state.Url2}))
  
    }
    else if(this.state.Foto1=='https://crookedscoreboard.com/wp-content/uploads/2016/03/Golden-State-Warriors-1.jpg'){
    (this.setState({K1:this.state.K3})),
    (this.setState({Takim1:this.state.Takim3})),
    (this.setState({Foto1:this.state.Foto3})),
    (this.setState({Url1:this.state.Url3}))
        }
        else{
    (this.setState({Foto1:this.state.Foto4})),
    (this.setState({Takim1:this.state.Takim4})),
    (this.setState({Url1:this.state.Url4})),
    (this.setState({K1:this.state.K4})),


      Alert.alert('Başa döndünüz');
        }


      }
  render() {
    return (
     // <ScrollView>
      <View style={umut.container}>
      <Text style={umut.Yazi}> {this.state.Takim1}
      </Text>   
      <Text style={umut.Yazi}> {this.state.K1}
      </Text>
      <TouchableOpacity onPress ={this.Gsw}>
         <Image source={{uri:this.state.Foto1}} 
      style={umut.Foto}/>
       </TouchableOpacity>
     <ScrollView>
      <WebView
        source={{uri:this.state.Url1}}
        style={{marginTop: 10}}
      />
      </ScrollView>
      </View>
    //  </ScrollView>
    );
  }
}

const umut = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow' ,
    padding: 20 ,
  },
  Yazi: {
 //   backgroundColor: 'blue' ,
    justifyContent: 'center',
    margin: 5,
//   paddingTop: Constants.statusBarHeight,
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
