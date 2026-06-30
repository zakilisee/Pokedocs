import { Linking, Pressable, Text, TextProps, View } from 'react-native'
import PokemonDetails from './PokemonDetails';
interface PokemonCardProps{
    name: string;
    url : string;
}


const WhiteText = ({ className, children} : TextProps) =>(
    <Text className={`text-white ${className}`}>{children}</Text>
);


function PokemonCard({name, url} : PokemonCardProps) {
  
    return (
      <View className="flex-1 items-center justify-center bg-lime-900 rounded-3xl text-white w-full" >
        <PokemonDetails api={url}></PokemonDetails>
        <Text>{name}</Text>
        <Pressable onPress={async() => {await Linking.openURL(url);}}>
            <WhiteText className='cursor-pointer'>click for Link</WhiteText> 
        </Pressable>
      </View>
    )
  
}
export default PokemonCard;