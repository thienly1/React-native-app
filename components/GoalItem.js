import { StyleSheet, View, Text, Pressable } from "react-native";


function GoalItem(props) {
    return (        
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#210644'}} 
                       onPress={props.onDeleteItem.bind(this, props.id)}
                       style={({pressed}) =>pressed && styles.pressedItem}> 
            <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
        
    );
};
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: { //we style and add a View because Text just for text, so when we style it. some style fields doesn't work
        margin: 8,        
        borderRadius: 6,
        backgroundColor:'#5e0acc',
          },
    goalText: { //we have to separate style for goalText here bc we add color to the goalItem and it doesnt work (View or Text)
        color: 'white',
        padding:8,
    },
    pressedItem: {
        opacity: 0.5,
    }
})