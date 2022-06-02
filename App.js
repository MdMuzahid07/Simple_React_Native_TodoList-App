import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, TextInput, ScrollView, View } from 'react-native';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState()
  const [taskTexts, setTaskTexts] = useState([]);

  const handleAddTask = () => {
    setTaskTexts([...taskTexts, task]);
    setTask(null);
  }


  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionText}>Today's tasks</Text>
        <ScrollView style={styles.items}>
          {
            taskTexts?.map((task, index) => {
              return <Task key={index} task={task} />
            })
          }
        </ScrollView>
      </View>



      {/* write tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={(text) => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  taskWrapper: {
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  input: {
    padding: 15,
    minWidth: 250,
    paddingHorizontal: 50,
    backgroundColor: 'white',
    paddingHorizontal: 50,
    borderRadius: 50
  },
  addWrapper: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  addText: {

  }
});
