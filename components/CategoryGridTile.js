import {Pressable, View, Text, StyleSheet, Platform} from "react-native";

function CategoryGridTile({title, color, onPress}) {

    return (
        <View style={[styles.gridItem, {borderColor: color}]}>
            <Pressable android_ripple={{color: '#fbb37c'}} style={({pressed}) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
            ]}
                onPress={onPress}>
                <View style={[styles.innerContainer, {borderColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 10,
        elevation: 6,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.15,
        shadowRadius: '8',
        borderWidth: 3,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: '8',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});