import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
//import axios from 'axios';
export default function Translate() {
  const [mtranslate, setMTranslate] = useState({
    english: {
      id:2,
      btnPlacheolder: "Enter English Text",
      transhead: " English To Igbo Translation",
      text: "",
      translation: "Nke atuhari ga di eba...",
      tl: "ig",
      sl: "en",
    },
    igbo: {
      id:1,  
      btnPlacheolder: "Tiye Asusu Igbo eba a!",
      transhead: "Igbo To  English Translation",
      text:"",
      translation: "Translated words goes here..",
      tl: "en",
      sl: "ig",
    },
    selected: {
      color: "#fff",
      bgColor: "#7400b8",
    },
    lang: "1",

    loader: false,
  });
 1
  const clearText = useRef(null);

  const loader = () => {
    return (
      <View
        style={{
          position: "absolute",
          flex: 1,
          zIndex: 2,
          justifyContent: "center",
          alignSelf: "center",
          flexDirection: "row",
          top: -5,
          justifyContent: "space-around",
          padding: 10,
          width: "100%",
          height: Dimensions.get("screen").height,
        }}
      >
        <ActivityIndicator animating={true} size="large" color="#7400b8" />
      </View>
    );
  };

  const addInput=(e)=>{
  if(mtranslate.lang==1){
  setMTranslate({...mtranslate,igbo:{ id:1,  
    btnPlacheolder: "Tiye Asusu Igbo eba a!",
    transhead: "Igbo To  English Translation",
    text: e,
    translation: "Translated words goes here..",
    tl: "en",
    sl: "ig"}})
  }else{
      setMTranslate({...mtranslate,english:{  id:2,
        btnPlacheolder: "Enter English Text",
        transhead: " English To Igbo Translation",
        text:e,
        translation: "Nke atuhari ga di eba...",
        tl: "ig",
        sl: "en"}
       })
  }
  }

  const checkInput = () => {
      if(mtranslate.lang==1){
          // check for igbo text
           //console.log("igbo")
           if (mtranslate.igbo.text) {
             translateText();
          // console.log(mtranslate.igbo.text);
           } else {
            Alert.alert(
                "Empty input",
                "Enter a valid igbo input",[
                    {
                       text:'Continue',
                    }
                ]
            )
           }
      }else{
// check for english text
if (mtranslate.english.text) {
    translateText();
  // console.log(mtranslate.english.text);
   } else {
    Alert.alert(
        "Empty input",
        "Enter a valid   English input",[
            {
               text:'Continue',
            }
        ]
    )
   }
      }

    

}
  const translateText = () => {
      console.log(mtranslate);
   var axios = require("axios").default;
    setMTranslate({ ...mtranslate, loader: true });
    var options = {
      method: "GET",
      url: "https://google-translate20.p.rapidapi.com/translate",
      params: {
        text:
          mtranslate.lang == 1 ? mtranslate.igbo.text : mtranslate.english.text,
        tl: mtranslate.lang == 1 ? mtranslate.igbo.tl : mtranslate.english.tl,
        sl: mtranslate.lang == 1 ? mtranslate.igbo.sl : mtranslate.english.sl,
      },
      headers: {
        "x-rapidapi-key": "ip7VtJ8LeXmshPqiKNONcboKXQbDp1EpTcbjsnJoiM9K0buqTL",
        "x-rapidapi-host": "google-translate20.p.rapidapi.com",
      },
    };
    axios
    .request(options)
    .then(function (response) {
      console.log(response.data.data.translation);

      if(mtranslate.lang==1){
        setMTranslate({...mtranslate,loader: false,igbo:{ id:1,  
          btnPlacheolder: "Tiye Asusu Igbo eba a!",
          transhead: "Igbo To  English Translation",
          text: mtranslate.igbo.text,
          translation:response.data.data.translation,
          tl: "en",
          sl: "ig"}})
        }else{
            setMTranslate({...mtranslate,loader: false,english:{  id:2,
              btnPlacheolder: "Enter English Text",
              transhead: " English To Igbo Translation",
              text:mtranslate.english.text,
              translation:response.data.data.translation,
              tl: "ig",
              sl: "en"}
             })
        }

    })
    .catch(function (error) {
      console.error(error);
      Alert.alert("Error", error.response.data, [
        {
          text: "Continue",
        },
      ]);
      setMTranslate({ ...mtranslate, loader: false });
    });
   
  };
  const igbBtn = () => {
    setMTranslate({ ...mtranslate, lang: 1 });
  };
  const engBtn = () => {
    setMTranslate({ ...mtranslate, lang: "2" });
  };

  return (
    <View>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            igbBtn();
          }}
          style={{
            borderWidth: 1,
            height: 30,
            width: "30%",
            borderRadius: 5,
            margin: 5,
            backgroundColor:
              mtranslate.lang == 1 ? mtranslate.selected.bgColor : "#fff",
            borderColor:
              mtranslate.lang == 1 ? null : mtranslate.selected.bgColor,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color:
                mtranslate.lang == 1
                  ? mtranslate.selected.color
                  : mtranslate.selected.bgColor,
            }}
          >
            Igbo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            engBtn();
          }}
          style={{
            borderWidth: 1,
            height: 30,
            width: "30%",
            borderRadius: 5,
            margin: 5,
            backgroundColor:
              mtranslate.lang == 2 ? mtranslate.selected.bgColor : "#fff",
            borderColor:
              mtranslate.lang == 2 ? null : mtranslate.selected.bgColor,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color:
                mtranslate.lang == 2
                  ? mtranslate.selected.color
                  : mtranslate.selected.bgColor,
            }}
          >
            English
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ textAlign: "center", marginTop: 20, marginBottom: 10 }}>
        {" "}
        {mtranslate.lang == 1
          ? mtranslate.igbo.transhead
          : mtranslate.english.transhead}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TextInput
          ref={clearText}
          style={{
            borderWidth: 1,
            height: 35,
            width: "80%",
            paddingLeft: 10,
            borderRadius: 5,
          }}
          placeholder={
            mtranslate.lang == 1
              ? mtranslate.igbo.btnPlacheolder
              : mtranslate.english.btnPlacheolder
          }
          onChangeText={(e) =>addInput(e)}
        />
        <TouchableOpacity
          onPress={() => checkInput()}
          style={{ justifyContent: "center", padding: 5 }}
        >
          <Icon name="search" size={15} color="#7400b8" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderWidth: 1,
          margin: 5,
          height: 100,
          borderRadius: 5,
          padding: 5,
        }}
      >
        <Text style={{ textAlign: "center" }}>
          {mtranslate.lang == 1
            ? mtranslate.igbo.translation
            : mtranslate.english.translation}
        </Text>
      </View>
      {mtranslate.loader && loader()}
    </View>
  );
}
