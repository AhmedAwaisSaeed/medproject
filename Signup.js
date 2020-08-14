
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
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {Navigation} from 'react-native-navigation';
import RedButton from './src/components/Buttons/RedButton';
import {base_url} from './src/components/AllVariables';

class Signup extends Component {


  constructor(props){
    super(props);
    this.state={
      name:"new",
      userName:"",
      password:"",
      confirmPassword:"",
      text1:"",
      buttonone:false,
      buttontwo:false,
      selectedGender:""
  
    }
  }

  setUsername= (value)=>{
    this.setState({
      userName:value
    })
  }


  setPassowrd= (value)=>{
    this.setState({
      password:value
    })
  }

  setConfirmPassword = (value)=>{

    this.setState({

      confirmPassword:value

    })

  }



    onpressed_one = () =>{

      this.setState({
      buttonone:true,
      buttontwo:false,
      selectedGender:"Female",
      
      
     })
  
   
    
  
     }

    onpressed_two = () =>{
  
      this.setState({
      buttontwo:true,
      buttonone:false,
      selectedGender:"Male",
      
      
      })
  
    }
    
    onPressed_signup=()=>{


      const allParams = {

        email:this.state.userName,
        password:this.state.password,
        gender:this.state.selectedGender

      }

      console.log("all params=",allParams);



      fetch(base_url+'user/addUser', {
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
        
    
        
        alert('User Created');
      
        
        
    
    
        }
        else
        {
          alert("User not updated");
        console.log('Error in sign in',responseJson);
        }
        })
        .catch((error) => {
        console.log('error is',error);
        console.error(error);
        });
       
    
  











      // Navigation.push(this.props.componentId, {
      //   component: {
      //     name: 'Catagoires',
      //     passProps: {
      //       text: 'Pushed screen'
      //     },
      //     options: {
      //       topBar: {
      //         title: {
      //           text: 'Pushed screen title'
      //         }
      //       }
      //     }
      //   }
      // });
    }



  render(){
    
    return (
            <>
              <StatusBar barStyle="light-content" backgroundColor="#ff3358" />

   
              <KeyboardAwareScrollView> 

             <View style={styles.mainContainer}>

             <View style={styles.logo}>  
        
        <Image style={{height:"100%",width:"100%",resizeMode:"contain"}} source={require("./src/assets/logo.jpg")}></Image>
              
              </View>
             <View style={{height:hp('6%'),
              // backgroundColor:"red",
             justifyContent:"center",
             marginLeft:"10%",
             marginTop:"10%"

             }}>
              
            <Text style={{color:"#5199e5",
            
          fontWeight:"bold",fontSize:RFValue(20)}}>Welcome</Text>

             </View> 
             
       
             <View style={{backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%"}}>

             <TextInput
             style={{fontSize:RFValue(14)}}
             placeholder="User name"
             placeholderTextColor="black"
             marginTop="5%"
             value={this.state.userName}
             onChangeText={(value)=>this.setUsername(value)}
             />
             </View>

          
             <View style={{backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%",marginTop:10}}>

             <TextInput
             style={{fontSize:RFValue(14)}}
             placeholder="password"
             placeholderTextColor="black"
             marginTop="5%"
             value={this.state.password}
             onChangeText={(value)=>this.setPassowrd(value)}
             secureTextEntry={true}
             />
             </View>

             <View style={{backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%",marginTop:10}}>
          
             <TextInput
             style={{fontSize:RFValue(14)}}
             placeholder="Re-Enter-password"
             placeholderTextColor="black"
             marginTop="5%"
             secureTextEntry={true}
             value={this.state.confirmPassword}
             onChangeText={(value)=>this.setConfirmPassword(value)}
             />
             </View>
             <View style={{ flexDirection:"row",justifyContent:"center",marginTop:"10%"}}>
             <View>

             <TouchableOpacity style={this.state.buttonone ? styles.button: styles.buttonone} onPress={()=>{this.onpressed_one()}} >
             <Text style={{fontSize: hp('2%')}} >Female</Text>
             </TouchableOpacity>

             </View>
             <View>
             <TouchableOpacity style={this.state.buttontwo ? styles.button2: styles.buttontwo} onPress = {()=>{this.onpressed_two()}} >
             <Text style={{fontSize: hp('2%')}} >male</Text>
             </TouchableOpacity>
             </View>

              
    


              </View>
              {/* <View style={{alignItems:"center",marginTop:"10%",}}>
                
              <TouchableOpacity  style={{alignItems:"center",justifyContent:"center",backgroundColor:"#5199e5",height:"32%",width:"80%",borderRadius:40}} onPress={()=>this.onPressed_signup()} >
              <Text style={{color:"white",fontSize: hp('2.5%')}}>signup</Text>
              </TouchableOpacity>
              </View>         */}

        <RedButton
        style={{backgroundColor:"#5199E5",borderWidth:0,
        marginTop:hp('5%'),marginLeft:"10%",marginRight:"10%"
          }}
      on_touch={this.onPressed_signup}
        >
          <Text style={{fontSize:RFValue(16),fontWeight:"bold",color:"#fff"}}>Sign Up</Text>
      </RedButton>
    
              </View>
    
               </KeyboardAwareScrollView> 
    
           </>
        );
   }
};

const styles = StyleSheet.create({


  mainContainer: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  textWrapper: {
    height: hp('100%'), // 70% of height device screen
    width: wp('100%'),   // 80% of width device screen
    backgroundColor:"white"
  },

  logo: {
    marginTop:"10%",
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
    height:hp('20%'),

    
  },
  Hello:{
  },
  button:{
    alignItems:"center",justifyContent:"center",
    height:40,width:100,borderTopLeftRadius:40,
    borderBottomLeftRadius:40,borderWidth:2,backgroundColor:"#5199e5"
  },
  buttonone:{
    alignItems:"center",justifyContent:"center",
    height:40,width:100,borderTopLeftRadius:40,
    borderBottomLeftRadius:40,borderWidth:2,backgroundColor:"white"
  },
  button2:{
    alignItems:"center",justifyContent:"center",
    height:40,width:100,borderTopRightRadius:40,
    borderBottomRightRadius:40,borderWidth:2,backgroundColor:"#5199e5"
  },
  buttontwo:{
    alignItems:"center",justifyContent:"center",
    height:40,width:100,borderTopRightRadius:40,
    borderBottomRightRadius:40,borderWidth:2,backgroundColor:"white"
  }


});

export default Signup;
