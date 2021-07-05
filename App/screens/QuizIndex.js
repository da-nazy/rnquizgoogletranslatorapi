import React from "react";
import { ScrollView, StatusBar } from "react-native";

import IgboToEnglish from "../data/IgboEnglish";
import EnglishIgbo from "../data/EnglishToIgbo";
import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="EnglishToIgbo"
      color="#22b100"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "EnglishIgbo",
          questions: EnglishIgbo,
          color: "#22b100",
        })
      }
    />
    <RowItem
      name="IgboEnglish"
      color="#9A1D93"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "IgboEnglish",
          questions: IgboToEnglish,
          color: "#99b1f0",
        })
      }
    />
    <RowItem
    name="Translate"
    color="#7400b8"
    onPress={()=>{
      navigation.navigate("Translate");
    }}/>
    
  </ScrollView>
);
