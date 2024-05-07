import { UserProps } from './user';

export interface AxiosApiError<T> {
  error: keyof T;
  message: string | string[];
  statusCode: number;
}

export interface AuthStoreProps {
  profile?: Omit<UserProps, 'id'>;
  setProfile: (profile: UserProps) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  session: string | null;
  setSession: (session: string | null) => void;
  signed?: boolean;
  setSigned: (signed: boolean) => void;
  logout: () => Promise<void>;
}
export interface TokenProps {
  exp: number;
  iat: number;
  sessionId: number;
}

export interface LoginReturnProps {
  idToken: string;
  refreshToken: string;
  user: UserProps;
}
