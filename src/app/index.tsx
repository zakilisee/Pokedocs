import { useEffect } from "react";
import { Text, View } from "react-native";


export default function Index() {
  let data;
  useEffect(()=>{
    fetchPokemon()
  },[])

  async function fetchPokemon() {
    try{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    data = await response.json();
    console.log(data);
    }catch(e){
      console.log(e);
    }

  }
  return (
    <View>
      <Text>Hello World!</Text>
      <Text> this is the data you wanted:{data}</Text>
    </View>
  );
}
