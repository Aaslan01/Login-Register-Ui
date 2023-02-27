import {View, Text, SafeAreaView, TextInput} from 'react-native';
import React, { useState } from 'react';
import Texting from '../components/Texting';
import StyleGuide from '../constants/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontSize from '../constants/FontSize';
import InputField from '../components/InputField';
const LoginScreen = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <SafeAreaView style={[StyleGuide.mainPadding, {paddingVertical: hp(4)}]}>
      <Texting text={'Login here'} />
      <Texting
        text={"Welcome back you've been missed!"}
        fontSize={FontSize.large}
        color={StyleGuide.colors.text}
        paddingHorizontal={wp(16)}
        marginTop={hp(2)}
      />
      <InputField title={'Email'}/>
      <InputField title={'Password'} />
    </SafeAreaView>
  );
};

export default LoginScreen;
