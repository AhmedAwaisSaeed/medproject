
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
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-community/async-storage';
import {goHome} from './Navigation';

class ControlPanal extends Component {

constructor(props){
  super(props);
  this.state={
    name:"new",
    userName:"",
    password:"",
    text1:"",
    user:""
  }
}
onpressed_Aboutus=()=>{
    this.props.move("AboutUs");
}
onpressed_Home=()=>{
  this.props.move("Catagoires");
}
onpressed_Contactus=()=>{
  this.props.move("Contact_Us");
}

async componentDidMount(){
  let user=await this.getData();
  this.setState({
    user:user
  })

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



  render() {

    return (
      <>
          <View style={styles.mainContainer}>

          <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"#5199e5",height:200}}>
          <TouchableOpacity>
              <Image style={{height:100,width:100,borderRadius:100,borderColor:"white",borderWidth:1,tintColor:"white"}} source={require('./src/assets/us.png')}></Image>              
          </TouchableOpacity>

    <Text style={{marginTop:15,fontStyle:"italic",fontSize:15,color:"white",fontSize:hp('2%')}}>{this.state.user.email}</Text>
          </View>


          <TouchableOpacity
          onPress={()=>this.onpressed_Home()}
          style={{marginLeft:"5%",height:hp('8%'),flexDirection:"row",marginTop:hp('4%'),
          // backgroundColor:"blue",
          justifyContent:"space-between"}} >
          
          <View style={{height:"100%",width:50,alignItems:"center",justifyContent:"center"}}>
            <Image  style={{tintColor:"#5199e5",height:"60%",width:"100%",resizeMode:"contain"}} 
            source={require("./src/assets/icon.png")} ></Image>
          </View>
          <View style={{flex:1,
            // backgroundColor:"pink",
            justifyContent:"center",paddingLeft:"5%"}}>
              <Text style={{fontSize:RFValue(18),color:"#fff"}}>
            Home</Text>
            </View>



          </TouchableOpacity>

          {/* <View style={{flexDirection:"row",marginTop:10}}>
          <TouchableOpacity onPress={()=>this.onpressed_Home()}>
          <View style={{flexDirection:"row",alignItems:"center"}} >
          <Image  style={{height:40,width:40,marginLeft:15,tintColor:"#5199e5"}} source={require("./src/assets/icon.png")} ></Image>
          <Text style={{marginTop:15,marginLeft:15,fontSize:RFValue(18),color:"#fff"}}>
          
          
          Home</Text>
          </View>
          </TouchableOpacity>
          </View>


          
          */}

          
          {/* <View style={{flexDirection:"row",marginTop:10}}>
          <TouchableOpacity onPress={()=>this.onpressed_Aboutus()}>
          <View style={{flexDirection:"row",alignItems:"center"}} >
          <Image  style={{height:40,width:40,marginLeft:15,tintColor:"#5199e5"}} source={require("./src/assets/lifebuoy.png")} ></Image>
          <Text style={{marginTop:15,marginLeft:15,fontSize:RFValue(18),color:"#fff"}}>
            Help</Text>
          </View>
          </TouchableOpacity>
          </View> */}

        
          {/* <View style={{flexDirection:"row",marginTop:10}}>
          <TouchableOpacity onPress={()=>this.onpressed_Aboutus()}>
          <View style={{flexDirection:"row",alignItems:"center"}} >
          <Image  style={{height:40,width:40,marginLeft:15,tintColor:"#5199e5"}} source={require("./src/assets/settings.png")} ></Image>
          <Text style={{marginTop:15,marginLeft:15,fontSize:RFValue(18),color:"#fff"}}>
              Settings</Text>
          </View>
          </TouchableOpacity>
          </View> */}

<TouchableOpacity
onPress={()=>this.onpressed_Aboutus()}
style={{marginLeft:"5%",height:hp('8%'),flexDirection:"row",
          // backgroundColor:"blue",
          justifyContent:"space-between"}} >
          
          <View style={{height:"100%",width:50,alignItems:"center",justifyContent:"center"}}>
            <Image  style={{tintColor:"#5199e5",height:"60%",width:"100%",resizeMode:"contain"}} 
            source={require("./src/assets/settings.png")} ></Image>
          </View>
          <View style={{flex:1,
            // backgroundColor:"pink",
            justifyContent:"center",paddingLeft:"5%"}}>
          <Text style={{fontSize:RFValue(18),color:"#fff"}}>
            Settings</Text>
            </View>



          </TouchableOpacity>
           

          {/* <View style={{flexDirection:"row",marginTop:10}}> */}
          {/* <TouchableOpacity onPress={()=>this.onpressed_Aboutus()}> */}
          <TouchableOpacity
          onPress={()=>this.onpressed_Aboutus()}
          
          style={{marginLeft:"5%",height:hp('8%'),flexDirection:"row",
          // backgroundColor:"blue",
          justifyContent:"space-between"}} >
          
          <View style={{height:"100%",width:50,alignItems:"center",justifyContent:"center"}}>
            <Image  style={{tintColor:"#5199e5",height:"60%",width:"100%",resizeMode:"contain"}} 
            source={require("./src/assets/question.png")} ></Image>
          </View>
          <View style={{flex:1,
            // backgroundColor:"pink",
            justifyContent:"center",paddingLeft:"5%"}}>
          <Text style={{fontSize:RFValue(18),color:"#fff"}}>
            About Us</Text>
            </View>



          </TouchableOpacity>
          {/* </TouchableOpacity> */}
          {/* </View> */}
        
          {/* <View style={{flexDirection:"row",marginTop:10}}>
          <TouchableOpacity onPress={()=>this.onpressed_Contactus()}>
          <View style={{flexDirection:"row",alignItems:"center"}} >
          <Image  style={{height:40,width:40,marginLeft:15,tintColor:"#5199e5"}} source={require("./src/assets/telephone.png")} ></Image>
          <Text style={{marginTop:15,marginLeft:15,fontSize:RFValue(18),color:"#fff"}}>
            Contact Us</Text>
          </View>
          </TouchableOpacity>
          </View> */}

<TouchableOpacity
onPress={()=>this.onpressed_Contactus()}
style={{marginLeft:"5%",height:hp('8%'),flexDirection:"row",
          // backgroundColor:"blue",
          justifyContent:"space-between"}} >
          
          <View style={{height:"100%",width:50,alignItems:"center",justifyContent:"center"}}>
            <Image  style={{tintColor:"#5199e5",height:"60%",width:"100%",resizeMode:"contain"}} 
            source={require("./src/assets/telephone.png")} ></Image>
          </View>
          <View style={{flex:1,
            // backgroundColor:"pink",
            justifyContent:"center",paddingLeft:"5%"}}>
          <Text style={{fontSize:RFValue(18),color:"#fff"}}>
            Contact Us</Text>
            </View>



          </TouchableOpacity>




          <TouchableOpacity
onPress={()=>goHome()}
style={{marginLeft:"5%",height:hp('8%'),flexDirection:"row",
          // backgroundColor:"blue",
          justifyContent:"space-between"}} >
          
          <View style={{height:"100%",width:50,alignItems:"center",justifyContent:"center"}}>
            <Image  style={{tintColor:"#5199e5",height:"60%",width:"100%",resizeMode:"contain"}} 
            source={require("./src/assets/lifebuoy.png")} ></Image>
          </View>
          <View style={{flex:1,
            // backgroundColor:"pink",
            justifyContent:"center",paddingLeft:"5%"}}>
          <Text style={{fontSize:RFValue(18),color:"#fff"}}>
            Logout</Text>
            </View>



          </TouchableOpacity>


        </View>
        

      </>
    );
  }
};

const styles = StyleSheet.create({


  mainContainer: {
    flex: 1,
    backgroundColor: "#FF3358",
   
  },

 

});

export default ControlPanal;
