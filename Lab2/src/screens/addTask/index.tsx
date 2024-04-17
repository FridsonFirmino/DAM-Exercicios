import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';


export default function Task() {
  const [task, setTask] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const Navigation = useNavigation()

  const newTask= {
    id: Math.floor(Math.random() * 10000000),
    name: task,
    description: taskDescription
  }

    const handleTask = async () => {
      const data = await AsyncStorage.getItem('@Gestor:tarefa')
      const previos = data ? JSON.parse(data): []

      const newData = [...previos, newTask]
      await AsyncStorage.setItem('@Gestor:tarefa',JSON.stringify(newData))
      setTask('')
      setTaskDescription('')
      alert('Success')
    }

  return (
      <View  style={styles.container}>

        <View style={styles.inputGroup}>
          <TextInput 
            style={styles.inputTask}
            placeholder='Nome da tarefa...'
            placeholderTextColor={'#eeeeee'}
            onChangeText={(e)=>{setTask(e)}}
            value={task}
          />

          <TextInput 
            style={styles.inputDescription}
            placeholder='Descrição da tarefa...'
            placeholderTextColor={'#eeeeee'}
            textAlignVertical='top'
            numberOfLines={10}
            multiline
            maxLength={40}
            onChangeText={(e)=>{setTaskDescription(e)}}
            value={taskDescription}
          />
        </View>

        <TouchableOpacity 
            style={styles.btnAdd}
            activeOpacity={0.6}
            onPress={handleTask}
            disabled={task.length === 0 }
          >
            <Text style={styles.btnName}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.btnAdd}
            activeOpacity={0.6}
            onPress={()=>{Navigation.goBack()}}
          >
            <Text style={styles.btnName}>Cancelar</Text>
        </TouchableOpacity>
        
        <StatusBar style="light" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: '1%',
  },
  inputGroup: {
    width: '100%',
    height: 280,
    alignItems: 'center',
    gap: 15,
    margin: 20,
  },
  inputTask: {
    width: '70%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eeeeee',
    color:'#eeeeee'
  },
  inputDescription: {
    width: '70%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eeeeee',
    color:'#eeeeee'
  },
  btnAdd:{
    width: '70%',
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#020202',
    marginBottom: 10
  },
  btnName:{
    color: '#fff',
    fontSize: 13,
  }
});
