import React,{Component} from 'react'
import {AppRegistry,View,ScrollView,StyleSheet,Image,Button,Text,TouchableOpacity,Dimensions,FlatList,PanResponder} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {ListItem } from "react-native-elements"
import {Card,WingBlank,WhiteSpace} from 'antd-mobile'
import Details from './Details';

import ProfileCard from '../components/ProfileCard'
import {colors,images} from '../R'

const subSubText = "Studing at VIT, Chennai\nHas interests in React";

export default class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible: false,
       width:null,
       height:null,
       messageVisible :false,
       posts : [
         {title : 'Anna Furrow',subtitle:'This is subtitle',image:images.sid},
         {title : 'Jane Nylan',subtitle:'This is subtitle',image:images.sid},
         {title : 'Bob Janzen',subtitle:'This is subtitle',image:images.sid},
         {title : 'Carole halor',subtitle:'This is subtitle',image:images.sid},
         {title : 'Erica Wolfram',subtitle:'This is subtitle',image:images.sid},
         {title : 'Sparsha Saha',subtitle:'This is subtitle',image:images.sid},
         {title : 'Lionel Messi',subtitle:'This is subtitle',image:images.sid},
         {title : 'Cristiano Ronaldo',subtitle:'This is subtitle',image:images.sid},
         {title : 'Anna Furrow',subtitle:'This is subtitle',image:images.sid},
         {title : 'Anna Furrow',subtitle:'This is subtitle',image:images.sid},
         {title : 'Anna Furrow',subtitle:'This is subtitle',image:images.sid},
         {title : 'Anna Furrow',subtitle:'This is subtitle',image:images.sid},
         {title : 'Anna Furrow',subtitle:'This is subtitle',image:images.sid}

       ],
       drag : false,
    }
    this.onCardClicked = this.onCardClicked.bind(this);
    this.renderChatItem = this._renderChatItem.bind(this);

    this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gestureState) => {
                this.setState({ drag: false });
                return true;
            },
            onPanResponderRelease: (e, gestureState) => this.setState({drag: true}),
            onPanResponderTerminate: (e, gestureState) => this.setState({drag: false}),
        });
  }

  onCardClicked(){
    this.setState({visible: true,drag : true});
  }

  componentWillMount(){
    var window= Dimensions.get('window');
    this.setState({width:window.width,height:window.height});
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };


  _renderChatItem(item){
    return(
      <TouchableOpacity>
        <ListItem
          roundAvatar
          title={item.title}
          subtitle={item.subtitle}
          avatar={item.image}
          containerStyle={{ borderBottomWidth: 0 }}
          hideChevron={true}>
        </ListItem>
      </TouchableOpacity>
    )
  }

  render(){
    return(
      <View style={styles.container}>

      <LinearGradient colors={[colors.appColor, 'white']}>
      <View style={{flexDirection:'row',marginTop:30,marginLeft:20,marginBottom:-70,alignItems:'center'}}>
        <Image source={images.sid} style={{width:50,height:50,borderRadius:50}}/>
        <Text style={{fontSize:30,color:'black', marginLeft:10}}>Nearby</Text>
      </View>
        <View style={{alignItems:'center', justifyContent:'center',paddingBottom : 30}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft : 20,paddingRight : 20}}>
              <ProfileCard pic={images.sid} onPress={() => this.onCardClicked()}/>
              <ProfileCard pic={images.sid} onPress={() => this.onCardClicked()}/>
              <ProfileCard pic={images.sid} onPress={() => this.onCardClicked()}/>
              <ProfileCard pic={images.sid} onPress={() => this.onCardClicked()}/>
              <ProfileCard pic={images.sid} onPress={() => this.onCardClicked()}/>
          </ScrollView>
          <TouchableOpacity onPress={() => this.setState({messageVisible: true})}>
            <Image source={images.text} style={{width:54,height:54}}/>
          </TouchableOpacity>
        </View>
        </LinearGradient>
        <SlidingUpPanel
          ref={c => this._panel = c}
          visible={this.state.visible}
          onRequestClose={() => this.setState({visible: false})}>
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
        </SlidingUpPanel>
        <SlidingUpPanel
          ref={c => this.messagepanel = c}
          visible={this.state.messageVisible}
          allowDragging={this.state.drag}
          onRequestClose={() => {this.setState({messageVisible: false,drag : false});}}>
          <View style={[styles.container,{marginTop:60,borderRadius:25,backgroundColor:'white'}]}
          {...this._panResponder.panHandlers}>
            <View style={{width:this.state.width,height:this.state.height-105,marginTop:10,borderRadius:25,paddingLeft:10}}
            {...this._panResponder.panHandlers}>
            <Text style={{fontSize:40,color:'black'}}>Messages</Text>
            <FlatList
            {...this._panResponder.panHandlers}
              style={{marginTop:100}}
              data={this.state.posts}
              style={{flex:1,marginBottom:170}}
              renderItem={({item})=>this.renderChatItem(item)}
              keyExtractor={(item, index) =>index}/>
              <View style={{position:'absolute',bottom:20}}>
              <Text style={{fontSize:40,color:'black', marginLeft:10,marginBottom:10}}>Nearby</Text>
            <ScrollView
            {...this._panResponder.panHandlers}
            horizontal={true}
            directionalLockEnabled={false}>
              <Image source={images.sid} style={styles.nearbyPic}/>
              <WhiteSpace size='lg'/>
              <Image source={images.sid} style={styles.nearbyPic}/>
              <Image source={images.sid} style={styles.nearbyPic}/>
              <Image source={images.sid} style={styles.nearbyPic}/>
              <Image source={images.sid} style={styles.nearbyPic}/>
              <Image source={images.sid} style={styles.nearbyPic}/>
              <Image source={images.sid} style={styles.nearbyPic}/>
              <Image source={images.sid} style={styles.nearbyPic}/>
            </ScrollView>
            </View>
            </View>
            </View>
          </SlidingUpPanel>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.appColor,
    alignItems:'center',
    justifyContent:'center',
  },
  picStyle:{
    borderRadius:100,
    width : 150,
    height : 150,
  },
  roundText:{
    borderRadius:10,
    backgroundColor : colors.inkBlue,
    color : 'white',
    padding:4,
    margin:5
  },
  nearbyPic:{
    height:70,
    width :70,
    margin:5,
    borderRadius: 70
  }
});
