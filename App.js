import * as React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ReportStack from "./screens/ReportScreen";
import CameraApp from "./screens/CameraScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            //Set the icon based on which route it is (name of the tab)
            if (route.name === "Home") {
              iconName = focused ? "user" : "user-o";
            } else if (route.name === "Report") {
              iconName = focused ? "flag" : "flag-o";
            } else if (route.name == "Camera") {
              iconName = "camera";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Report"
          options={{ headerShown: false }}
          component={ReportStack}
        />
        <Tab.Screen name="Camera" component={CameraApp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
