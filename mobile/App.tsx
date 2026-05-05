import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import DashboardScreen from './src/screens/DashboardScreen';
import LinkedAccountsScreen from './src/screens/LinkedAccountsScreen';
import TransactionsScreen from './src/screens/TransactionsScreen';
import InsightsScreen from './src/screens/InsightsScreen';
import LinkBankScreen from './src/screens/LinkBankScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#1a1a1a', borderTopColor: '#2a2a2a', paddingBottom: 5, height: 60 },
          tabBarActiveTintColor: '#00d4aa',
          tabBarInactiveTintColor: '#555555',
          tabBarShowLabel: true,
        }}
      >
        <Tab.Screen name="Inicio" component={DashboardScreen} options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text> }} />
        <Tab.Screen name="Cuentas" component={LinkedAccountsScreen} options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>💳</Text> }} />
        <Tab.Screen name="Movimientos" component={TransactionsScreen} options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>📋</Text> }} />
        <Tab.Screen name="Insights" component={InsightsScreen} options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>📊</Text> }} />
        <Tab.Screen name="Vincular" component={LinkBankScreen} options={{ tabBarIcon: () => <Text style={{ fontSize: 20 }}>➕</Text> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
