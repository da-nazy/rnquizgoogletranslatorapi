import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuizIndex from "./App/screens/QuizIndex";
import Quiz from "./App/screens/Quiz";
import Welcome from "./App/screens/Welcome";
import Register from "./App/screens/Register";
import Login from "./App/screens/Login";
import Score from './App/screens/Score';
import Translate from './App/screens/Translate';
const Stack=createStackNavigator();
export default function App(){
  return (
  
      <NavigationContainer >
      <Stack.Navigator>

      <Stack.Screen
     name="Welcome"
     component={Welcome}
     options={{headerShown:true,headerTitle:null,headerStyle:{
       backgroundColor:'#9A1D93'
     }}}
   
     />
      <Stack.Screen
     name="Translate"
     component={Translate}
     options={{headerShown:true,headerTitle:'Translate',headerLeft:null,
     headerStyle:{
       backgroundColor:'#7400b8'
     },  headerTintColor: "#fff",
     headerTitleStyle:{
       alignSelf:'center',
     },
     }}/>

     
   
     
     <Stack.Screen
     name="Score"
     component={Score}
     options={{headerShown:true,headerTitle:'Score',headerLeft:null,
     headerStyle:{
       backgroundColor:'#9A1D93'
     },  headerTintColor: "#fff",
     headerTitleStyle:{
       alignSelf:'center',
     },
     }}/>

      <Stack.Screen
     name="Register"
     component={Register}
     options={{headerShown:true,headerTintColor:'#fff',headerStyle:{
      backgroundColor:'#9A1D93'
    }}}
     />
     <Stack.Screen
     name="Login" 
     component={Login}
     options={{headerShown:true,headerTintColor:'#fff',headerStyle:{
      backgroundColor:'#9A1D93'
    }}}
     />
      <Stack.Screen
     name="QuizIndex"
     component={QuizIndex}
     options={{headerShown:true,headerTintColor:'#fff',headerStyle:{
      backgroundColor:'#9A1D93'
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
