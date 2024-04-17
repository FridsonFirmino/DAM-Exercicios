import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface TaskListProps {
  id: number;
  name: string;
  description: string;
}
export default function Details() {
  const { params } = useRoute<any>()
  console.log(params)
  return (
      <View  style={styles.container}>
        <Text style={styles.title}>{params?.taskName}</Text>

        <View style={styles.inputGroup}>
          <TextInput 
            style={styles.inputDescription}
            placeholder='Descrição da tarefa...'
            textAlignVertical='top'
            multiline
            numberOfLines={10}
            maxLength={40}
            value={params?.taskDescription}
          />
        </View>
       
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
  title: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  inputGroup: {
    width: '100%',
    height: '75%',
    alignItems: 'center',
    gap: 15,
    margin: 20,
  },
  inputDescription: {
    width: '70%',
    height: '30%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000000',
    color:'#eeeeee'
  },
  btnAdd:{
    width: '80%',
    height: '6%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#020202',
    marginBottom: 10
  },
});
