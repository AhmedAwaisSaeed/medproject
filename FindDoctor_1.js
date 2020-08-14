
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
import {base_url} from './src/components/AllVariables';

import{Navigation} from 'react-native-navigation';
const name=1;
const placeholder_1={
  label:'Select Your Disease type',
  value:'0'
}
const placeholder_2={
  label:'select tour catagoires'
}


// const Data =[
//   {
//     key: '1u',
//     title: 'Dr 1',
//     Group: 'A',
//   },
//   {
//     key: '29',
//     title: 'Dr 2',
//     Group: 'B',
//   },
//   {
//     key: '32',
//     title: 'Dr 3',
//     Group: 'A',
//   },
//   {
//     key: '40',
//     title: 'Dr 4',
//     Group: 'B',
//   },
//   {
//     key: '56a.',
//     title: 'Dr 5',
//     Group: 'AB',
//   },
//   {
//     key: '6sa.0',
//     title: 'Dr 6',
//     Group: 'O+',
//   },
//   {
//     key: '60fc',
//     title: 'Dr 7',
//     Group: 'O+',
//   },
//   {
//     key: '6wd0',
//     title: 'Dr 8',
//     Group: 'O+',
//   },
//   {
//     key: '6re',
//     title: 'Dr 9',
//     Group: 'O+',
//   },
//   {
//     key: '60',
//     title: 'Dr 6',
//     Group: 'O+',
//   },
// ];


class FindDoctor extends Component {

constructor(props){
  super(props);
  this.state={
    name:"new",
    userName:"",
    password:"",
    text1:"",
    data:[]

 
  }
}
componentDidMount()
{
  console.log("selected prop",this.props.response);


  fetch(base_url+'doctor/catagories/'+this.props.response, {
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
  
  console.log("response is=",responseJson.doctorIs);
  this.setState({data:responseJson.doctorIs})
  }
  else
  {
  
  console.log('Error in find doctor 1',responseJson);
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
  on_pressed_list=(item)=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Doctor',
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
  



  render() {

    return (
      <>
    
        <StatusBar barStyle="light-content" backgroundColor="#ff3358" />
        <View style={styles.mainContainer}>

          <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.on_pressed_back()} >
          <Image style={{height:25,width:35,borderRadius:40,marginLeft:15}} source={require('./src/assets/arrow-89-512.png')} ></Image>
          </TouchableOpacity>
          <Text style={{marginLeft:70,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>FINF DOCTOR</Text>
          </View>

          
            <FlatList
             data={this.state.data}
             renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>{this.on_pressed_list(item)}}>
              <View style={{marginTop:20,flexDirection:"row",borderBottomWidth: 3, borderBottomColor: "#5199e5", height: 70, margin: 10}}>
            
              <Text style={{ marginTop:20, marginLeft:20,fontSize:hp('3%') }}>{item.name}</Text>
              
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

export default FindDoctor;
