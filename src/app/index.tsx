import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import PokemonCard from "@/Components/PokemonCard";

interface Pokemon{
  name : string;
  url :string;
}
export default function Index() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  
  useEffect(()=>{
    fetchPokemon()
  },[])

  async function fetchPokemon() {
    try{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const data = await response.json();
    setPokemons(data.results);
    }catch(e){
      console.log(e);
    }

  }
  return (
    <>
    <ScrollView>
      <View className="flex-1 flex-row flex-wrap bg-slate-700">
        {pokemons.map((pokemon) =>(
          <View key={pokemon.name} className="m-4 w-full">
            <PokemonCard name={pokemon.name} url={pokemon.url}></PokemonCard>
          </View>
        ))}
      </View>
    </ScrollView>

    
    </>
  );
}
