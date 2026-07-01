import { Stack } from "expo-router";
import "../../global.css"
export default function RootLayout() {
  return (
  <Stack >
    <Stack.Screen name="index"  options={{
      title : "PokeDocs",
      headerStyle : {backgroundColor : '#334155'},
      }}/>
  </Stack>);
}
