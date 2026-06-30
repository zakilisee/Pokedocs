import { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'

interface PokemonDetailsProps{
    api : string,
    
}

interface PokemonStateProps{
    base_experience : number,
    sprites : {
        front_default : string,
    },
    
}

function PokemonDetails({api} : PokemonDetailsProps) {
  
    const [pokemonDetails, setPokemonDetails] = useState<PokemonStateProps>({
        'base_experience' : 0,
        'sprites' : {
            'front_default' : ''
        },
        
    });
    useEffect(() =>{
        fetchPokemonDetails()
    },[])

    async function fetchPokemonDetails(){
        
        try{
            const result = await fetch(api);
            const data:PokemonStateProps = await result.json();
            setPokemonDetails(data);
            console.log(`those are the : ${data}`);
        }catch(e){
            console.log(e);
        }
        
    }

    return (
      <View>
        
        <Image source={{uri : pokemonDetails.sprites.front_default}} className='w-32 h-32'/>
        <Text>level :{pokemonDetails.base_experience}</Text>
      </View>
    )
  
}

export default PokemonDetails