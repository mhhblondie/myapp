
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import GroupManagementScreen from './src/screens/GroupManagementScreen';

export type RootStackParamList = {
  Home: undefined;
  Chat: { groupName?: string};
  GroupManagement: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
 <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="GroupManagement" component={GroupManagementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
