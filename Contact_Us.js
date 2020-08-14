
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



} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import{Navigation} from 'react-native-navigation';
const name=1;
const placeholder={
  label:'Select Your Disease type',
  value:'0'
}
let string={
  lable:'thx',
  value:'0'
}


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
class contact_Us extends Component {

constructor(props){
  super(props);
  this.state={
    name:"new",
    userName:"",
    password:"",
    text1:""
  }
}

on_pressed_back=()=>{

  Navigation.pop(this.props.componentId);
  
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
          <Text style={{marginLeft:60,fontStyle:"italic",fontSize:25,fontWeight: 'bold',color:"white"}}>Contact Us</Text>
          </View>
          <View style={{justifyContent:"center",alignItems:"center",marginTop:100}}>
          <Text style={{fontStyle:"italic",fontSize:25,fontWeight: 'bold',color:"white",marginTop:20}}>Name : M Talha Tariq</Text>
          <Text style={{fontStyle:"italic",fontSize:25,fontWeight: 'bold',color:"white",marginTop:10}}>Phone : 03207896043</Text>
          <Text style={{fontStyle:"italic",fontSize:25,fontWeight: 'bold',color:"white",marginTop:30}}>Name : kiran                </Text>
          <Text style={{fontStyle:"italic",fontSize:25,fontWeight: 'bold',color:"white",marginTop:10}}>Phone : 03229876078</Text> 
          <Text style={{fontStyle:"italic",fontSize:25,fontWeight: 'bold',color:"white",marginTop:30}}>Name : Mehtab           </Text>
          <Text style={{fontStyle:"italic",fontSize:25,fontWeight: 'bold',color:"white",marginTop:10}}>Phone : 03219653297</Text>
        
          </View>
        
    
        </View>
        

      </>
    );
  }
};

const styles = StyleSheet.create({


  mainContainer: {
    flex: 1,
    backgroundColor: '#5199e5',
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

export default contact_Us;
