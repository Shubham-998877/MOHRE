import { smiley } from '@mohrecustomer/assets/pngs';
import { MohreBanner } from '@mohrecustomer/assets/svg';
import React from 'react';
import { View, Text, Image } from 'react-native'

export default function Welcome() {
  return (
    <View style={{ backgroundColor: 'green', flex: 1 }}>
      {/* PNG Image use code */}
      <Image style={{ width: 100, height: 55 }} source={smiley} />
      {/* SVG Image use code */}
      <MohreBanner width={100} height={50}></MohreBanner>
      <Text>Welcome USER</Text>
    </View>
  );
}