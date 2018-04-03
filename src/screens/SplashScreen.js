import React,{Component} from 'react'
import {AppRegistry,View,Text} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class SplashScreen extends Component{

  componentDidMount(){
    setTimeout(()=>{
      Actions.home()
    },1000);
  }
  render(){
    return(
      <View>
        <Text>Hello </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("SplashScreen",()=>SplashScreen);
