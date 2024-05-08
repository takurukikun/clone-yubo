import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import { useSession } from '@/providers/auth';

export default function Home() {
  const { signOut } = useSession();
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center rounded-md px-4 py-2">
      <Text
        onPress={
          // () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
          () => signOut()
        }
        className="bg-blue-500 px-4 py-2"
      >
        Singout
      </Text>
    </View>
  );
}
