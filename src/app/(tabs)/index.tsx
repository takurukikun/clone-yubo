import { useColorScheme } from "nativewind";
import { Button, Text, View } from "react-native";

export default function TabOneScreen() {
  const { colorScheme, setColorScheme } = useColorScheme();
  return (
    <View className="flex p-2">
      <Text className="dark:text-white light:text-black">Tab One</Text>
      <Text className="dark:text-white light:text-black">
        Tab On1111111111111111e
      </Text>
      <Text
        className="dark:text-white light:text-black"
        onPress={() =>
          setColorScheme(colorScheme === "light" ? "dark" : "light")
        }
      >
        {`The color scheme is ${colorScheme}`}
      </Text>
      <Button
        title="Toggle color scheme"
        onPress={() =>
          setColorScheme(colorScheme === "light" ? "dark" : "light")
        }
      />
    </View>
  );
}
