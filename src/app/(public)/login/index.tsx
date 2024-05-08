import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

import { Button } from '@/components/Button';
import { useSession } from '@/providers/auth';

export default function SignIn() {
  const { signIn } = useSession();
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-end px-4 py-12">
      <Button
        variant="destructive"
        onPress={() =>
          // setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
          signIn()
        }
        label="Continuar com o Google"
        className="flex w-full flex-row  rounded-full bg-black/55 py-4"
        labelClasses="text-white text-center font-bold text-lg"
        icon={
          <AntDesign name="google" size={24} color="white" className="mr-2" />
        }
      />
      <Text
        onPress={() =>
          // setColorScheme(colorScheme === 'dark' ? 'light' : 'dark')
          signIn()
        }
        className="mb-2 mt-6 text-sm font-bold"
      >
        Já é membro?
      </Text>
      <Button
        variant="destructive"
        onPress={() => router.push('/register')}
        label="Entrar"
        className="w-full rounded-full bg-black py-4"
        labelClasses="text-white text-center font-bold text-lg"
      />
    </View>
  );
}
