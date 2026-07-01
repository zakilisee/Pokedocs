import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const DetailsScreen = () => {
  const params = useLocalSearchParams();

  console.log(params);
  return (
    <View>
      <Text>details</Text>
    </View>
  )
}

export default DetailsScreen