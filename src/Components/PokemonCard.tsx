import { Linking, Pressable, Text, TextProps, View } from 'react-native'
import PokemonDetails from './PokemonDetails';
import { useEffect, useState } from 'react';
interface PokemonCardProps{
    name: string;
    url : string;
}

const colorsByType = {
    'normal': "#A8A77A",
    'fire': "#F97316",
    'water': "#3B82F6",
    'electric': "#FACC15",
    'grass': "#22C55E",
    'ice': "#67E8F9",
    'fighting': "#DC2626",
    'poison': "#A855F7",
    'ground': "#C0843D",
    'flying': "#7C9CF5",
    'psychic': "#EC4899",
    'bug': "#84CC16",
    'rock': "#A16207",
    'ghost': "#6D5BD0",
    'dragon': "#4F46E5",
    'dark': "#374151",
    'steel': "#94A3B8",
    'fairy': "#F9A8D4",
}
const WhiteText = ({ className, children} : TextProps) =>(
    <Text className={`text-white ${className}`}>{children}</Text>
);


function PokemonCard({name, url} : PokemonCardProps) {

    const [color, setColor] = useState({})
    useEffect(()=>{

    },[])
  
    async function fetchTypes() {
        try{
        const result = await fetch(url);
        const data = await result.json(); 
        setColor(data);
        }catch(e){
            console.log(e);
        }
    }
    return (
      <View 
      className="flex-1 items-center justify-center rounded-3x w-5/6 h-full" 
      style = {{backgroundColor : colorsByType}}
      >
        <PokemonDetails api={url}></PokemonDetails>
        <Text>{name}</Text>
        
        {/*<Pressable onPress={async() => {await Linking.openURL(url);}}>
            <WhiteText className='cursor-pointer'>click for Link</WhiteText> 
        </Pressable>*/}
      </View>
    )
  
}
export default PokemonCard;