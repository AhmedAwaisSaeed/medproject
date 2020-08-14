
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Navigation} from 'react-native-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RedButton from './src/components/Buttons/RedButton';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';

const placeholder ={
  label: 'select a time',
  value:0
}

class Doctor extends Component {


  constructor(props){
    super(props);
    this.state={
      name:"new",
      userName:"",
      password:"",
      text1:"",
      buttonone:false,
      buttontwo:false,
  
    }
  }

  componentDidMount(){

    console.log("props in Doctor",this.props.response);
  }

  on_pressed_back=()=>{

    Navigation.pop(this.props.componentId);
    
  }
    
    onPressed_Appointment=()=>{
      Navigation.push(this.props.componentId, {
        component: {
          name: 'AppointMent',
          passProps: {
            response: this.props.response
          },
          options: {
            topBar: {
              title: {
                text: 'Pushed screen title'
              }
            }
          }
        }
      });
    }



  render(){
    
    return (
            <>
              <StatusBar barStyle="light-content" backgroundColor="#ff3358" />

   
             <KeyboardAwareScrollView>
            
             <View style={styles.mainContainer}>
            
             <View style={styles.header}>
             <TouchableOpacity onPress={()=>this.on_pressed_back()} >
             <Image style={{height:25,width:35,borderRadius:40,marginLeft:15}} source={require('./src/assets/arrow-89-512.png')} ></Image>
             </TouchableOpacity>
             <Text style={{marginLeft:90,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>Doctor</Text>
             </View>

             <View style={styles.img}>  

             

             <Text style={{marginVertical:"5%",color:"#5199e5",fontSize:hp('3%')}}>
              {this.props.response.name}
             </Text>
             
             </View>


             <View style={{height:verticalScale(300),marginHorizontal:"5%", backgroundColor:"orange"}}>

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


             </View>




             <View style={{backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginLeft:60,marginTop:"5%"}}>
              <Text style={{fontWeight:"bold",fontSize:RFValue(18) ,color:"#5199e5"}}>Specialization</Text>

             <Text style={{marginBottom:10,marginTop:10,fontSize:hp('3%')}} >
             {this.props.response.specialization}
             </Text>
             </View>

             <View style={{marginTop:"5%",backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginLeft:60,}}>
             <Text style={{fontWeight:"bold",fontSize:RFValue(18) ,color:"#5199e5"}}>Timing</Text>
             
             <Text style={{marginBottom:10,marginTop:10,fontSize:hp('3%')}} >
             {this.props.response.timing}
             </Text>
             </View>


             <View style={{marginTop:"5%",backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginLeft:60,}}>
             <Text style={{fontWeight:"bold",fontSize:RFValue(18) ,color:"#5199e5"}}>Fees</Text>
             <Text style={{marginBottom:10,marginTop:10,fontSize:hp('3%')}} >
             {this.props.response.fees}
             </Text>
             </View>


              {/* <View style={{alignItems:"center",marginTop:100,marginBottom:200}}>
                
              <TouchableOpacity  style={{alignItems:"center",justifyContent:"center",backgroundColor:"#5199e5",height:60,width:250,borderRadius:70}} onPress={()=>this.onPressed_Appointment()} >
              <Text style={{color:"white",fontSize:hp('3%')}}>Make a Appointment</Text>
              </TouchableOpacity>
              </View>         */}

      <RedButton
        style={{backgroundColor:"#5199E5",borderWidth:0,
        marginTop:hp('5%'),marginLeft:"10%",marginRight:"10%"
          }}
      on_touch={this.onPressed_Appointment}
        >
          <Text style={{fontSize:RFValue(16),fontWeight:"bold",color:"#fff"}}>Make A Appointment</Text>
      </RedButton>


    
              </View>
    
              </KeyboardAwareScrollView>
    
           </>
        );
   }
};

const styles = StyleSheet.create({


  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    marginBottom:"5%"
  },

  img: {
  backgroundColor:"white",
  justifyContent:"center",
  alignItems:"center",
  marginTop:20
    
  },

  button:{
    alignItems:"center",justifyContent:"center",
    height:40,width:120,borderTopLeftRadius:40,
    borderBottomLeftRadius:40,borderWidth:2,backgroundColor:"#ff3358"
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

export default Doctor;
