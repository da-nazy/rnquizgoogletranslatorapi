import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";
import Welcome from "../App/screens/Welcome";
import Register from "./screens/Register";
import Login from "./screens/Login";
const Stack=createStackNavigator();
export default function index(){
  return (
  
      <NavigationContainer >
      <Stack.Navigator>
      <Stack.Screen
     name="Welcome"
     component={Welcome}
     options={{headerShown:true,headerTitle:null,headerStyle:{
       backgroundColor:'#7400b8'
     }}}
   
     />
      <Stack.Screen
     name="Register"
     component={Register}
     options={{headerShown:true,headerTintColor:'#fff',headerStyle:{
      backgroundColor:'#7400b8'
    }}}
     />
     <Stack.Screen
     name="Login" 
     component={Login}
     options={{headerShown:true,headerTintColor:'#fff',headerStyle:{
      backgroundColor:'#7400b8'
    }}}
     />
      <Stack.Screen
     name="QuizIndex"
     component={QuizIndex}
     options={{headerShown:true,headerTintColor:'#fff',headerStyle:{
      backgroundColor:'#7400b8'
    }}}
     />

    <Stack.Screen
     name="Quiz"
     component={Quiz}
     options= {
      
      ({ navigation,route }) => ({
        headerTitle:route.params.title,
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: route.params.color,
          borderBottomColor: route.params.color,
        }
      })
     }
     />
      </Stack.Navigator>
      </NavigationContainer>
  

  )
}
