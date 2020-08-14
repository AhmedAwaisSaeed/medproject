
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
import { create } from 'react-test-renderer';

class contrilpanel extends Component {


  constructor(props){
    super(props);
    this.state={
      name:"new",
      userName:"",
      password:"",
      text1:"",
      buttonone:false,
      buttontwo:false,
  
    }
  }


  render(){
    
    return (
            <>
                 <View style={styles.mainContainer}>
                  <View styles={{backgroundColor:"gray",hight:20,white:20}}>
                   
                  </View>
                  </View>
           </>
        );
   }
};

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    justifyContent:"flex-start", 
    backgroundColor: "pink",
   },

});
export default contrilpanel;
