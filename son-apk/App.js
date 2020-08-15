import { createStackNavigator } from 'react-navigation';
import LoginGiris from './LoginGiris';
import Hakkimizda from './Hakkimizda';
import Harita from './Harita';
import Iletisim from './Iletisim';
import Urunler from './Urunler';
import Hizmetler from './Hizmetler';
export default createStackNavigator(
  {
    LoginGiris,
    Hakkimizda,
    Harita,
    Iletisim,
    Urunler,
    Hizmetler,
  },
  {
    initialRouteName: 'LoginGiris',
  }
);
