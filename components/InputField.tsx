import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import StyleGuide from '../constants/StyleGuide';
import FontSize from '../constants/FontSize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
interface Props {
  title: string;
}

const InputField: React.FC<Props> = ({title}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <TextInput
        // onFocus={() => handleFocus}
        // onBlur={() => handleBlur}
        placeholder={title}
        placeholderTextColor={StyleGuide.colors.darkText}
        style={{
          backgroundColor: StyleGuide.colors.lightPrimary,
          fontSize: FontSize.small,
          fontFamily: 'Poppins-Regular',
          borderRadius: 10,
          paddingVertical: hp(2),
          paddingHorizontal: wp(4),
          marginTop: hp(2),
          borderColor: isFocused
            ? StyleGuide.colors.primary
            : StyleGuide.colors.lightPrimary,
          borderWidth: 1,
        }}
      />
    </View>
  );
};

export default InputField;
