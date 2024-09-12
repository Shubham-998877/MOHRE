import { ComponentType } from 'react';

export type FeatureStackScreen<FeatureParams, FeatureScreenOptions> = {
  name: keyof FeatureParams;
  component: ComponentType<any>;
  options?: FeatureScreenOptions;
};