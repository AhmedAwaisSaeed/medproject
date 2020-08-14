import React from 'react';
import {StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const ListCardView = props => {
    if(props.messages!=0)
    {
  return (
    <TouchableOpacity 
    onPress={()=>props.navigateToChat(props.name)}
    style={[styles.listCardView,props.style]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          // backgroundColor:"pink"
        }}>
        <View
          style={{
            flex: 0.35,
            justifyContent: 'center',
            // backgroundColor:"red"
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              backgroundColor: '#fff',
              marginLeft: 12,
              borderWidth: 2,
              borderColor: '#74F5D4',
            }}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 50}}
              source={props.imagePath}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            //  backgroundColor:"pink"
          }}>
          <View style={styles.personNameView}>
        <Text style={styles.personNameText}>{props.name}</Text>
          </View>

          <View style={styles.personStatusView}>
        <Text style={styles.personStatusText}>{props.status}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 0.35,
            justifyContent: 'center',
            //  backgroundColor:"grey"
          }}>
          <View style={styles.timeView}>
        <Text style={styles.timeText}>{props.time}</Text>
          </View>

          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 24,
              backgroundColor: '#3acce1',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              {props.messages}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );    
}
else
{
    return(
        <TouchableOpacity
        onPress={()=>props.navigateToChat(props.name)}
         style={[styles.listCardView,props.style]}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            // backgroundColor:"pink"
          }}>
          <View
            style={{
              flex: 0.35,
              justifyContent: 'center',
              // backgroundColor:"red"
            }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                backgroundColor: '#fff',
                marginLeft: 12,
                borderWidth: 2,
                borderColor: "#a5a5a5"
              }}>
              <Image
                style={{width: '100%', height: '100%', borderRadius: 50}}
                source={props.imagePath}
              />
            </View>
          </View>
  
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              //  backgroundColor:"pink"
            }}>
            <View style={styles.personNameView}>
          <Text style={styles.personNameText}>{props.name}</Text>
            </View>
  
            <View style={styles.personStatusView}>
          <Text style={styles.personStatusText,{color: "#151717",opacity: 0.3}}>{props.status}</Text>
            </View>
          </View>
  
          <View
            style={{
              flex: 0.35,
              justifyContent: 'center',
              //  backgroundColor:"grey"
            }}>
            <View style={styles.timeView}>
          <Text style={styles.timeText}>{props.time}</Text>
            </View>
  
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 24,
                backgroundColor: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                }}>
                {props.messages}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )

}
     
};

export default ListCardView;

const styles = StyleSheet.create({
  listCardView: {
    width: '100%',
    marginTop: '1%',
    height: hp('11%'),
    marginLeft: '5%',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(138, 138, 138, 0.18)',
    shadowOffset: {
      width: 1,
      height: 19,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    elevation: 10,
  },
  personNameText: {
    fontSize: RFValue(18.5),

    // fontWeight:"500",
    fontFamily: Platform.OS === 'ios' ? 'TwCenMT-Bold' : 'TCB_____',

    lineHeight: 19,
    letterSpacing: 0,

    color: '#151717',
  },
  personStatusText: {
    fontSize: RFValue(16),

    // fontWeight:"500",
    fontFamily: Platform.OS === 'ios' ? 'TwCenMT-Regular' : 'TCM_____',

    lineHeight: 18,
    letterSpacing: 0,

    color: '#151717',
  },
  timeText: {
    fontSize: RFValue(10),

    // fontWeight:"500",
    fontFamily: Platform.OS === 'ios' ? 'TwCenMT-Regular' : 'TCM_____',

    lineHeight: 11,
    letterSpacing: 0,
    //  textAlign: "center",
    color: '#a7a7a7',
  },
});
