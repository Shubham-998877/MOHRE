import { NavigatorScreenParams as ScreenParams } from '@react-navigation/native';
import { StackNavigationOptions as NavigationOptions } from '@react-navigation/stack';
import { FeatureStackScreen as StackScreen } from './types';
import { LaunchStackParamList } from './launch/interface';
import { DashBoardStackParamList } from './dashboard/interface';


export type AppStackScreen = StackScreen<AppStackParamList, NavigationOptions>;

export type AppStackParamList = {
    Launch: ScreenParams<LaunchStackParamList>
    Dashboard: ScreenParams<DashBoardStackParamList>
};