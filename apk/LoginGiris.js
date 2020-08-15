import * as React from 'react';
import { Text, View,Image,TouchableOpacity } from 'react-native';
import styles from './styles';
const LoginGiris =({ navigation }) => (
<View style={styles.ana}>

<View style={styles.ana2}>
<View style={styles.girisanazemin2}>
<Text style={styles.girisyazi}> MARVEL</Text>
</View>
<View style={styles.girisanazemin}>
<TouchableOpacity onPress={() => navigation.navigate('hakkimizda')} >
<Text style={styles.girisyazi}>PUNISHER</Text>
<Image style={styles.hakico} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9h6UHjwX_0cW9TBsiwuBKP4D1H7h51Efb_gB-ApexQO1cRPaj'}}/>
</TouchableOpacity>
</View>

<View style={styles.girisanazemin2}>
<TouchableOpacity onPress={() => navigation.navigate('Spider')} >
<Text style={styles.girisyazi}>SPIDER-MAN</Text>
<Image style={styles.hakico} source={{uri:'https://pngimage.net/wp-content/uploads/2018/06/marvel-icon-png-7.png'}}/>
</TouchableOpacity>
</View>

<View style={styles.girisanazemin}>
<TouchableOpacity onPress={() => navigation.navigate('Venom')} >
<Text style={styles.girisyazi}>VENOM</Text>
<Image style={styles.hakico} source={{uri:'data:image/png;base64,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'}}/>
</TouchableOpacity>
</View>
</View>
<View style={styles.ana2}>
<View style={styles.girisanazemin}>
<Text style={styles.girisyazi}>UNIVERSE</Text>
</View>
<View style={styles.girisanazemin2}>
<TouchableOpacity onPress={() => navigation.navigate('Wolwerine')} >
<Text style={styles.girisyazi}>WOLWERINE</Text>
<Image style={styles.hakico} source={{uri:'https://cdn1.iconfinder.com/data/icons/people-avatars-10/24/people_avatar_head_wolverine_logan_xman_marvel-512.png'}}/>
</TouchableOpacity>
</View >

<View style={styles.girisanazemin}>
<TouchableOpacity onPress={() => navigation.navigate('Deadpool')} >
<Text style={styles.girisyazi}>DEADPOOL</Text>
<Image style={styles.hakico} source={{uri:'https://i.ebayimg.com/images/g/l04AAOSwHxVW7YKE/s-l300.jpg'}}/>
</TouchableOpacity>
</View>

<View style={styles.girisanazemin2}>
<TouchableOpacity onPress={() => navigation.navigate('Iron')} >
<Text style={styles.girisyazi}>IRON-MAN</Text>
<Image style={styles.hakico} source={{uri:'https://cdn3.iconfinder.com/data/icons/mask/154/iron-man-skin-face-mask-512.png'}}/>
</TouchableOpacity>
</View>
</View>
</View>
);

LoginGiris.navigationOptions ={
title:'Login Page',
headerStyle:{
backGroundColor:'darkred'
}
}
export default LoginGiris;