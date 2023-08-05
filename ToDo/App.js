import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, Button} from "react-native";
import Card from "./src/components/Card";
function App(){

  // const itemSeperator = <View style = {cardStyle.seperator}/>;

  // const [counter, increase] = useState(0);//number of the ToDo's

  // function Count(){
  //   increase(counter + 1); 
  // }

  return(
    <SafeAreaView style ={styles.container}>
      <Text style = {styles.header}>To-Do</Text>
        <Card/>
      {/* <Button title="counter" onPress={Count}/>
      <Text>{counter}</Text> */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    textAlign: 'center',
    color: '#2c698d',
    fontSize: 50,
    fontWeight: 'bold',
    padding:10,
  },
});

export default App;