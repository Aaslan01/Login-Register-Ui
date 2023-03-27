import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import StyleGuide from '../constants/StyleGuide';
import FontSize from '../constants/FontSize';
import {Controller} from 'react-hook-form';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
interface Props {
  name: string;
  placeholder: string;
  control: any;
  rules: {};
  secureTextEntry?: boolean;
}

const InputField: React.FC<Props> = ({
  placeholder,
  rules,
  name,
  control,
  secureTextEntry,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange}, fieldState: { error}}) => (
        <View
          style={{
            borderColor: 'black',
            borderRadius: 3,
          }}>
          <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            placeholderTextColor={StyleGuide.colors.darkText}
            secureTextEntry={secureTextEntry}
            style={{
              backgroundColor: StyleGuide.colors.lightPrimary,
              fontSize: FontSize.small,
              fontFamily: 'Poppins-Regular',
              borderRadius: 10,
              paddingVertical: hp(2),
              paddingHorizontal: wp(4),
              marginTop: hp(2),
              borderColor: error ? "red" : StyleGuide.colors.primary,
              borderWidth: 1,
            }}
          />
          {
            error && <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message}</Text>
          }
        </View>
      )}
    />
  );
};

export default InputField;
