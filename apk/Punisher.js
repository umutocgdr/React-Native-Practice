import * as React from 'react';
import { Text, View,Image,ScrollView,TouchableOpacity,WebView} from 'react-native';
import styles from './styles';

export default ({navigation}) => (
<View style={styles.hakkimizdazemin}>
<ScrollView>
<Text style={styles.girisyazi}> PUNISHER </Text>
<Image style={styles.hakico} source={{uri:'https://m.media-amazon.com/images/M/MV5BMjQzMTE1NjQwNl5BMl5BanBnXkFtZTgwNTM0NjM5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg'}}/>
<Text style={styles.duz}> 
The Punisher (Francis "Frank" Castle, born Castiglione) is a fictional character appearing in American comic books published by Marvel Comics. The character was created by writer Gerry Conway and artists John Romita Sr. and Ross Andru, with publisher Stan Lee green-lighting the name. The Punisher made his first appearance in The Amazing Spider-Man #129 (cover-dated February 1974).

The character is an Italian-American[4][5] vigilante who employs murder, kidnapping, extortion, coercion, threats of violence, and torture in his campaign against crime. Driven by the deaths of his wife and two children who were killed by the mob for witnessing a killing in New York City's Central Park, the Punisher wages a one-man war on the mob and all violent criminals in general while employing the use of various firearms.[6] His family's killers were the first to be slain.[7] A war veteran and a United States Marine Corps Scout Sniper, Castle is skilled in hand-to-hand combat, guerrilla warfare, and marksmanship.[4][5]

The Punisher's brutal nature and willingness to kill made him a novel character in mainstream American comic books when he debuted in 1974. By the late 1980s, the Punisher was part of a wave of psychologically-troubled antiheroes. At the height of his popularity, the character was featured in four monthly publications, including The Punisher, The Punisher War Journal, The Punisher War Zone, and The Punisher Armory. Despite his violent actions and dark nature, the Punisher has enjoyed some mainstream success on television, making guest appearances on Spider-Man: The Animated Series, and The Super Hero Squad Show, where the depiction of his violent behavior was toned down for family viewers. In feature films, Dolph Lundgren portrayed the Punisher in 1989, as did Thomas Jane in 2004, and Ray Stevenson in 2008. Jon Bernthal portrays the character in the second season of Marvel's Daredevil as a part of the Marvel Cinematic Universe. Bernthal also reprised the role again in the Netflix original Marvel TV series The Punisher in 2018.

</Text>
<WebView source={{uri: 'https://www.marvel.com/comics/discover/361/the-punisher'}} style={{marginTop: 5}}/>
</ScrollView>
<View style={styles.zzz}>
<TouchableOpacity onPress={() => navigation.navigate('LoginGiris')}>
<Image style={styles.kucuk} source={{uri:'https://image.flaticon.com/icons/svg/60/60817.svg'}}/>
<Text style={styles.duz}> MAIN MENU</Text> 
</TouchableOpacity>
</View> 
</View>
);