import {View, FlatList, StyleSheet} from "react-native";
import MealItem from "./MealItem";

import {useNavigation} from "@react-navigation/native";

function MealsList({items}) {
    const navigation = useNavigation();

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
            <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    );
}

export default MealsList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});