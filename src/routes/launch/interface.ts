import { StackNavigationOptions } from '@react-navigation/stack';
import { FeatureStackScreen } from '../types';

export type LaunchStackScreen = FeatureStackScreen<
  LaunchStackParamList,
  StackNavigationOptions
>;

export type LaunchStackParamList = {
  Welcome: undefined;
};