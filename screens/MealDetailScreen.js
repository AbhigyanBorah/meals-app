import {useContext, useLayoutEffect} from "react";
import {ScrollView, View, Text, Image, StyleSheet} from "react-native";
import {useSelector, useDispatch} from "react-redux";

import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import {addFavorite, removeFavorite} from '../store/redux/favorites';
// import {FavoritesContext} from "../store/context/favorites-context";

function MealDetailScreen({route, navigation}) {
    // const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealID = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealID);

    // const isMealFavorite = favoriteMealsContext.ids.includes(mealID);
    const isMealFavorite = favoriteMealIds.includes(mealID);

    function changeFavoriteStatusHandler() {
        if (isMealFavorite) {
            // favoriteMealsContext.removeFavorite(mealID);
            dispatch(removeFavorite({id: mealID}));
        } else {
            // favoriteMealsContext.addFavorite(mealID);
            dispatch(addFavorite({id: mealID}));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Meal Details',
            headerRight: () => {
                return <IconButton onPress={changeFavoriteStatusHandler} icon={isMealFavorite ? 'star' : 'star-outline'} color="white" ></IconButton>;
            }
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Ingredients</Text>
            </View>
            <List data={selectedMeal.ingredients} />
            <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Steps</Text>
            </View>
            <List data={selectedMeal.steps} />
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 36,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    subTitleContainer: {
        borderBottomColor: '#c39070',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 114,
        marginVertical: 4,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

