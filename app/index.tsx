import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-col items-center justify-center bg-gray-100 w-full"
    >
      <Text className="flex-1 items-center justify-center text-2xl text-blue-500">Worth It</Text>
      <View
        className="border-2 border-gray-200 rounded-lg p-4 w-full"
      > 
        <Text
          className="text-xl font-semibold"
        >
          Price
        </Text>
        <Text
          className="text-lg"
        >
          $1.00
        </Text>
      </View> 
    </View>
  );
}
