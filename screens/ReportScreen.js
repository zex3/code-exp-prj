import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import CameraScreen from "../screens/CameraScreen";

function ReportScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => navigation.navigate("Report Form")}
        title="Report"
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function ReportStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Report Home" component={ReportScreen} />
      <Stack.Screen name="Report Form" component={CameraScreen} />
    </Stack.Navigator>
  );
}
