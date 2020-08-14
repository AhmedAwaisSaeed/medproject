
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {Navigation} from 'react-native-navigation';
import RNPickerSelect from 'react-native-picker-select';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RedButton from './src/components/Buttons/RedButton';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-community/async-storage';
import {base_url} from './src/components/AllVariables';
const placeholder ={
  label: 'select a time',
  value:0
}

class EditAppointMent extends Component {


  constructor(props){
    super(props);
    this.state={
      name:this.props.response.fullName,
      phoneNumber:this.props.response.phoneNumber,
      cnic:this.props.response.cnicNumber,
      selectedTime:this.props.response.time,


      text1:"",
      buttonone:false,
      buttontwo:false,
      userId:"",
      drId:""
  
    }
  }

  async componentDidMount(){
    let user=await this.getData();

    this.setState({
      userId:user._id,
      drId:this.props.response._id

    })

    console.log("user value",this.state.userId);

    console.log("response",this.props.response);
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

  setName = (value)=>{

    this.setState({name:value})

  }
  

  
  setPhoneNumber = (value)=>{

    this.setState({phoneNumber:value})

  }


  
  setCnic = (value)=>{

    this.setState({cnic:value})

  }
  
  
  on_pressed_back=()=>{

    Navigation.pop(this.props.componentId);
    
  }
  
    
  onPressed_ConformAppointment=(item)=>{

    const allParams = {
    
    phoneNumber:this.state.phoneNumber,
    fullName:this.state.name,
    cnicNumber:this.state.cnic,
    time:this.state.selectedTime,
    
    
    }

    console.log("all params in appointment update",allParams);



    fetch(base_url+'appointment/appointment/'+this.props.response._id, {
      method: 'PUT',
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
      
  
      
      alert('Appointment Updated');
    
      
      
  
  
      }
      else
      {
        alert("appointment not updated");
      console.log('Error in sign in',responseJson);
      }
      })
      .catch((error) => {
      console.log('error is',error);
      console.error(error);
      });
     
  



      // Navigation.push(this.props.componentId, {
      //   component: {
      //     name: 'Doctor',
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
            
             <View style={styles.header}>
          <TouchableOpacity onPress={()=>this.on_pressed_back()} >
          <Image style={{height:25,width:35,borderRadius:40,marginLeft:15}} source={require('./src/assets/arrow-89-512.png')} ></Image>
          </TouchableOpacity>
          <Text style={{marginLeft:50,fontStyle:"italic",fontSize:hp('3%'),fontWeight: 'bold',color:"white"}}>Make a Appointment</Text>
          </View>

             <View style={styles.img}>  

             <Image style={{backgroundColor:"gray",height:140,width:140,borderRadius:140,tintColor:"white",borderWidth:2,borderColor:"gray"}} source={require('./src/assets/us.png')}></Image>

             <Text style={{marginTop:20,color:"#5199e5",fontSize:hp('3%')}}>
              {this.props.response.name}
             </Text>

             </View>
             <View style={{backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%",marginTop:30}}>

             <TextInput
             style={{fontSize:hp('3%')}}
             placeholder="Full name"
             placeholderTextColor="black"
             marginTop="5%"
             onChangeText={(value)=>this.setName(value)}
             value={this.state.name}
             />
             </View>

             <View style={{backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%",marginTop:10}}>
           
             <TextInput
             style={{fontSize:hp('3%')}}
             placeholder="Phone NO"
             placeholderTextColor="black"
             marginTop="5%"
             onChangeText={(value)=>this.setPhoneNumber(value)}
             value={this.state.phoneNumber}
             
             />

             </View>


             <View style={{backgroundColor:"white",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%",marginTop:10}}>
          
             <TextInput
             style={{fontSize:hp('3%')}}
             placeholder="CNIC - NO"
             placeholderTextColor="black"
             marginTop="5%"
             
             onChangeText={(value)=>this.setCnic(value)}
             value={this.state.cnic}
             />



              </View>

             <View style={{marginTop:10,backgroundColor:"white",alignItems:"center",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%",marginTop:10}}>
           
           <RNPickerSelect
                   onValueChange={(value) => this.setState({selectedTime:value})}
                   placeholder={placeholder}
                   value={this.state.selectedTime}
                 
                   items={[
                     { label: 'Morning 8:00 to 1:00 Monday', value: 'Morning 8:00 to 1:00 Monday',color:'#ff3358' },
                     { label: 'Evening 4:00 to 9:00 Monday', value: 'Evening 4:00 to 9:00 Monday',color:'#ff3358' },
                     { label: 'Morning 8:00 to 1:00 Theresday', value: 'Morning 8:00 to 1:00 Theresday',color:'#ff3358' },
                     { label: 'Evening 4:00 to 9:00 Theresday', value: 'Evening 4:00 to 9:00 Theresday',color:'#ff3358' },
                    
       
                   ]}
               />
           </View>

              {/* <View style={{alignItems:"center",marginTop:80,marginBottom:100}}>
                
              <TouchableOpacity  style={{alignItems:"center",justifyContent:"center",backgroundColor:"#5199e5",height:50,width:250,borderRadius:40,}} onPress={()=>this.onPressed_ConformAppointment()} >
              <Text style={{color:"white",fontSize:hp('3%')}}>Conform </Text>
              </TouchableOpacity>
              </View>         */}

      
      <RedButton
        style={{backgroundColor:"#5199E5",borderWidth:0,
        marginLeft:"10%",marginRight:"10%",marginTop:hp('3%')
          }}
      on_touch={this.onPressed_ConformAppointment}
        >
          <Text style={{fontSize:RFValue(16),fontWeight:"bold",color:"#fff"}}>Update</Text>
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
    backgroundColor: "white",
  },

  img: {
  backgroundColor:"white",
  justifyContent:"center",
  alignItems:"center",
  marginTop:20
    
  },

  button:{
    alignItems:"center",justifyContent:"center",
    height:40,width:120,borderTopLeftRadius:40,
    borderBottomLeftRadius:40,borderWidth:2,backgroundColor:"#ff3358"
  },
  header:{
    
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#ff3358",
    height:60
    
  }

});

export default EditAppointMent;
