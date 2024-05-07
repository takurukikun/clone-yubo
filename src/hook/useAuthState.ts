import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { AuthStoreProps } from '@/types/auth';

export const useAuthState = create<AuthStoreProps>()(
  persist(
    (set, get) => ({
      loading: false,
      session: null,
      setProfile: (profile) => {
        set(() => ({ profile }));
      },
      setSigned: (signed) => {
        set(() => ({ signed }));
      },
      setSession: (session) => {
        set(() => ({ session }));
      },
      setLoading: (loading) => {
        set(() => ({ loading }));
      },
      logout: async () => {
        set(() => ({
          session: null,
          signed: false,
        }));
        window.location.reload();
      },
    }),
    {
      name: 'auth-state',

      storage: createJSONStorage(() => ({
        getItem: getItemAsync,
        setItem: setItemAsync,
        removeItem: deleteItemAsync,
      })),
    },
  ),
);
