
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
    title: 'Blood Bank 1',
   
  },
  {
    key: '29',
    title: 'Blood ank 2',
    
  },
  {
    key: '32',
    title: 'Blood Bank 3',
    
  },
  {
    key: '40',
    title: 'Blood Bank 4',
    
  },
  {
    key: '56a',
    title: 'Blood Bank 5',
    
  },
  {
    key: '6sa',
    title: 'Blood Bank 6',
    
  },
  {
    key: '60fc',
    title: 'Blood Bank 7',

  },
 
];


class Blood_Bank extends Component {

constructor(props){
  super(props);
  this.state={
    name:"new",
    userName:"",
    password:"",
    text1:"",
    banks:[]

 
  }
}
on_pressed_back=()=>{

    Navigation.pop(this.props.componentId);
    
  }
  on_pressed_list=(item)=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Blood_Bank_B',
        passProps: {
          response:item
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
    
  
  
    fetch(base_url+'bank/banks', {
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
    
    console.log("response is=",responseJson.banks);
    this.setState({banks:responseJson.banks})
    }
    else
    {
    
    console.log('Error in find banks list',responseJson);
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
          <Text style={{marginLeft:88,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>Blood Bank</Text>
          </View>

          
            <FlatList
             data={this.state.banks}
             renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>{this.on_pressed_list(item)}}>
              <View style={{marginTop:20,flexDirection:"row",borderBottomWidth: 3, borderBottomColor: "#5199e5", height: 70, margin: 10}}>
            
              <Text style={{ marginTop:20, marginLeft:20 ,fontSize:hp('3%')}}>{item.name}</Text>
              
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

export default Blood_Bank;
