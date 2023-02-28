import {View, Text, TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import StyleGuide from '../constants/StyleGuide';

interface Props {
    address: ImageSourcePropType
    onPress?: ()=> void
}
const Social: React.FC<Props> = ({address, onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        padding: wp(4),
        marginHorizontal: wp(1),
        backgroundColor: StyleGuide.colors.gray,
        borderRadius: 10
      }}>
      <Image
        style={{height: 30, width: 30}}
        source={address}
      />
    </TouchableOpacity>
  );
};

export default Social;
