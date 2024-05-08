import { router } from 'expo-router';
import { Text, View } from 'react-native';

import { Button } from '@/components/Button';
import DatePicker from '@/components/DatePicker';

export default function SignIn() {
  return (
    <View className="flex-1 bg-black px-4 py-12 ">
      <Button
        label="Voltar"
        onPress={() => router.back()}
        className="mb-2 mt-6 text-sm font-bold "
        labelClasses="text-white text-center font-bold text-lg"
      />
      <Text className="mb-2 mt-6 text-[2.5rem] font-[900] text-yellow-300">
        Qual é a sua data de nascimento?
      </Text>

      <DatePicker
        className="w-full"
        value={new Date()}
        label="Inisira a data"
        labelClasses="text-white text-center font-bold text-lg"
      />
    </View>
  );
}
