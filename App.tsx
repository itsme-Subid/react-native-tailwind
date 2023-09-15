import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-white text-4xl">Hello</Text>
      <StatusBar style="inverted" />
    </View>
  );
};

export default App;
