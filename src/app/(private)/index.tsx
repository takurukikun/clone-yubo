import { Text, View } from 'react-native';

import { useSession } from '@/providers/auth';

export default function Index() {
  const { signOut } = useSession();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
        style={{
          color: '#f00',
        }}
      >
        Sign Out
      </Text>
    </View>
  );
}
