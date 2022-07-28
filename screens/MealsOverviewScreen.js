import {useLayoutEffect} from "react";

import MealsList from "../components/MealList/MealsList";
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

    return <MealsList items={displayedMeals} />;

}

export default MealsOverviewScreen;
