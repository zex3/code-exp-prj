import React, {useEffect} from 'react';
import { Text, Button, View, TouchableHighlight, Icon } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from "@expo/vector-icons";
import Input from "./components/Input";


function SignInScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Input label="ID Number">
        </Input>
        <Input label="Password" password='1'>
        </Input>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Sign Out"
        onPress={() => navigation.navigate('Sign In')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}



const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}