import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity,Json,Text,Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}){
  const {navigate}=navigation;
    const [user,setUser]=useState({
    name:'',
    matric:'',
    dog:'',
    })

    const userExist=()=>{
          getUserData();
    }
    const getUserData=async ()=>{
        try{
            const value=await AsyncStorage.getItem(user.matric);
            if(value!==null){
            // console.log('user found!');
           //  console.log(value);
             navigate('QuizIndex');

            }else{
                console.log("User not found!");
                Alert.alert(
                    "Error",
                    "Invalid user input",
                    [{
                        text:'Cancel',
                    }]
                )
            }
        }catch(e){
            // error reading value
        }
    }

    const getUser=()=>{
      if(checkUserInput()){
      //  console.log("valid");
        userExist();
        //storeData(user);
      }else{
       // console.log("Invalid user input");
        Alert.alert(
            "Error",
            "Invalid user Input",
            [
              {
                text:'Cancel'
              }
            ]
        )
      }
    }

   

  const checkUserInput=()=>{
    
      var check=false;

      if(user.matric){
          check=true;
      }else{
        check=false;
      }
    
      return check;
  }
   return(
       
 <View style={{ padding: 10 }}>
    
        <View>
          <TextInput
            label="Matric Number:"
            underlineColor="#232"
            onChangeText={(e) => setUser({...user,matric:e})}
            keyboardType="numeric"
            maxLength={11}
          />
        </View>

      
    <TouchableOpacity onPress={getUser} style={{borderWidth:1,height:50,justifyContent:'center',alignItems:'center',margin:10,borderRadius:5,backgroundColor:'#7400b8'}}>
        <Text style={{color:'#fff',fontSize:20}}>Login</Text>
    </TouchableOpacity>
    <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}><Text >Don't have an account?</Text><TouchableOpacity onPress={()=>navigate('Register')}><Text style={{marginLeft:10,color:'#7400b8'}}>Register</Text></TouchableOpacity></View>
       </View>
   )
}

const style=StyleSheet.create({
    
})