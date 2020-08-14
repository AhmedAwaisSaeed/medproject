
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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import {Navigation} from 'react-native-navigation';
import {base_url} from './src/components/AllVariables';
const name=1;
const placeholder={
  label:'Blood group',
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
class BloodDonorSubmitForm extends Component {

constructor(props){
  super(props);
  
  this.state={
    name:"",
    phoneNumber:"",
    selectedGroup:""
  }
}
on_pressed_back=()=>{

  Navigation.pop(this.props.componentId);
  
}


onpressed = () =>{

const allParams = {
name:this.state.name,
phoneNumber:this.state.phoneNumber,
group:this.state.selectedGroup


}

console.log("all params=",allParams);


fetch(base_url+'donor/adddonor', {
  method: 'POST',
  headers: {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  // 'x-sh-auth': await this._getToken('token')
  },
  body: JSON.stringify({...allParams}),
  }).then((response) => response.json())
  .then((responseJson) => {
  if(responseJson.status==200)
  {
  

  
  alert('Donor Added Successfully');

  
  


  }
  else
  {
    alert("Please Enter Correct Email and Passowrd");
  console.log('Error in submit form donor',responseJson);
  }
  })
  .catch((error) => {
  console.log('error is',error);
  console.error(error);
  });
 


}

on_change_username= (value) => { 

  this.setState({
    name:value
  })

}


on_change_phoneNumber= (value) => { 

  this.setState({
    phoneNumber:value
  })


}


  render() {

    


    return (
      <>
      <KeyboardAwareScrollView>
        <StatusBar barStyle="light-content" backgroundColor="#ff3358" />
        <View style={styles.mainContainer}>
     
        <View style={styles.header}>
          <TouchableOpacity  onPress={()=>this.on_pressed_back()}>
          <Image style={{height:25,width:35,resizeMode:"contain" ,borderRadius:40,marginLeft:15}} source={require('./src/assets/arrow-89-512.png')} ></Image>
          </TouchableOpacity>
          <Text style={{marginLeft:60,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>SUBMIT FORM</Text>
        </View>

     <View style={styles.logo}>

     <Image style={{height:140,width:140,marginTop:50,marginVertical:40,resizeMode:"contain"}} source={require('./src/assets/logo.jpg')}></Image>
     
     </View>
     <View style={{backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%"}}>

            <TextInput
            style={{fontSize:hp('3%')}}
            placeholder="Name"
            placeholderTextColor="black"
            value={this.state.name}
            onChangeText={this.on_change_username}
            />
    </View>

    <View style={{marginTop:10,backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%",}}>
            <TextInput
            style={{fontSize:hp('3%')}}
            placeholder="Phone-number"
            placeholderTextColor="black"
            value={this.state.phoneNumber}
            onChangeText={this.on_change_phoneNumber}
            
          
    />

    </View>
    
    <View style={{marginTop:10,backgroundColor:"white",alignItems:"center",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%",}}>
           
    <RNPickerSelect
            onValueChange={(value) => this.setState({selectedGroup:value})}
            placeholder={placeholder}
          
            items={[
               
                { label: 'A', value: 'A',color:'#ff3358' },
                { label: 'B', value: 'B',color:'#ff3358' },
                { label: 'B-', value: 'B-',color:'#ff3358' },
                { label: 'O', value: 'O',color:'#ff3358' },
                { label: 'O-', value: 'O-',color:'#ff3358' },
                { label: 'AB', value: 'AB',color:'#ff3358' },
                { label: 'AB-', value: 'AB-',color:'#ff3358' },

            ]}
        />
    </View>
 

 

    <View style={{alignItems:"center",marginTop:50,marginBottom:100}}>
                
              <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#5199e5",height:50,width:250,borderRadius:40}} onPress = {()=>{this.onpressed()}} >
              <Text style={{color:"white",fontSize:hp('3%')}}> Submit </Text>
              </TouchableOpacity>
            

          </View>
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

export default BloodDonorSubmitForm;
