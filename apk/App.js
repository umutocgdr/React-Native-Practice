import {createStackNavigator} from 'react-navigation';
import LoginGiris from './LoginGiris';
import Punisher from '/Punisher';
import Spider from '/Spider';
import Venom from '/Venom';
import Wolwerine from '/Wolwerine';
import Deadpool from '/Deadpool';
import Iron from '/Iron';
export default createStackNavigator(
{LoginGiris,
 Punisher,
 Spider,
 Venom,
 Wolwerine,
 Deadpool,
 Iron},
{initialRouteName: 'LoginGiris'}
);