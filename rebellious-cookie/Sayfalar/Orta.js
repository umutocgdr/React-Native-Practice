import * as React from 'react';
import { Text, View, StyleSheet,Image,onpress,scrollview,WebView } from 'react-native';
const Orta = (props) => {
return(
  <View style={{flex:props.FlexX, backgroundColor:props.backgroundColorX}}>
  <WebView
        source={{uri:props.Url}}/>
 
</View>
);
}
 export default Orta;