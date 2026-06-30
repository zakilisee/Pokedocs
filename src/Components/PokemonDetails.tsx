import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

interface PokemonDetailsProps{
    api : string;
    
}

interface PokemonStateProps{
    base_experience : number;
}

function PokemonDetails({api} : PokemonDetailsProps) {
  
    const [pokemonDetails, setPokemonDetails] = useState<PokemonStateProps>({'base_experience' : 0});
    useEffect(() =>{
        fetchPokemonDetails()
    },[])

    async function fetchPokemonDetails(){
        
        try{
            const result = await fetch(api);
            const data = await result.json();
            setPokemonDetails(data);
            console.log(`those are the : ${data}`);
        }catch(e){
            console.log(e);
        }
        
    }
    
    return (
      <View>
        <Text>{pokemonDetails.base_experience}</Text>
      </View>
    )
  
}

export default PokemonDetails