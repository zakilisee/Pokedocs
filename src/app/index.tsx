import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import PokemonCard from "@/Components/PokemonCard";
import { Link } from "expo-router";

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
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    const data = await response.json();
    setPokemons(data.results);
    }catch(e){
      console.log(e);
    }

  }
  return (
    <>
    <ScrollView>
      <View className="w-full">
        {pokemons.map((pokemon) =>(
          <Link key={pokemon.name} className="px-1 py-3 w-full bg-slate-700" href={{pathname : "/DetailsScreen", params: {url : pokemon.url}}} >
          <View className="w-full flex-1 items-center py-2">
            <PokemonCard name={pokemon.name} url={pokemon.url}></PokemonCard>
          </View>
          </Link>
        ))}
      </View>
    </ScrollView>

    
    </>
  );
}
