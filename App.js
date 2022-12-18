import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  
  const [courseGoals, setCourseGoals] =useState([]);
  const [modalIsVisable, setModalIsVisable] = useState(false);

function startAddGoalHandler () {
  setModalIsVisable(true);

}

  function addGoalHandler(enteredGoalText){
    //setCourseGoals([...courseGoals, enteredGoalText]);
    setCourseGoals(currentCourseGoals => [...courseGoals,
       {text: enteredGoalText, id:Math.random().toString()}]);
       //enteredGoalText]  if we create the key in ScrollView, and add this like string not as object as above
       setModalIsVisable(false); // or: endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((goal) =>goal.id !==id)
    })
  }

  function endAddGoalHandler () {
    setModalIsVisable(false);
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
      <Button 
         title="Add New Goal" 
         color='#5e0acc'
         onPress={startAddGoalHandler} />
      {modalIsVisable &&<GoalInput 
                            visable={modalIsVisable} 
                            onAddGoal={addGoalHandler}
                            onCancel={endAddGoalHandler}/>}
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={itemData =>{
        //import from GoalItem component
        return <GoalItem text={itemData.item.text} 
                         id={itemData.item.id}
                         onDeleteItem={deleteGoalHandler}/> 
        // if we directly execute the list here, dont import from other component
        // return(
        //   <View style={styles.goalItem}>
        //     <Text style={styles.goalText}>{itemData.item.text}</Text>
        // </View>
        // )
      }} keyExtractor={(item, index)=>{
        return item.id;
      }} alwaysBounceVertical={false}/> 
      {/*FlatList will scroll the screen and execute data when needed*/}
      {/* <ScrollView alwaysBounceVertical={false}>
        {courseGoals.map((goal)=>(
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text> 
          </View>
        ))}
      </ScrollView>    ScrollView will Scroll the screen and all the data is executed  */} 
      
      </View>      
    </View>
  </>  
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a',
  },
 
  goalsContainer: {
    flex: 4
  },

});
