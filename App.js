import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View , TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useState } from 'react';

function Topicsc({navigation}){

  return(
    
    <View style={styles.container}>
      {persons.map((person) => {
          return(
              
            <TouchableOpacity key='{person.ID}' onPress={() => navigation.navigate('Compose your letter')} >
            <Text  style={styles.buttonstext}>{person.name}</Text>
            
            <View style={styles.space} />
            </TouchableOpacity>
            
          
        );
        
      })}

      </View>
      
    );
}
function Detailssc({navigation}){
  const [text, setText] = useState('');

  return(
  <View style={styles.container}>
      <TextInput
        style={styles.textbox}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <TouchableOpacity onPress={() => {
            console.log(text);
          }} >
        <Text style={styles.buttonstext}>poop</Text>
      </TouchableOpacity>
    </View>
   
  );
}

const Stack = createNativeStackNavigator();

function App() {
//  text ="akhil aggrawal";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='What do you want to write about?'>
        <Stack.Screen name="What do you want to write about?" component={Topicsc}/>
        <Stack.Screen name="Compose your letter" component={Detailssc}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox:{
    height: 100,
    fontSize:20,
  },
  buttonstext: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",

    color: "black",
    textAlign:"center",
    fontSize: 20,
    width:350,
    backgroundColor: "powderblue",
    paddingVertical:5
    
    
  },
  space: {
    //width: 10, // or whatever size you need
    height: 15,
    //color: "white",
  },
});
const persons = [
  {id: "1",
	name: "healthcare", },
  { id: "2",
	name: "gun reform", },
  { id: "3",
	name: "racial discrimination",},
  {id: "4",
	name: "climate change", },
  { id: "5",
	name: "housing", },
  { id: "6",
	name: "public transportation",},
  {id: "7",
	name: "education", },
  {id: "8",
	name: "immigration", },
  { id: "9",
	name: "reproductive rights", },
  { id: "10",
	name: "labor",},
  {id: "11",
	name: "military", },
  { id: "12",
	name: "lgbtq+ rights",},
  {id: "13",
	name: "energy", },
  {id: "14",
	name: "homelessness", },
];
export default App;