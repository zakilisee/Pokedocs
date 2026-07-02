import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native'


interface detailsState{
  base_experience : number,
}
const DetailsScreen = () => {
  const params = useLocalSearchParams() as {
  url: string;
  };

  const url = params.url;

  useEffect(() =>{
    fetchPokemonDetails();
  },[])

  const [details, setDetails] = useState<detailsState>({
    base_experience : 0,
  })

  async function fetchPokemonDetails(){
    try{
      const result = await fetch(url);
      const data = await result.json();
      setDetails(data);

    }catch(e){
      console.log(e)
    }
  }

  console.log(params);
  return (
    <View>
      <Text>{details.base_experience}</Text>
    </View>
  )
}

export default DetailsScreen