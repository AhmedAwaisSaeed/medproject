
import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Text,
  StatusBar,
  Alert
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Navigation} from 'react-native-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import RedButton from './src/components/Buttons/RedButton';
import {base_url} from './src/components/AllVariables';
import AsyncStorage from '@react-native-community/async-storage';
class Signin extends Component {


  constructor(props){
    super(props);
      this.state={
        name:"new",
        userName:"",
        password:"",
        text1:""
      }
    
  }


  setPassword = (value)=>{

    this.setState({
      password:value
    })

  }

  
  setEmail = (value)=>{

    this.setState({
      userName:value
    })

  }

  storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('user',jsonValue)
    } catch (e) {
      // saving error
    }
  }
  
  onpressed_movetoscreen3=()=>{



    const allParams = {
    
    email:this.state.userName,
    password:this.state.password,
    }

    console.log("all params in signin=",allParams);



    fetch(base_url+'user/login', {
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
    

    
    alert('Sign In Successfully');
  
    this.storeData(responseJson.user);
    this.gotoOtherScreen("Catagoires");


    }
    else
    {
      alert("Please Enter Correct Email and Passowrd");
    console.log('Error in sign in',responseJson);
    }
    })
    .catch((error) => {
    console.log('error is',error);
    console.error(error);
    });
   

    
  }

  gotoOtherScreen =(screenName)=>{


      Navigation.push(this.props.componentId, {
      component: {
        name: screenName,
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

  onpressed_newaccount=()=>{

    Navigation.push(this.props.componentId, {
      component: {
        name: 'Signup',
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
 
  render(){
    
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#ff3358" />

        {/* <KeyboardAwareScrollView style={{flexGrow:1}}> */}

        <View style={styles.mainContainer}>
        
        <View style={styles.logo}>  
        
  <Image style={{height:"100%",width:"100%",resizeMode:"contain"}} source={require("./src/assets/logo.jpg")}></Image>
        
        </View>

        
        <View style={{
          marginTop:"5%",
          marginLeft:"5%",
          marginRight:"5%",
          
          backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",height:hp('6%')}}>

        <TextInput
         style={{fontSize:RFValue(15),
          // backgroundColor:"red",
          height:hp('6%')}}
        placeholder="User name"
        placeholderTextColor="black"
        onChangeText={(value)=>this.setEmail(value)}
        value={this.state.userName}
        />
        
        </View>
        
        <View style={{marginTop:"5%",
          marginLeft:"5%",
          marginRight:"5%",
        
        
        backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",height:hp('6%')}}>
        
        <TextInput
           style={{fontSize:RFValue(15),
            // backgroundColor:"red",
            height:hp('6%'),
           
          
          }}
          onChangeText={(value)=>this.setPassword(value)}
          value={this.state.password}
        placeholder="Enter password"
        placeholderTextColor="black"
        
        secureTextEntry={true}
        maxLength={8}
        />
        
        </View>

        <RedButton
        style={{backgroundColor:"#5199E5",borderWidth:0,
        marginTop:hp('5%'),marginLeft:"10%",marginRight:"10%"
      }}
      on_touch={this.onpressed_movetoscreen3}
        >
          <Text style={{fontSize:RFValue(16),fontWeight:"bold",color:"#fff"}}>Sign in</Text>
        </RedButton>

       
        
        
        <View style={{ height:hp('5%'),
        // backgroundColor:"pink",
        flexDirection: "row", justifyContent: "flex-start",
        justifyContent:"space-between",
        
        marginTop:hp('1%')}}>

        <View style={{flex:1,
        alignItems:"flex-end",
        justifyContent:"center",
          // backgroundColor:"red"
          }}><Text style={{ fontSize:RFValue(15) }}>Or you can create</Text></View>
        <TouchableOpacity style={{flex:1,
        justifyContent:"center",
          // backgroundColor:"yellow"
          }} onPress={()=>this.onpressed_newaccount()}>
        <Text style={{ color: "#5199E5",fontSize:RFValue(15),fontWeight:"bold" }}> New account</Text>
        </TouchableOpacity>
        </View>

        </View>
        

        {/* </KeyboardAwareScrollView> */}

      </>
    );
  }
};

const styles = StyleSheet.create({


  mainContainer: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent:"center",
  },  
  textWrapper: {
    height: hp('100%'), // 70% of height device screen
    width: wp('100%'),   // 80% of width device screen
    backgroundColor:"white"
  },


  logo: {
  // height:"50%",
  backgroundColor:"white",
  justifyContent:"center",
  alignItems:"center",
  height:hp('20%'),
  // backgroundColor:"pink"
    
  },

});

export default Signin;
