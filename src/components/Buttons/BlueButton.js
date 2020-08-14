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

const BlueButton = (props) =>{


    return(
        
        <CardViewSmall style={{paddingLeft:0,paddingRight:0,borderWidth:1,borderColor:"#5CA7E3",backgroundColor:"#5CA7E3",
            borderRadius:20}}>
        <TouchableOpacity onPress={()=>props.on_touch("Purple")} style={styles.ButtonView}>
            

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
borderColor:"#5CA7E3",
backgroundColor:"#5CA7E3",

// marginLeft:10,
// marginRight:10


},
linearGradient:{
    flex:1,
    justifyContent:"center",
alignItems:"center",

}
});

export default BlueButton;
