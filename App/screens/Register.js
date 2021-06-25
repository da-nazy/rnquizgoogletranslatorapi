import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity,Text,Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register({navigation}){
  const {navigate}=navigation;
    const [user,setUser]=useState({
    name:'',
    matric:'',
    dog:'',
    score:'',
   
    })

    const userExist=()=>{

    }

    const addUser=()=>{
    if( checkUserInput()){
      //console.log("true");
      storeData(user);
    }else{
      //console.log("false");
      Alert.alert("Error","Invalide User Input!",[{
        text:"Cancel"
      }])
      
    }
    }

    const storeData=async(value)=>{
     // console.log(value);
     
      try{
       const jsonValue=JSON.stringify(value);
      await AsyncStorage.setItem(value.matric.toString(),jsonValue); 
     console.log(jsonValue);
    }catch(e){
        // saving error
        console.log(e)
      }
    }

  const checkUserInput=()=>{
    
      var check=false;

      if(user.name){
          check=true;
          
      }else{
        check=false;
      }

      if(user.matric){
          check=true;
         
      }else{
        check=false;
    
      }
     
      if(user.dog){
        check=true;
     
    }else{
      check=false;
    }
   
   // console.log(check);
      return check;
  }
   return(
       
 <View style={{ padding: 10 }}>
        
        <View >
          <TextInput
            label="Full Name:"
            underlineColor="#232"
            onChangeText={(e) => setUser({...user,name:e})}
          />
        </View>
        <View>
          <TextInput
            label="Matric Number:"
            underlineColor="#232"
            onChangeText={(e) => setUser({...user,matric:e})}
            keyboardType="numeric"
            maxLength={11}
          />
        </View>

        <View>
          <TextInput
            label="Date of Graduation:"
            underlineColor="#232"
            onChangeText={(e) => setUser({...user,dog:e})}
            keyboardType="numeric"
            maxLength={11}
          />
        </View>
        
    <TouchableOpacity onPress={addUser} style={{borderWidth:1,height:50,justifyContent:'center',alignItems:'center',margin:10,borderRadius:5,backgroundColor:'#7400b8'}}>
        <Text style={{color:'#fff',fontSize:20}}>Register</Text>
    </TouchableOpacity>
    <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}><Text >Already have an account?</Text><TouchableOpacity onPress={()=>navigate("Login")}><Text style={{marginLeft:10,color:'#7400b8'}}>Login</Text></TouchableOpacity></View>
       </View>
   ) 
}

const style=StyleSheet.create({
    
})