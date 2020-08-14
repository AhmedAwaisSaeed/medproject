
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
    title: 'Store 1',
   
  },
  {
    key: '29',
    title: 'Store 2',
    
  },
  {
    key: '32',
    title: 'Store 3',
    
  },
  {
    key: '40',
    title: 'Store 4',
    
  },
  {
    key: '56a',
    title: 'Store 5',
    
  },
  {
    key: '6sa',
    title: 'Store 6',
    
  },
  {
    key: '60fc',
    title: 'Store 7',

  },
 
];


class FindStore extends Component {

constructor(props){
  super(props);
  this.state={
    name:"new",
    userName:"",
    password:"",
    text1:"",
    pharmacies:[]

 
  }
}
on_pressed_back=()=>{

    Navigation.pop(this.props.componentId);
    
  }
  on_pressed_list=(item)=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'FindStore_1',
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
  

  componentDidMount()
  {
    
  
  
    fetch(base_url+'pharmacy/pharmacies', {
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
    
    console.log("response is=",responseJson.pharmacies);
    this.setState({pharmacies:responseJson.pharmacies})
    }
    else
    {
    
    console.log('Error in find pharmacies list',responseJson);
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
          <Text style={{marginLeft:70,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>Find Pharmacy</Text>
          </View>

          
            <FlatList
             data={this.state.pharmacies}
             renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>{this.on_pressed_list(item)}}>
              <View style={{marginTop:20,flexDirection:"row",borderBottomWidth: 3, borderBottomColor: "#5199e5", height:verticalScale(80)}}>
            
              <Text style={{ marginTop:20, marginLeft:20,fontSize:hp('3%'), 
              // backgroundColor:"orange"
              }}>{item.name}</Text>
              
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

export default FindStore;
