import React,{Component} from 'react';
import {AppRegistry,View,Text,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import {Card,WingBlank,WhiteSpace} from 'antd-mobile'
import LinearGradient from 'react-native-linear-gradient';
import {images,colors} from '../R'

const subSubText = "Studing at VIT, Chennai\nHas interests in React";
export default class Details extends Component{
  constructor(props){
    super(props);
    this.state={
      width :  null,
      height : null
    };
  }
  componentWillMount(){
    var window= Dimensions.get('window');
    this.setState({width:window.width,height:window.height});
  }
  render(){
    return(
      <View style={[styles.container,{marginTop:60,borderRadius:25}]}>
      <LinearGradient colors={[colors.appColor, 'white']}>
      <View style={{width:this.state.width,height:this.state.height-105,justifyContent:'center',alignItems:'center'}}>
      <View style={{justifyContent:'center',alignItems:'center',width:this.state.width}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity onPress={() => {}} style={{padding:30}}>
        <Image source={images.sent} style={{width:54,height:54}}/>
      </TouchableOpacity>
        <Image source={images.sid} style={styles.picStyle}/>
        <TouchableOpacity onPress={() => {}} style={{padding:30}}>
          <Image source={images.text} style={{width:54,height:54}}/>
        </TouchableOpacity>
      </View>

      <Text style={[styles.subTextStyle,{fontSize:40}]}>Sridhar Swain</Text>
      <Text style={[styles.subTextStyle,{fontSize:16}]}>from Bhubaneswar, Odisha</Text>
      <WhiteSpace size='lg'/>
      <Text style={[styles.subTextStyle,{fontSize:20}]}>{subSubText}</Text>
      <WhiteSpace size='lg'/>
      <WhiteSpace size='lg'/>
      <WhiteSpace size='lg'/>
      <View style={{flexDirection:'row',marginTop:20,alignSelf:'flex-start',marginLeft:40}}>
        <Image source={images.places} style={{width:24,height:24}}/>
        <Text style={[styles.subSubText,{fontSize:20,marginLeft:10}]}>Places</Text>
      </View>
      <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:60}}>
        <Text style={styles.roundText}>Miami Florida</Text>
        <Text style={styles.roundText}>BBSR, Odisha</Text>
      </View>

      <View style={{flexDirection:'row',marginTop:20,alignSelf:'flex-start',marginLeft:40}}>
        <Image source={images.education} style={{width:24,height:24}}/>
        <Text style={[styles.subSubText,{fontSize:20,marginLeft:10}]}>Studies</Text>
      </View>
      <View style={{flexDirection:'row',alignSelf:'flex-start',marginLeft:60}}>
        <Text style={styles.roundText}> VIT, Chennai </Text>
        <Text style={styles.roundText}> Resonance, Kota </Text>
      </View>
      </View>
        </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subTextStyle:{
    textAlign: 'center',
  },
})

AppRegistry.registerComponent("Details",()=>Details);
