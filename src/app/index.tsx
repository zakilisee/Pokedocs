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
      <View>
        {pokemons.map((pokemon) =>(
          <View key={pokemon.name} className="px-1 py-3 w-full bg-slate-700 flex-1 items-center">
            <PokemonCard name={pokemon.name} url={pokemon.url}></PokemonCard>
          </View>
        ))}
      </View>
    </ScrollView>

    
    </>
  );
}
