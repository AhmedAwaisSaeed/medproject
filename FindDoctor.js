
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
import RNPickerSelect from 'react-native-picker-select';
import{Navigation} from 'react-native-navigation';
import RedButton from './src/components/Buttons/RedButton';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const name=1;
const placeholder_1={
  label:'Select Your Disease type',
  value:'0'
}
const placeholder_2={
  label:'select catagory'
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



class FindDoctor extends Component {

constructor(props){
  super(props);
  this.state={
    name:"new",
    userName:"",
    password:"",
    text1:"",
    selectedOption:""
  }
}
on_pressed_back=()=>{

    Navigation.pop(this.props.componentId);
    
  }

  onpressed_find=()=>{

    Navigation.push(this.props.componentId, {
      component: {
        name: 'FindDoctor_1',
        passProps: {
          response:this.state.selectedOption
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
       
           <View style={{marginTop:20,backgroundColor:"white",alignItems:"center",borderBottomWidth:3,borderBottomColor:"#5199e5",width:"70%",marginHorizontal:"15%",}}>
           
           <RNPickerSelect
                   onValueChange={(value) => this.setState({selectedOption:value})}
                   placeholder={placeholder_2}
                 
                   items={[
                     
                     { label: 'Kidney', value: 'Kidney',color:'#5199e5' },
                     { label: 'Childs', value: 'Childs',color:'#5199e5' },
                     { label: 'Skin', value: 'Skin',color:'#5199e5' },
                     { label: 'Psychiatrist', value: 'Psychiatrist',color:'#5199e5' },
                     { label: 'Paediatrician', value: 'Paediatrician',color:'#5199e5' },

       
                   ]}
               />
           </View>

           <View style={{flex:0.9}}></View>

           {/* <View style={{alignItems:"center",}}>
                
                <TouchableOpacity style={{alignItems:"center",justifyContent:"center",backgroundColor:"#5199e5",height:50,width:250,borderRadius:40}} onPress={()=>{this.onpressed_find()}} >
                <Text style={{color:"white",fontSize:hp('3%')}}> Submit </Text>
                </TouchableOpacity>
              
  
            </View> */}
               <RedButton

        style={{backgroundColor:"#5199E5",borderWidth:0,
        marginTop:hp('5%'),marginLeft:"10%",marginRight:"10%"
          }}
      on_touch={this.onpressed_find}
        >
          <Text style={{fontSize:RFValue(16),fontWeight:"bold",color:"#fff"}}>Submit</Text>
      </RedButton>



        
    
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
