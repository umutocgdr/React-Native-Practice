import * as React from 'react';
import { Text, View, StyleSheet,Image , Platform ,TouchableOpacity} from 'react-native';
import { Constants } from 'expo';
import AssetExample from './components/AssetExample';
export default class App extends React.Component {
  state={
    Foto1:'https://m.media-amazon.com/images/M/MV5BZDFmM2NhYjktNGFmZS00ZjE1LWJhYjQtZTk0MzVjNDk3MjBmXkEyXkFqcGdeQXVyODkwMzE1OQ@@._V1_.jpg'
  }
  render() {
    return (
      <View style={umut.container}>
      <TouchableOpacity>
      <Image source={{uri:this.state.Foto1}} 
      style={umut.Fotoenboy}/>
      </TouchableOpacity>
      </View>
    );
  }
}

const umut = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS=='ios'?  'yellow': 'purple' ,
    padding: Platform.OS=='ios' ? 50 : 100,
  },
 Fotoenboy: {
  width: '100%',
  height : 200
  },
});
