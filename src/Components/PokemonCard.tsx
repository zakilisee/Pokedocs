import { Linking, Pressable, Text, TextProps, View } from 'react-native'

interface PokemonCardProps{
    name: string;
    url : string;
}


const WhiteText = ({ className, children} : TextProps) =>(
    <Text className={`text-white ${className}`}>{children}</Text>
);


function PokemonCard({name, url} : PokemonCardProps) {
  
    return (
      <View className="flex-1 items-center justify-center bg-slate-700 rounded-xl text-white" >
        <Text>{name}</Text>
        <Pressable onPress={async() => {await Linking.openURL(url);}}>
            <WhiteText className='cursor-pointer'>click for Link</WhiteText> 
        </Pressable>
      </View>
    )
  
}
export default PokemonCard;