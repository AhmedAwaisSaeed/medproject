
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
    title: 'Hospital 1',
   
  },
  {
    key: '29',
    title: 'Hospital 2',
    
  },
  {
    key: '32',
    title: 'Hospital 3',
    
  },
  {
    key: '40',
    title: 'Hospital 4',
    
  },
  {
    key: '56a',
    title: 'Hospital 5',
    
  },
  {
    key: '6sa',
    title: 'Hospital 6',
    
  },
  {
    key: '60fc',
    title: 'Hospital 7',

  },
 
];


class Hospital extends Component {

constructor(props){
  super(props);
  this.state={
    name:"new",
    userName:"",
    password:"",
    text1:"",

 
  }
}
on_pressed_back=()=>{

    Navigation.pop(this.props.componentId);
    
  }
  on_pressed_list=()=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Hospital_F',
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
  



  render() {

    return (
      <>
    
        <StatusBar barStyle="light-content" backgroundColor="#ff3358" />
        <View style={styles.mainContainer}>

          <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.on_pressed_back()} >
          <Image style={{height:25,width:35,borderRadius:40,marginLeft:15}} source={require('./src/assets/arrow-89-512.png')} ></Image>
          </TouchableOpacity>
          <Text style={{marginLeft:90,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>Hospital</Text>
          </View>

          
            <FlatList
             data={Data}
             renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>{this.on_pressed_list()}}>
              <View style={{marginTop:20,flexDirection:"row",borderBottomWidth: 3, borderBottomColor: "#5199e5", height: 70, margin: 10}}>
            
              <Text style={{ marginTop:20, marginLeft:20 ,fontSize:hp('3%')}}>{item.title}</Text>
              
              </View>
              </TouchableOpacity>
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

export default Hospital;
