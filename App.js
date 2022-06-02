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
