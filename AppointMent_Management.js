
import React, { Component } from 'react';
import {
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  ScrollView,



} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import{Navigation} from 'react-native-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {base_url} from './src/components/AllVariables';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';

const name=1;
const placeholder_1={
  label:'Select Your Disease type',
  value:'0'
}
const placeholder_2={
  label:'select tour catagoires'
}


const Data =[
  {
    key: '1u',
    title: 'Appiontment 1',
   
  },
  {
    key: '29',
    title: 'Appiontment 2',
    
  },
  {
    key: '32',
    title: 'Appiontment 3',
    
  },
  {
    key: '40',
    title: 'Appiontment 4',
    
  },
  {
    key: '56a',
    title: 'Appiontment 5',
    
  },
  {
    key: '6sa',
    title: 'Appiontment 6',
    
  },
  {
    key: '60fc',
    title: 'Appiontment 7',

  },
 
];


class AppointMent_Management extends Component {

constructor(props){
  super(props);
  Navigation.events().bindComponent(this);
  this.state={
    name:"new",
    userName:"",
    password:"",
    text1:"",
    appointments:[]

 
  }
}

getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('user')
    console.log("json value",JSON.parse(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

async componentDidAppear(){

   let user=await this.getData();


   fetch(base_url+'appointment/appointments/'+user._id, {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // 'x-sh-auth': await this._getToken('token')
    }
    }).then((response) => response.json())
    .then((responseJson) => {
    if(responseJson.status==200)
    {
    
    console.log("response in appointments=",responseJson.appointments);
    this.setState({appointments:responseJson.appointments});

    console.log("appointment =",this.state.appointments);
    }
    else
    {
    
    console.log('Error in find appointments list',responseJson);
    }
    })
    .catch((error) => {
    console.log('error is',error);
    console.error(error);
    });
  






}
on_pressed_back=()=>{

    Navigation.pop(this.props.componentId);
    
  }
  on_pressed_list=()=>{
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
  on_pressed_Edit=(item)=>{

console.log("in edit=",item);
    Navigation.push(this.props.componentId, {
      component: {
        name: 'EditAppointment',
        passProps: {
          response: item
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

  on_pressed_Delete=(item)=>{

    let appointmentId=item._id;

    console.log("appointmentID=",appointmentId);

    
    fetch(base_url+'appointment/appointments/'+appointmentId, {
      method: 'delete',
      headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'x-sh-auth': await this._getToken('token')
      }
      }).then((response) => response.json())
      .then((responseJson) => {
      if(responseJson.status==200)
      {
      
      alert("Deleted successfully");
      this.reloadData();
      
  
      
      }
      else
      {
      
      console.log('Error in find appointments list',responseJson);
      }
      })
      .catch((error) => {
      console.log('error is',error);
      console.error(error);
      });
    
  
  

   
    
}

reloadData = async()=>{


  let user=await this.getData();


  fetch(base_url+'appointment/appointments/'+user._id, {
   method: 'GET',
   headers: {
   Accept: 'application/json',
   'Content-Type': 'application/json',
   // 'x-sh-auth': await this._getToken('token')
   }
   }).then((response) => response.json())
   .then((responseJson) => {
   if(responseJson.status==200)
   {
   
   console.log("response in appointments=",responseJson.appointments);
   this.setState({appointments:responseJson.appointments});

   console.log("appointment =",this.state.appointments);
   }
   else
   {
   
   console.log('Error in find appointments list',responseJson);
   }
   })
   .catch((error) => {
   console.log('error is',error);
   console.error(error);
   });
 


}


  render() {

    return (
      <>
    
        <StatusBar barStyle="light-content" backgroundColor="#ff3358" />
        <View style={styles.mainContainer}>

          <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.on_pressed_back()} >
          <Image style={{height:25,width:35,borderRadius:40,marginLeft:15}} source={require('./src/assets/arrow-89-512.png')} ></Image>
          </TouchableOpacity>
          <Text style={{marginLeft:7,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>Appointment Management</Text>
          </View>

          
            <FlatList
             data={this.state.appointments}
             renderItem={({ item }) => (
                            
              <View style={{marginTop:20,flexDirection:"row",borderBottomWidth: 3, borderBottomColor: "#5199e5", height: 70, margin: 10}}>
              <TouchableOpacity style={{flex:1,justifyContent:"center"}} onPress={()=>{this.on_pressed_list()}}>
              <Text style={{fontSize:hp('3%')}}>{item.doctor.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:0.2,justifyContent:"center",alignItems:"center"}} onPress={()=>{this.on_pressed_Edit(item)}}>
              <Image style={{height:20,width:20,tintColor:"#5199e5"}} source={require('./src/assets/edit.png')}></Image>
              </TouchableOpacity>
              <TouchableOpacity style={{flex:0.2,justifyContent:"center",alignItems:"center"}} onPress={()=>{this.on_pressed_Delete(item)}}>
             <Image style={{height:20,width:20,tintColor:"#5199e5"}} source={require('./src/assets/delete.png')}></Image>
             </TouchableOpacity>
              </View>

             
             )}
             />
          

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

  logo: {
  backgroundColor:"white",
  justifyContent:"center",
  alignItems:"center"
    
  },
  header:{
    
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#ff3358",
    height:60
    
  }

});

export default AppointMent_Management;
