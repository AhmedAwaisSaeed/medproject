
import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Navigation} from 'react-native-navigation';
import {base_url} from './src/components/AllVariables';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';

import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';




class Laboratory extends Component {


  constructor(props){
    super(props);
    this.state={
      name:"new",
      userName:"",
      password:"",
      text1:"",
      buttonone:false,
      buttontwo:false,
      load:false
  
    }
  }

  on_pressed_back=()=>{

    Navigation.pop(this.props.componentId);
    
  }
 componentDidMount(){

   console.log("response in lab=",this.props.response);
   this.setState({
     load:true
   })
 }



  render(){
    
    return (
            <>
              <StatusBar barStyle="light-content" backgroundColor="#ff3358" />
              
             <View style={styles.mainContainer}>
            
             <View style={styles.header}>
             <TouchableOpacity onPress={()=>this.on_pressed_back()} >
             <Image style={{height:25,width:35,marginLeft:15}} source={require('./src/assets/arrow-89-512.png')} ></Image>
             </TouchableOpacity>
             <Text style={{marginLeft:85,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>Laboratory</Text>
             </View>

             <View style={{flex:1}}>  
           
           <View style={{backgroundColor:"#5199e5",height:verticalScale(230)}}>
           <View style={{marginTop:"5%",height:verticalScale(50),flexDirection:"row"}}>
          
           <View style={{flex:0.2,justifyContent:"center",alignItems:"center"}}><Image style={{height:"50%",width:"50%",tintColor:"white"}} source={require('./src/assets/placeholder.png')}></Image></View>
          
     <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text style={{color:"white",fontWeight:"bold",fontSize:hp('3%')}}>Location : {this.props.response.address}</Text></View>
          
           </View>


           <View style={{marginTop:"5%",height:verticalScale(50),flexDirection:"row"}}>
          
          <View style={{flex:0.2,justifyContent:"center",alignItems:"center"}}><Image style={{height:"50%",width:"50%",tintColor:"white"}} source={require('./src/assets/phone.png')}></Image></View>
         
    <View style={{flex:1,justifyContent:"center"}}><Text style={{color:"white",fontWeight:"bold",fontSize:hp('3%')}}>Phone : {this.props.response.phoneNumber}</Text></View>
         
          </View>


          <View style={{marginTop:"5%",height:verticalScale(50),flexDirection:"row"}}>
          
          <View style={{flex:0.2,justifyContent:"center",alignItems:"center"}}><Image style={{height:"50%",width:"50%",tintColor:"white"}} source={require('./src/assets/clock.png')}></Image></View>
         
    <View style={{flex:1,justifyContent:"center"}}><Text style={{color:"white",fontWeight:"bold",fontSize:hp('3%')}}>Time : {this.props.response.timing}</Text></View>
         
          </View>
   
         
           </View>
           
        <View style={{flex:1,backgroundColor:"orange"}}>
{this.state.load &&
            <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude:parseFloat(this.props.response.lat),
         longitude:parseFloat(this.props.response.long),
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       onLayout={this.onLayout}
     >
         <Marker
            
            pinColor="red"
            coordinate={{latitude:parseFloat(this.props.response.lat),
              longitude:parseFloat(this.props.response.long) }}
            title={this.props.response.name}
            // description={}
                />
     </MapView> 
  }


           </View>
         
           </View>

    
              </View>
    
              
            
           </>
        );
   }
};

const styles = StyleSheet.create({


  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  header:{
    
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#ff3358",
    height:60
    
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },


});

export default Laboratory;
