import {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import MealsList from '../components/MealList/MealsList';
import {MEALS} from '../data/dummy-data';
import {FavoritesContext} from '../store/context/favorites-context';

function FavoriteScreen() {
    const favoriteMealsContext = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals :(</Text>
            </View>
        );
    }

    return (
        <MealsList items={favoriteMeals} />
    );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#351401',
    }
});