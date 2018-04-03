import { AppRegistry } from 'react-native';
import React from 'react'
import {Scene,Router,Stack,ActionConst} from 'react-native-router-flux'

import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'
const App = () => {
  return(
    <Router>
      <Stack key="root">
        <Scene key='home' component={HomeScreen} title='HomeScreen' hideNavBar={true}/>
        <Scene key="splash" component={SplashScreen} title="SplashScreen" type={ActionConst.REPLACE} hideNavBar={true}/>
      </Stack>
    </Router>
  )
};
AppRegistry.registerComponent('terraceapp', () => App);
