import {View, Pressable, Text, Image, StyleSheet} from "react-native";

import MealDetails from "./MealDetails";

function MealItem({title, imageUrl, duration, complexity, affordability, onPress}) {

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#cccccc'}} onPress={onPress}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
});