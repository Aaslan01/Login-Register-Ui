import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontSize from '../constants/FontSize';
import StyleGuide from '../constants/StyleGuide';

interface Props {
  text: string;
  fontSize?: number
  color?: string
  paddingHorizontal?:number
  marginTop?: number
}
const Texting: React.FC<Props> = ({text, fontSize, color ,paddingHorizontal, marginTop}) => {
  return (
    <View>
      <Text
        style={{
          marginTop: marginTop??hp(4),
          fontFamily: 'Poppins-Bold',
          fontSize: fontSize ?? FontSize.xLarge,
          color: color ?? StyleGuide.colors.primary,
          paddingHorizontal: paddingHorizontal ?? wp(10),
          textAlign: 'center',
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Texting;
