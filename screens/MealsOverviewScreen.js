import {useLayoutEffect} from "react";
import {View, FlatList, StyleSheet} from "react-native";
import MealItem from "../components/MealItem";

import {CATEGORIES, MEALS} from "../data/dummy-data";

function MealsOverviewScreen({route, navigation}) {
    const categoryID = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryID) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryID).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [categoryID, navigation]);


    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        };

        function pressHandler() {
            navigation.navigate('Meal Details', {
                mealId: mealItemProps.id,
            });
        }

        return <MealItem title={mealItemProps.title} imageUrl={mealItemProps.imageUrl} duration={mealItemProps.duration} complexity={mealItemProps.complexity} affordability={mealItemProps.affordability} onPress={pressHandler} />;
    }


    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});