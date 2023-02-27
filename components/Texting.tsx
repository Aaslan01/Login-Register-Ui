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
  textAlign?: string
  onPress?: ()=>void
  fontFamily?: string
}
const Texting: React.FC<Props> = ({text, fontSize, color, fontFamily,paddingHorizontal, marginTop, textAlign, onPress}) => {
  return (
    <View>
      <Text
      onPress={onPress}
        style={{
          marginTop: marginTop??hp(4),
          fontFamily: fontFamily ?? 'Poppins-SemiBold',
          fontSize: fontSize ?? FontSize.xLarge,
          color: color ?? StyleGuide.colors.primary,
          paddingHorizontal: paddingHorizontal ?? wp(10),
          textAlign: textAlign ?? 'center',
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Texting;
