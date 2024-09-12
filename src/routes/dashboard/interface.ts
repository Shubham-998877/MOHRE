import { StackNavigationOptions } from '@react-navigation/stack';
import { FeatureStackScreen } from '../types';

export type DashboardStackScreen = FeatureStackScreen<
  DashBoardStackParamList,
  StackNavigationOptions
>;

export type DashBoardStackParamList = {
    Dashboard: undefined;
};