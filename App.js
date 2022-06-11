import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Map from "./screens/Map";
import Report from "./screens/Report";
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
            } else if (route.name == "Map") {
              iconName = focused ? "map" : "map-o";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Report" component={Report} />
        <Tab.Screen name="Map" component={Map} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
