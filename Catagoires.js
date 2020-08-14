
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
  FlatList
} from 'react-native';
import Drawer  from 'react-native-drawer';
import ControlPanel from './ControlPanal';
import {Navigation} from 'react-native-navigation';
import RNPickerSelect from 'react-native-picker-select';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';


import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';

import { Marker } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


import doctor from './src/assets/do.png';
import Laboratory from './src/assets/to.png';
import Pharmacy from './src/assets/ph.png';
import Appointment from './src/assets/ap.png';
import BlodBank from './src/assets/bb.png';



const placeholder={
label:"Current Location",
value:0
}

const drawerStyles = {
   drawer: { backgroundColor:"red"},
 
   mainOverlay: {
     backgroundColor: 'rgb(12, 16, 33)',
     opacity: 1,
   },
}

 class Catagoires extends Component {


  constructor(props){
    super(props);
    this.state={
      name:"new",
      userName:"",
      password:"",
      text1:"",
      buttonone:false,
      buttontwo:false,
      Catagoires:[
        {
        imagePath:require('./src/assets/do.png'),
        text:"Find Doctor"
      },
      {
        imagePath:require('./src/assets/to.png'),
        text:"Laboratory"
      },
      {
        imagePath:require('./src/assets/ph.png'),
        text:"Pharmacy"
      },
      {
        imagePath:require('./src/assets/ap.png'),
        text:"Appointment"
      },
      {
        imagePath:require('./src/assets/bb.png'),
        text:"Blood Bank"
      },
      {
        imagePath:require('./src/assets/hospital.png'),
        text:"Hospital"
      },
    ]
  
    }
  }
  
  onpressed = (skip) =>{

    console.log ("on press");
    Navigation.push(this.props.componentId, {
      component: {
        name: skip,
        passProps: {
          text: 'Pushed screen'
        },
        options: {
          topBar: {
            title: {
              text: 'Back'
            }
          }
        }
      }
    });
    
  
  }
  
  onpressed_bloodbank=()=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Bank',
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


  onPressed_FindLaboratory=()=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Laboratory_List',
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


  onpressed_finddoctor=()=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'FindDoctor',
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

  onpressed_FindStore=()=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'FindStore',
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

  onpressed_Appointment=()=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'AppointMent_Management',
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

  onpressed_Hospital=()=>{
    Navigation.push(this.props.componentId, {
      component: {
        name: 'Hospital',
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





  closeControlPanel = () => {
      this._drawer.close()
    }
    openControlPanel = () => {
      this._drawer.open()
    }

    onpressedCatogories = (value)=>{

      console.log("value is=",value);

      if(value=="Find Doctor")
      {

        this.onpressed_finddoctor();
      }
      if(value=="Laboratory")
      {
        this.onPressed_FindLaboratory();
      }
      if(value=="Pharmacy")
      {
        this.onpressed_FindStore();
        
      }
      if(value=="Appointment")
      {
        this.onpressed_Appointment();
        
      }
      if(value=="Blood Bank")
      {
        this.onpressed_bloodbank();
        
      }
      if(value=="Hospital")
      {
        this.onpressed_Hospital();

      }

    }


  render(){
    
    return (
      <Drawer
      ref={(ref) => this._drawer = ref}
       content={<ControlPanel move={this.onpressed}></ControlPanel>}
       openDrawerOffset={0.2}
       tapToClose= {true}
       type="overlay"
       panCloseMask={0.2}
       closedDrawerOffset={0}
      
       
       style={drawerStyles}>
      
        <View style={styles.mainContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#ff3358" />
               
        <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"#ff3358",height:60}}>
        <TouchableOpacity onPress={()=>this.openControlPanel()}>
          <Image style={{height:20,width:30,marginLeft:15}}  source={require('./src/assets/kol.png')} ></Image>
        </TouchableOpacity>
        <Text style={{marginLeft:118,fontStyle:"italic",fontSize:RFValue(18),fontWeight: 'bold',color:"white"}}>Home</Text>
        </View>
        {/* <View style={{backgroundColor:"white",alignItems:"center",borderBottomWidth:3,borderBottomColor:"#5199e5",}}>
           
           <RNPickerSelect
                   onValueChange={(value) => console.log(value)}
                   placeholder={placeholder}
                   items={[
                      
                       { label: 'Sahiwal', value: 'A',color:'#5199e5' },
                       { label: 'Lahore', value: 'B',color:'#5199e5' },
                       { label: 'Okara', value: 'B-',color:'#5199e5' },
                       { label: 'arifwala', value: 'O',color:'#5199e5' },
                       { label: 'chichawatni', value: 'O-',color:'#5199e5' },
                     
                   ]}
               />
       
           </View> */}

<View style={{flex:1,alignItems:"center",marginTop:"5%"}}>

<View style={{height:verticalScale(140),flexDirection:"row",justifyContent:"space-between"}}>

  <View style={{flex:1,
    // backgroundColor:"pink"
    justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity
onPress={()=>this.onpressedCatogories("Find Doctor")}
 style={{width:moderateScale(80),height:moderateScale(80),borderRadius:moderateScale(160/2),backgroundColor:"#FF3358",justifyContent:"center",alignItems:"center"}}>
<Image style={{height:"60%",width:"60%",borderRadius:100,tintColor:"white",resizeMode:"contain"}} source={doctor}></Image> 

</TouchableOpacity>

  <View><Text style={{fontSize:RFValue(15)}} >Find Doctor</Text></View>
  </View>


  <View style={{flex:1,
    // backgroundColor:"orange",
    justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity
onPress={()=>this.onpressedCatogories("Laboratory")}
 style={{width:moderateScale(80),height:moderateScale(80),borderRadius:moderateScale(160/2),backgroundColor:"#FF3358",justifyContent:"center",alignItems:"center"}}>
<Image style={{height:"60%",width:"60%",borderRadius:100,tintColor:"white",resizeMode:"contain"}} source={Laboratory}></Image> 

</TouchableOpacity>

  <View><Text style={{fontSize:RFValue(15)}} >Laboratory</Text></View>
  </View>


  </View>


  <View style={{height:verticalScale(140),flexDirection:"row",justifyContent:"space-between",marginTop:"2%"}}>

  <View style={{flex:1,
    // backgroundColor:"pink",
    justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity
onPress={()=>this.onpressedCatogories("Pharmacy")}
 style={{width:moderateScale(80),height:moderateScale(80),borderRadius:moderateScale(160/2),backgroundColor:"#FF3358",justifyContent:"center",alignItems:"center"}}>
<Image style={{height:"60%",width:"60%",borderRadius:100,tintColor:"white",resizeMode:"contain"}} source={Pharmacy}></Image> 

</TouchableOpacity>

  <View><Text style={{fontSize:RFValue(15)}} >Pharmacy</Text></View>
  </View>


  <View style={{flex:1,
    // backgroundColor:"orange",
    justifyContent:"center",alignItems:"center"}}>
<TouchableOpacity
onPress={()=>this.onpressedCatogories("Blood Bank")}
 style={{width:moderateScale(80),height:moderateScale(80),borderRadius:moderateScale(160/2),backgroundColor:"#FF3358",justifyContent:"center",alignItems:"center"}}>
<Image style={{height:"60%",width:"60%",borderRadius:100,tintColor:"white",resizeMode:"contain"}} source={BlodBank}></Image> 

</TouchableOpacity>

  <View><Text style={{fontSize:RFValue(15)}} >Blood Bank</Text></View>
  </View>


  </View>


  <View style={{height:verticalScale(140),marginTop:"2%",justifyContent:"center",alignItems:"center"}}>


  <TouchableOpacity
onPress={()=>this.onpressedCatogories("Appointment")}
 style={{width:moderateScale(80),height:moderateScale(80),borderRadius:moderateScale(160/2),backgroundColor:"#FF3358",justifyContent:"center",alignItems:"center"}}>
<Image style={{height:"60%",width:"60%",borderRadius:100,tintColor:"white",resizeMode:"contain"}} source={Appointment}></Image> 

</TouchableOpacity>

  <View><Text style={{fontSize:RFValue(15)}} >Appointment</Text></View>

    </View>



  

    </View>




 {/* <View style={styles.mapContainer}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 30.664378,
         longitude: 73.096812,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
       onLayout={this.onLayout}
     >
         <Marker
            
            pinColor="red"
            coordinate={{latitude:30.664378,
              longitude:73.096812 }}
            title={"Barani Institute of Sciences Sahiwal"}
            // description={}
                />
     </MapView>
   </View>  */}


        
       
        
        

      
      

        </View>
        
      </Drawer>
    );
  }
};
const styles = StyleSheet.create({


  mainContainer: {
   flex: 1,
  //  justifyContent:"flex-start", 
   backgroundColor: "#ffff",
  },
  mapContainer:{

    flex:1,

    // ...StyleSheet.absoluteFillObject,
    height: 200,
    // width: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
  
  
    

},
map: {
    ...StyleSheet.absoluteFillObject,
  },
  


});

export default Catagoires;
