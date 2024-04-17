import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, FlatList } from 'react-native';

interface TaskListProps {
  id: number;
  name: string;
  description: string;
}
export default function Task() {
  const [listTask, setListTask] = useState<TaskListProps[]>([])
  const Navigation = useNavigation()

  const handleTask = async () => {
    const data = await AsyncStorage.getItem('@Gestor:tarefa')
    const listTasks = data ? JSON.parse(data): []
    console.log(listTasks)
    setListTask(listTasks)
  }

  const handleRemoveTask = (id: Number) => {
  }

  useFocusEffect(useCallback(()=>{
    handleTask()
  },[]))
  
  return (
      <View  style={styles.container}>
        <View style={styles.titleGroup}>
          <Text style={styles.title}>Lista de Tarefas</Text>
          <TouchableOpacity 
            style={styles.btnAdd}
            activeOpacity={0.6}
            onPress={() => Navigation.navigate('Task')}
          >
            <Text style={styles.btnName}>+</Text>
          </TouchableOpacity>
        </View>

        <FlatList
        style={styles.list}
        data={listTask}
        renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.btnDeleteItem}
              activeOpacity={0.6}
              onPress={() => Navigation.navigate('Details', {taskName: item.name, taskDescription: item.description})}
            >
              <Text style={styles.nameItem}> {item.name} </Text>
            </TouchableOpacity>

        )} />

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
  },
  titleGroup: {
    width: '100%',
    height: '8%',
    padding: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    alignItems: 'center',
    marginTop: '15%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  btnAdd:{
    width: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',

  },
  btnName:{
    color: '#fff',
    fontSize: 30,
  },
  list :{
    width: '100%',
    padding: 15,
    marginBottom: 5,
  },
  nameItem: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  btnDeleteItem: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#cecbcb',
    marginTop: 10,
  },
});
