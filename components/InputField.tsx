import {View, Text, TextInput} from 'react-native';
import React, { useState } from 'react';
import StyleGuide from '../constants/StyleGuide';
import FontSize from '../constants/FontSize';

interface Props {
    title: string
}

const InputField: React.FC<Props> = ({title}) => {
  return (
    <View>
      <TextInput
        placeholder={title}
        placeholderTextColor={StyleGuide.colors.darkText}
        style={{
          backgroundColor: StyleGuide.colors.lightPrimary,
          fontSize: FontSize.small,
          fontFamily: 'Poppins-Regular',
          borderRadius: 10,
          padding: 10,
          paddingHorizontal: 20,
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default InputField;
