
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RNPickerSelect from 'react-native-picker-select';
import Picker from 'react-native-picker-select';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {base_url} from './src/components/AllVariables';

const name=1;
const placeholder={
  label:'Blood groub',
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
class blooddonorsubmitform extends Component {

constructor(props){
  super(props);
  this.state={
    name:"new",
    userName:"",
    password:"",
    text1:""
  }
}


onpressed = () =>{



  // this.setState({
  //   name:"account"
  // })

  // console.log("length is=",this.state.name.length);


  

}

on_change_username= (value) => { 

  this.setState({
    userName:value
  })

}


on_change_password= (value) => { 

  this.setState({
    password:value
  })


}
render() {

    console.log("placeholder=",placeholder.label);
    console.log("string=",string.lable);
    return (
      <>
      
        {/* <StatusBar barStyle="light-content" backgroundColor="#ff3358" /> */}
      <KeyboardAwareScrollView style={{flex:1,backgroundColor:"red"}}>
      <View style={styles.mainContainer}>
      
     <View style={styles.logo}>

     <Image style={{height:"100%",width:"100%",marginTop:50,marginVertical:40,
     
    
    }} source={require('./src/assets/logo.jpg')}></Image>
     
     </View>
     <View style={{backgroundColor:"white",alignItems:"center",borderBottomWidth:3,borderBottomColor:"#ff3358",width:"70%",marginHorizontal:"15%"}}>

            <TextInput
            placeholder="Name"
            placeholderTextColor="black"
            />
    </View>

    <View style={{marginTop:10,backgroundColor:"white",alignItems:"center",borderBottomWidth:3,borderBottomColor:"#ff3358",width:"70%",marginHorizontal:"15%",}}>
            <TextInput
            placeholder="Phone-number"
            placeholderTextColor="black"
            
          
    />

    </View>
    
    <View style={{marginTop:10,backgroundColor:"white",alignItems:"center",borderBottomWidth:3,borderBottomColor:"#ff3358",width:"70%",marginHorizontal:"15%",}}>
           
    <RNPickerSelect
            onValueChange={(value) => console.log(value)}
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
 

    <View style={{alignItems:"center",marginTop:60,marginBottom:100}}>
                
              <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#ff3358",height:70,width:300,borderRadius:40}} onPress = {()=>{this.onpressed()}} >
              <Text style={{color:"white"}}> Submit </Text>
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
    backgroundColor: "green",
  },

  logo: {
  backgroundColor:"white",
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"green",
  height:hp('20%')
    
  },

});

export default blooddonorsubmitform;
