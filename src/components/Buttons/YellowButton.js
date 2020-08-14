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

  import LinearGradient from 'react-native-linear-gradient';
  import moduleName from '../Cards/CardViewSmall';
import CardViewSmall from '../Cards/CardViewSmall';

const YellowButton = (props) =>{

    console.warn("yellow me");


    return(
        
        <CardViewSmall style={{paddingLeft:0,paddingRight:0,borderWidth:1,borderColor:"#fec00d",backgroundColor:"#fec00d",
            borderRadius:20, ...props.style}}>
        <TouchableOpacity 
        onPress={()=>props.on_touch("yellow")} 
        style={styles.ButtonView}>
            

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
borderWidth:1,
borderRadius:20,
borderColor:"#fec00d",
backgroundColor:"#fec00d",
// marginLeft:10,
// marginRight:10


},
linearGradient:{
    flex:1,
    justifyContent:"center",
alignItems:"center",

}
});

export default YellowButton;