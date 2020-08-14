import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const CardViewSmall = (props) => {
    return (
        <View style={
            props.borderColor ? 
            
            [styles.cardView ,props.style,{
            borderColor: props.error ?"red": "#00eeb8",

        }]:

        [styles.cardView ,props.style]
    
    
    }>
            {props.children}
        </View>
    )
}

export default CardViewSmall;

const styles = StyleSheet.create({


    cardView: {
        shadowColor: "rgba(151, 154, 155, 0.14)",
        shadowOffset: {  width: 0,
            height: 17},
        
        borderWidth:1.8,
    
        elevation: 5,
        

        shadowRadius: 13,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 2,
        
        
        paddingLeft:15,
        paddingRight:10,
        marginTop:5,
        // overflow: 'hidden',
        //   flex: 1,
        //  flex: 1,
        height:hp('6.5%'),
        // alignItems:"center",
        justifyContent:"center",
         
         
        // marginLeft:10,
        // marginRight:10,
    
    
         backgroundColor: '#FFFF',
        //  borderColor:"#ECEFF6",
        // borderWidth:0.5,
         borderRadius: 5,
        // paddingBottom:20,
        // marginBottom:20
      },


})






