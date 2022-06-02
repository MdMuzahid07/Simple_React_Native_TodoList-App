import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionText}>Today's tasks</Text>
        <View style={styles.items}>
          <Task text={'task 1'} />
          <Task text={'task 2'} />
        </View>
      </View>



      {/* write tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'}></TextInput>
        <TouchableOpacity>
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

  },
  writeTaskWrapper: {
 
  },
  input: {

  },
  addWrapper: {

  },
  addText: {

  }
});
