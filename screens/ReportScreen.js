import * as React from "react";
import { useState } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import FillReportForm from "./FillReportForm/FillReportForm.js";

function ReportScreen() {
  const navigation = useNavigation();
  const [modalOpen, setModalOpen] = useState(false);
  const [report, setReport] = useState([
    {
      id: 1,
      title: "Report 1",
      description: "Description",
      location: "Location",
    },
    {
      id: 2,
      title: "Report 2",
      description: "Description",
      location: "Location",
    },
    {
      id: 3,
      title: "Report 3",
      description: "Description",
      location: "Location",
    },
  ]);

  const addReport = (report) => {
    report.id = Math.random().toString();
    setReport((currentReport) => {
      return [report, ...currentReport];
    });
    setModalOpen(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Modal visible={modalOpen}>
        <View style={{ marginTop: 30, marginLeft: 20 }}>
          <MaterialIcons
            name="close"
            size={30}
            onPress={() => setModalOpen(false)}
          ></MaterialIcons>
          <Text>Report Form</Text>
          <FillReportForm addReport={addReport} />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={34}
        onPress={() => setModalOpen(true)}
      ></MaterialIcons>
      <FlatList
        data={report}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text> {item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function ReportStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Report Home" component={ReportScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  GreetingText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  ChangeColor: {
    color: "red",
  },
});
