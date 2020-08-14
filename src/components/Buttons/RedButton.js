import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';

  
  import moduleName from '../Cards/CardViewSmall';
import CardViewSmall from '../Cards/CardViewSmall';

const RedButton = (props) =>{


    return(
        
        <CardViewSmall style={[{paddingLeft:0,paddingRight:0,
            borderRadius:20},props.style]}>
        <TouchableOpacity onPress={()=>props.on_touch("#e13a3a")} style={styles.ButtonView}>
            

            {props.children}
            
            
        </TouchableOpacity>
        </CardViewSmall>

        

    )



}


const styles = StyleSheet.create({
ButtonView: {

//  height:55,
flex:1,

justifyContent:"center",
alignItems:"center",
// borderWidth:1,
// borderRadius:20,
// borderColor:"#e13a3a",
// backgroundColor:"#e13a3a",

// marginLeft:10,
// marginRight:10


},
linearGradient:{
    flex:1,
    justifyContent:"center",
alignItems:"center",

}
});

export default RedButton;

