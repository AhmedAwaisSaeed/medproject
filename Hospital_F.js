
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


class FindStore_1 extends Component {


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
    
    onPressed_Appointment=()=>{
      Navigation.push(this.props.componentId, {
        component: {
          name: 'AppointMent',
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
              <StatusBar barStyle="light-content" backgroundColor="#ff3358" />
              
             <View style={styles.mainContainer}>
            
             <View style={styles.header}>
             <TouchableOpacity onPress={()=>this.on_pressed_back()} >
             <Image style={{height:25,width:35,marginLeft:15}} source={require('./src/assets/arrow-89-512.png')} ></Image>
             </TouchableOpacity>
             <Text style={{marginLeft:90,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>Hospital</Text>
             </View>

             <View>  
           
             <View style={{backgroundColor:"#5199e5",height:180}}>
             <View style={{flexDirection:"row"}}>
            
             <Image style={{height:20,width:20,borderRadius:20,marginLeft:10,marginTop:20,tintColor:"white"}} source={require('./src/assets/placeholder.png')}></Image>
            
             <Text style={{width:300,marginLeft:10,marginTop:20,color:"white",fontWeight:"bold",fontSize:hp('3%')}}>Location :10, Fateh Sher Colony, Sahiwal, Sahiwal District, Punjab, Pakistan</Text>
            
             </View>
             <View style={{flexDirection:"row",marginTop:5}}>
            
             <Image style={{height:20,width:20,borderRadius:20,marginLeft:10,tintColor:"white"}} source={require('./src/assets/phone.png')}></Image>
            
             <Text style={{width:350,marginLeft:10,color:"white",fontWeight:"bold",fontSize:hp('3%')}}>Phone No : +92 40 4225278</Text>
            
             </View>
             <View style={{flexDirection:"row",marginTop:5}}>
           
             <Image style={{height:22,width:22,marginTop:10,marginLeft:10,tintColor:"white"}} source={require('./src/assets/road.png')}></Image>
            
             <Text  style={{marginLeft:10,marginTop:10,color:"white",fontWeight:"bold",fontSize:hp('3%')}} >Distance : 8.5 Km </Text>
            
             <Image style={{height:22,width:22,marginTop:10,marginLeft:5,tintColor:"white"}} source={require('./src/assets/clock.png')}></Image>

             <Text  style={{marginLeft:10,marginTop:10,color:"white",fontWeight:"bold",fontSize:hp('3%')}}>Time : 47 Min</Text>
             </View>
             </View>
             <Image style={{height:650,width:410}} source={require('./src/assets/download.jpg')}></Image>
           
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
    
  }

});

export default FindStore_1;
