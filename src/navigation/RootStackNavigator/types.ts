import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRoutes} from './routes';

export type RootStackParamList = {
  [RootRoutes.Camera]: undefined;
  [RootRoutes.VideoRedact]: undefined;
  [RootRoutes.Galerey]: undefined;
};

export type RootScreenProps<T extends RootRoutes> = NativeStackScreenProps<
  RootStackParamList,
  T
>;
