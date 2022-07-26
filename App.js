import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import {Provider} from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import {store} from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: '#fadecf'},
      drawerStyle: {width: 220},
      drawerContentStyle: {backgroundColor: '#5e4638'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#fadecf'
    }}>
      <Drawer.Screen name="categories" component={CategoriesScreen} options={{
        title: "All Categories",
        drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size} />
      }} />
      <Drawer.Screen name="favorites" component={FavoriteScreen} options={{
        title: "Favorite Meals",
        drawerIcon: ({color, size}) => <Ionicons name="star-outline" color={color} size={size} />
      }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/*  <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#fadecf'}
          }}>
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{
              headerShown: false,
            }} />
            <Stack.Screen name='Meals Overview' component={MealsOverviewScreen} options={{
              title: 'Meals Overview',
            }} />
            <Stack.Screen name='Meal Details' component={MealDetailScreen} options={{
              title: 'About The Meal',
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({

});
