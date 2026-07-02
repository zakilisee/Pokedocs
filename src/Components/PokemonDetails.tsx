import { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'

interface PokemonDetailsProps{
    api : string,
    
}

interface PokemonStateProps{
    base_experience : number,
    sprites : {
        front_default : string,
        back_default : string,
    },
    types : [
        {type : {name : string},}
    ]
}

function PokemonDetails({api} : PokemonDetailsProps) {
  
    const [pokemonDetails, setPokemonDetails] = useState<PokemonStateProps>({
        'base_experience' : 0,
        'sprites' : {
            'front_default' : '',
            'back_default' : '',
        },
        'types' : [
            {type : {'name' : 'grass',},}
        ],
        
    });
    useEffect(() =>{
        fetchPokemonDetails()
    },[])

    async function fetchPokemonDetails(){
        
        try{
            const result = await fetch(api);
            const data:PokemonStateProps = await result.json();
            setPokemonDetails(data);
            
        }catch(e){
            console.log(e);
        }
        
    }

    return (
      <>
        <View className='flex-1 flex-row'>
            <Image source={{uri : pokemonDetails.sprites.front_default}} className='w-40 h-40'/>
            <Image source={{uri : pokemonDetails.sprites.back_default}} className='w-40 h-40'/>
        </View>

        {/*<Text>level :{pokemonDetails.base_experience}</Text>*/}
      </>
    )
  
}

export default PokemonDetails