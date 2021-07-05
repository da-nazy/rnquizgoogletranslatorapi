import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
export default function Welcome({ navigation }) {
  const { navigate } = navigation;
  return (
    <View style={style.container}>
      <View style={style.appNameBody}>
        <Text style={style.appName}>
          IGBO AND ENGLISH LANGUAGE LEARNING QUIZ APPLICATION
        </Text>
      </View>
      <TouchableOpacity style={style.conBtn} onPress={() => navigate("Login")}>
        <Text style={{textAlign:'center',alignSelf:'center',fontSize:25,color:'#fff'}}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    borderWidth: 1,
  },
  appNameBody: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 80,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
  },
  appName: {
    fontSize: 45,
    color: "#9A1D93",
    textAlign: "center",
  },
  conBtn: {
    marginTop: 30,
    borderWidth: 1,
    margin: 20,
    borderRadius: 5,
    height: 45,
    display:'flex',
    justifyContent:'center',
    backgroundColor:'#9A1D93'
    
  },
});
