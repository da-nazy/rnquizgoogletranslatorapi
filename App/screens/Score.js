import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";
import RNSpeedometer from "react-native-speedometer";
export default function Score({navigation,route}) {
  const {navigate}=navigation;
  const[score,setScore]=useState({
    maxScore:route.params.totalCount,
    currentScore:route.params.score,
    topScore:18,
  })
  return (
    <View>
      <View style={{  marginTop: 10 }}>
        <RNSpeedometer value={score.currentScore} size={200}  maxValue={score.maxScore}
       // wrapperStyle={{borderWidth:1}}
       // outerCircleStyle= {{borderWidth:1,backgroundColor:'#123'}}
        //halfCircleStyle={{borderWidth:1}}
        //labelWrapperStyle={{borderWidth:1}}
      //  labelStyle={{borderWidth:1}}
        />
      </View>
      <Text style={{textAlign:'center',paddingLeft:75,height:35,fontSize:25,fontWeight:'bold'}}>/{score.maxScore}</Text>
     {
    /**
     *  <View style={{marginTop:20}}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            color: "#7400b8",
            fontStyle: "normal",
          }}
        >
          PERSONAL BEST
        </Text>
        <Text style={{ textAlign: "center", fontSize:25,fontWeight:'bold' }}>20</Text>
      </View>
     */
     }
      <TouchableOpacity style={{backgroundColor:"#9A1D93",borderRadius:5,width:Dimensions.get("screen").width/1.5,height:35,justifyContent:'center',display:'flex',alignSelf:'center',marginTop:50}}
        onPress={() => {
         navigate('QuizIndex');
        }}
      >
        <Text style={{textAlign:'center',color:'#fff',fontSize:15}}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}
