import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/home/index'
import Task from './src/screens/addTask/index'
import Details from './src/screens/ListTask';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{headerShown:false}}
      />
      <Stack.Screen 
        name="Task" 
        component={Task} 
        options={{
          title: 'Nova Tarefa',
          headerTintColor: '#ffffff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            margin: 15
          },
          headerStyle: {backgroundColor: '#000000'}
        }}
      />
      <Stack.Screen 
        name="Details" 
        component={Details} 
        options={{
          title: 'Detalhes da Tarefa',
          headerTintColor: '#ffffff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            margin: 15
          },
          headerStyle: {backgroundColor: '#000000',}
        }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
