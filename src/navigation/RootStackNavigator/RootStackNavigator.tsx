import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
// Types & routes
import {RootStackParamList} from './types';
import {RootRoutes} from './routes';
// navigation Screens
import {Camera} from '@/screens/Camera';
import {VideoRedact} from '@/screens/VideoRedact';
import {Galerey} from '@/screens/Galerey';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(
      name as unknown as never,
      params as unknown as never,
    );
  }
}

export function push(name: string, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name={RootRoutes.Camera} component={Camera} />
      <RootStack.Screen name={RootRoutes.VideoRedact} component={VideoRedact} />
      <RootStack.Screen name={RootRoutes.Galerey} component={Galerey} />
    </RootStack.Navigator>
  );
};
