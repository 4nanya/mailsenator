import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TextInput, View , TouchableOpacity, Button,Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useState ,useEffect} from 'react';
import * as Location from 'expo-location';


function Topicsc({navigation}){

  return(
    
    <View style={styles.container}>
      {persons.map((person) => {
          return(
              
            <TouchableOpacity key={person.id} onPress={() => navigation.navigate('Choose your State')} >
            <Text  style={styles.buttonstext}>{person.name}</Text>
            
            <View style={styles.space} />
            </TouchableOpacity>
            
          
        );
        
      })}

      </View>
      
    );
}
function Statesc({navigation}){
  const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    'Wait, we are fetching you location...'
  );
  useEffect(() => {
    CheckIfLocationEnabled();
  }, []);

  const CheckIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();

    if (!enabled) {
      Alert.alert(
        'Location Service not enabled',
        'Please enable your location services to continue',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServiceEnabled(enabled);
    }
  };
  useEffect(() => {
    CheckIfLocationEnabled();
    GetCurrentLocation();
  }, []);
  
  // create the handler method
  
  const GetCurrentLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
  
    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Allow the app to use location service.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }
  
    let { coords } = await Location.getCurrentPositionAsync();
  
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });
  
      for (let item of response) {
        let address = `${item.postalCode}`;
  
        setDisplayCurrentAddress(address);
      }
    }
  };
  return(


    <View style={styles.container}>
      <Text>Your Zip Code: {displayCurrentAddress}</Text>

      {/* {senators.map((senator) => {
        current= '{senator.id}';
      if (current==displayCurrentAddress){
        
      }
      
      
      })}; */}
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
        <Stack.Screen name="Choose your State" component={Statesc}/>
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
const senators = [
  { id: "94539",
	name: "Ro Khanna",},
  { id: "77449",
	name: "Lizzie Fletcher",},
];
export default App;