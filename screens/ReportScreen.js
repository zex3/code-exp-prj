import * as React from "react";
import { useState } from 'react';
import { Text, View, Button, StyleSheet, Modal, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';

import FillReportForm from "./FillReportForm/FillReportForm.js";

function ReportScreen() {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false)
  const [report, setReport] = useState([])

  const addReport = (report) =>{
      report.id = Math.random().toString();
      setReport((currentReport)=>{
        return [report, ...currentReport]
      })
      setModalOpen(false)
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <Modal visible={modalOpen}>
        <View>
          <MaterialIcons name="close" size={24} onPress={()=>setModalOpen(false)}></MaterialIcons>
          <FillReportForm addReport={addReport}/>
        </View>
      </Modal>

      <Button title="Add Reports" style={styles.Button} onPress={() => setModalOpen(true)}></Button>
      <FlatList 
        data={report}
        renderItem={({item})=>(
          <TouchableOpacity>
              <View style={[box_styles.card, box_styles.shadowProp]}>
                <View>
                  <Text style={box_styles.heading}>
                    {item.title}
                  </Text>
                </View>
              <Text>
                    {item.description}
              </Text>
              </View>
          </TouchableOpacity>
        )}
        />


    </View>
    

  );
}

function ReportSecondScreen() {
  return (
    <View
      style={styles.GreetingText}
    >
      <Text style = {styles.ChangeColor}>Report Form!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function ReportStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Report Home" component={ReportScreen} />
      <Stack.Screen name="Report Form" component={ReportSecondScreen} />
    </Stack.Navigator>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  GreetingText : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  ChangeColor : {
    color: "red"
},
  Button :{
    color: "#00008B"
  },
  Title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    borderWidth: 1,
    margin:20,
    borderRadius: 3,
    width: windowWidth/100*80,
    textAlign:"center",
    
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  }
})

const box_styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});