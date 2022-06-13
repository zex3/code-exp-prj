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
      title: "testTitle",
      description: "testDescriptpion",
      location: "testLocation",
    },
    {
      id: 2,
      title: "testTitle2",
      description: "testDescriptpion2",
      location: "testLocation2",
    },
    {
      id: 3,
      title: "testTitle3",
      description: "testDescriptpion3",
      location: "testLocation3",
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
      <Button
        onPress={() => navigation.navigate("Report Form")}
        title="Report"
      />

      <Modal visible={modalOpen}>
        <View>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
          ></MaterialIcons>
          <Text>Modal Open</Text>
          <FillReportForm addReport={addReport} />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
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

function ReportSecondScreen() {
  return (
    <View style={styles.GreetingText}>
      <Text style={styles.ChangeColor}>Report Form!</Text>
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
