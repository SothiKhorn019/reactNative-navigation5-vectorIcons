import React from "react";
import { View, Text, Button } from "react-native";

 export default function SettingScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting</Text>
        <Button
          title="Go to Setting detail"
          onPress={() => navigation.navigate('')}
        />
      </View>
    );
  }