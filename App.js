import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#fadecf'}
        }}>
          <Stack.Screen name="Meals Categories" component={CategoriesScreen} options={{
            title: 'All categories',
          }} />
          <Stack.Screen name='Meals Overview' component={MealsOverviewScreen} options={{
            title: 'Meals Overview',
          }} />
          <Stack.Screen name='Meal Details' component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
