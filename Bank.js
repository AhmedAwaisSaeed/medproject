
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
import {Navigation} from 'react-native-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

class Bank extends Component {


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
  on_pressed_back=()=>{

    Navigation.pop(this.props.componentId);
    
  }

  onpressed_blooddonor=()=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'BloodDonorList',
        passProps: {
          text: 'Pushed screen'
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
  onpressed_BloodBank=()=>{
    
      Navigation.push(this.props.componentId, {
        component: {
          name: 'Blood_Bank',
          passProps: {
            text: 'Pushed screen'
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
      
           <View style={styles.mainContainer}>
           <StatusBar barStyle="light-content" backgroundColor="#ff3358" />
           <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.on_pressed_back()} >
          <Image style={{height:25,width:35,borderRadius:40,marginLeft:15}} source={require('./src/assets/arrow-89-512.png')} ></Image>
          </TouchableOpacity>
          <Text style={{marginLeft:80,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>BLOOD BANK</Text>
          </View>

<View style={{flexDirection:"row",justifyContent:"space-around"}}>

<View style={{padding:wp('5%')}}>
<TouchableOpacity
onPress={()=>{this.onpressed_blooddonor()}}
 style={{width:100,height:100,borderRadius:100,backgroundColor:"#FF3358",justifyContent:"center",alignItems:"center"}}>
<Image style={{height:"60%",width:"60%",borderRadius:100,tintColor:"white",resizeMode:"contain"}} source={require('./src/assets/fd.png')}></Image> 

</TouchableOpacity>

  <View style={{width:100,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:RFValue(15)}} >Find Donor</Text></View>

</View>

<View style={{padding:wp('5%')}}>
<TouchableOpacity
onPress={()=>{this.onpressed_BloodBank()}}
 style={{width:100,height:100,borderRadius:100,backgroundColor:"#FF3358",justifyContent:"center",alignItems:"center"}}>
<Image style={{height:"60%",width:"60%",borderRadius:100,tintColor:"white",resizeMode:"contain"}} source={require('./src/assets/bb.png')}></Image> 

</TouchableOpacity>

  <View style={{width:100,justifyContent:"center",alignItems:"center"}}><Text style={{fontSize:RFValue(15)}} >Blood Bank</Text></View>

</View>
</View>
            
           
           {/* <View style={{backgroundColor:"white",flexDirection:"row",marginLeft:60,marginTop:20}}>
           <View style={{marginLeft:20}}>
           <TouchableOpacity \
           onPress={()=>{this.onpressed_blooddonor()}}>
           <View style={{height:113,width:113,borderRadius:113,backgroundColor:"#ff3358",alignItems:"center",justifyContent:"center",marginTop:19,marginLeft:12}} >
           <Image style={{height:70,width:70,tintColor:"white"}} source={require("./src/assets/fd.png")}></Image>
           </View>
           <Text style={{marginTop:11,marginLeft:10,fontSize:hp('2.5%')}} >Find donor</Text>
           </TouchableOpacity>
           </View>
           <View style={{marginLeft:20}}>
           <TouchableOpacity 
           onPress={()=>{this.onpressed_BloodBank()}}>
           <View style={{height:113,width:113,borderRadius:113,backgroundColor:"#ff3358",alignItems:"center",justifyContent:"center",marginTop:19,marginLeft:12}} >
           <Image style={{height:70,width:70,tintColor:"white"}} source={require("./src/assets/bb.png")}></Image>
           </View>
           <Text style={{marginTop:11,marginLeft:14,fontSize:hp('2.5%')}} >Blood Bank</Text>
           </TouchableOpacity>
           </View>
           </View> */}

           </View>
        
        </>
    );
  }
};
const styles = StyleSheet.create({


  mainContainer: {
   flex: 1,
   justifyContent:"flex-start", 
   backgroundColor: "white",
   
  },
  header:{
    
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#ff3358",
    height:60
    
  }
  

});

export default Bank;
