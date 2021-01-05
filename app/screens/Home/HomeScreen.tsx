import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Text>Home!</Text> */}
      <Button
        title="Go to Home One"
        onPress={() => navigation.navigate('HomeScreenOne')}
      />
      <Button
        title="Go to Home Two"
        onPress={() => navigation.navigate('HomeScreenTwo')}
      />
      <Button
        title="Go to Home Three"
        onPress={() => navigation.navigate('HomeScreenThree')}
      />
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}