import React,{Component} from 'react'
import {AppRegistry,View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {Card,WingBlank,WhiteSpace} from 'antd-mobile'
import LinearGradient from 'react-native-linear-gradient';
import {images,colors} from '../R'

const subSubText = "Studing at VIT, Chennai\nHas interests in React";
export default class ProfileCard extends Component{

  constructor(props)
  {
    super(props);
    //this.onPress = props.onPress.bind(this);
  }
  render(){
    return(
      <TouchableOpacity onPress={this.props.onPress} style={{marginTop:100}}>
        <View style={styles.container}>
          <WingBlank size='lg'>
            <Card style={styles.cardStyle}>
              <Card.Body>
                <Text style={[styles.subTextStyle,{fontSize:40,color:'black'}]}>Sridhar Swain</Text>
                <Text style={[styles.subTextStyle,{fontSize:16}]}>from Bhubaneswar, Odisha</Text>
                <WhiteSpace size='lg'/>
                <Text style={[styles.subTextStyle,{fontSize:20}]}>{subSubText}</Text>
                <WhiteSpace size='lg'/>
                <WhiteSpace size='lg'/>
                <WhiteSpace size='lg'/>
                <View style={{flexDirection:'row'}}>
                  <Image source={images.places} style={{width:24,height:24}}/>
                  <Text style={[styles.ubSubText,{fontSize:20}]}>Places</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:20}}>
                  <Text style={styles.roundText}>Miami Florida</Text>
                  <Text style={styles.roundText}>BBSR, Odisha</Text>
                </View>
              </Card.Body>
            </Card>
          </WingBlank>
          <Image source={this.props.pic} style={styles.picStyle}/>
          </View>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container :{
      alignItems : 'center',
      justifyContent : 'center'
    },
    cardStyle : {
      borderRadius:50,
      height : 400,
      width : 350,
      marginTop : 100,
      paddingTop: 100,
      alignItems: 'center',
      justifyContent : 'center',
      backgroundColor : 'transparent'
    },
    picStyle:{
      borderRadius:100,
      width : 150,
      height : 150,
      position: 'absolute',
      bottom : 300
    },
    subTextStyle:{
      textAlign: 'center',
    },
    roundText:{
      borderRadius:10,
      backgroundColor:colors.inkBlue,
      color : 'white',
      padding:4,
      margin:5
    }
});

AppRegistry.registerComponent("ProfileCard",()=>ProfileCard)
