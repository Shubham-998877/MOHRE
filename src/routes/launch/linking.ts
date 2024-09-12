import { PathConfig } from '@react-navigation/native';
import { LaunchStackParamList } from './interface';

export const launchStackLinking: PathConfig<LaunchStackParamList> = {
  screens: {
    Welcome: 'launch/welcome',
  },
};