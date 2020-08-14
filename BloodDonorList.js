
import React, { Component } from 'react';
import {

  StatusBar,
  StyleSheet,
   Text, 
   View, 
   ScrollView, 
   TouchableOpacity,
   Image,
   NavigatorIOSProps,


} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SearchInput, { createFilter } from 'react-native-search-filter';
import {Navigation} from 'react-native-navigation';
import{ FloatingAction } from 'react-native-floating-action';
import {base_url} from './src/components/AllVariables';
const actions=[
  {
    text:"ADD",
    name: "ADD",
    position: 4
    
  },
];

const KEYS_TO_FILTERS = ['name', 'group'];

class BloodDonorList extends Component {

constructor(props){
  super(props);
  Navigation.events().bindComponent(this);
  this.state={
    name:"new",
    userName:"",
    password:"",
    text1:"",
    checked:false,
    search:"",
    donorsList:[],
   data:[
    {
      key: '1u',
      title: 'first person',
      Group:'A',
      
     
    },
    {
      key: '29',
      title: 'Second person',
      Group:'B',
    },
    {
      key: '32',
      title: 'Third person',
      Group:'A',
    },
    {
      key: '40',
      title: 'fourth person',
      Group:'B',
     
    },
    {
      key: '56',
      title: 'fifth person',
      Group:'AB',
    },
    {
      key: '60',
      title: 'sixth person',
      Group:'O+',
    },
    {
      key: '7f',
      title: 'seventh person',
      Group:'B',
     
    },
    {
      key: '82',
      title: 'eight person',
      Group:'AB-',
    },
    {
      key: '9d',
      title: 'ninth person',
      Group:'O-',
    },
    {
      key: '10i',
      title: 'tenth person',
      Group:'B',
    },
    {
      key: '11a',
      title: 'eleventh person',
      Group:'A',
    },
    {
      key: '12m',
      title: 'twelve person',
      Group:'B-',
    },
  ],
  hello:"",
  }
  
}

componentDidAppear(){
  

  


  fetch(base_url+'donor/donors', {
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
  
  console.log("response is=",responseJson.donors);
  this.setState({donorsList:responseJson.donors})
  }
  else
  {
  
  console.log('Error in find donors list',responseJson);
  }
  })
  .catch((error) => {
  console.log('error is',error);
  console.error(error);
  });






}



  



onpressed_submitform=(name)=>{

  // console.warn('selected item is =', name);

if(name="ADD"){
  // console.warn('in if ');

   Navigation.push(this.props.componentId, {
     component: {
       name: 'BloodDonorSubmitForm',
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


}

on_pressed_back=()=>{

  Navigation.pop(this.props.componentId);
  
}

on_pressed_list=(item)=>{
  Navigation.push(this.props.componentId, {
    component: {
      name: 'Donor',
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

searchUpdated = (value) => {

  this.setState({ search : value });

};

  render() {
  
    const filteredEmails = this.state.donorsList.filter(createFilter(this.state.search, KEYS_TO_FILTERS))
   
    return (
      <>
       <StatusBar barStyle="light-content" backgroundColor="#ff3358" />

         <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity  onPress={()=>this.on_pressed_back()}>
          <Image style={{height:25,width:35,borderRadius:40,marginLeft:15}} source={require('./src/assets/arrow-89-512.png')} ></Image>
          </TouchableOpacity>
          <Text style={{marginLeft:60,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>Blood Donor List</Text>
        </View>

        
         <View style={{alignItems:"center",marginTop:20}} >
         <View style={styles.searchview}>
         <SearchInput 
          onChangeText={(value) => { this.searchUpdated(value) }} 
          style={{width:250,height:85,fontSize:hp('3%')}}
          placeholder="quick search"
          />
         </View>
         </View>
         <ScrollView>
          {filteredEmails.map((data) => {
            return (
            <View>
            <TouchableOpacity onPress={() => this.on_pressed_list(data)}>
               
               <View style={{flexDirection:"row",borderBottomWidth: 3, borderBottomColor: "#5199e5", height: 70, margin: 10}}>
                 <Image style={{ marginLeft:20,height:40,width:40,borderRadius:40}}source={require('./src/assets/us.png')}></Image>
                  <View>
                  <Text style={{  marginLeft:20 ,fontSize:hp('3%')}}>{data.name}</Text>
                  <Text style={{ marginLeft:20,marginTop:5 ,fontSize:hp('3%')}}>{data.group}</Text>
                  </View>
               </View>
            </TouchableOpacity>

            </View>);
          })}
        </ScrollView>
         <FloatingAction
         color="#5199e5"
          buttonSize={50}
          actions={actions}
          onPressItem={(name)=>{this.onpressed_submitform(name)}}
        
          />     

      </View>
      </>
    );
  }
};

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
  search:{

  
    
  },
  searchview:{
    justifyContent:"center",
    alignItems:"center",
    borderWidth:3,
    borderRadius:50,
    borderColor:"#5199e5",
    marginBottom:20,
    marginTop:10,
    width:280,
    height:65,

    
  },
  header:{
    
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#ff3358",
    height:60
    
  }

});

export default BloodDonorList;
