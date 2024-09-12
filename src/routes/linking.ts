import { LinkingOptions } from '@react-navigation/native';
import { AppStackParamList } from './interface';
import { launchStackLinking } from './launch/linking';


export const linking: LinkingOptions<AppStackParamList> = {
  prefixes: ['mohrecustomer://'],
  config: {
    screens: {
    // Launch:launchStackLinking
    },
  },
};