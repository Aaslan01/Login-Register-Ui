import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Texting from '../components/Texting';
import StyleGuide from '../constants/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontSize from '../constants/FontSize';
import InputField from '../components/InputField';
import Social from '../components/Social';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Controller, useForm} from 'react-hook-form';

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const pwd = watch('password');

  const onSignUpPressed = (data: any) => {
    console.log('data', data);
    // navigation.push('LoginScreen');
  };

  console.log('error Reg', errors);
  const navigation = useNavigation();
  return (
    <SafeAreaProvider
      style={[StyleGuide.mainPadding, {paddingVertical: hp(4)}]}>
      <Texting text={'Create Account'} fontFamily={'Poppins-Bold'} />
      <Texting
        text={'Create an Account so you can explore all the existing jobs'}
        fontSize={FontSize.small}
        color={StyleGuide.colors.text}
        paddingHorizontal={wp(2)}
        marginTop={hp(1)}
      />
      <View style={{marginTop: hp(2)}} />
      <InputField
        name={'email'}
        placeholder={'Email'}
        control={control}
        rules={{required: 'Email is required'}}
      />
      <InputField
        placeholder={'Password'}
        name={'password'}
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Minimum length of Characters should be 8',
          },
        }}
        secureTextEntry
      />
      <InputField
        placeholder={'Confirm Password'}
        name={'confirmPassword'}
        control={control}
        rules={{
          validate: (value: string) => value === pwd || "Password does not match",
        }}
        secureTextEntry
      />
      <TouchableOpacity
        onPress={handleSubmit(onSignUpPressed)}
        style={[StyleGuide.buttonContainer, StyleGuide.fullButtonContainer]}>
        <Text style={[StyleGuide.buttonText, StyleGuide.fullButtonText]}>
          Sign up
        </Text>
      </TouchableOpacity>
      <Texting
        text="Already have an account "
        fontSize={FontSize.small}
        marginTop={hp(3)}
        onPress={() => navigation.push('LoginScreen')}
        color={StyleGuide.colors.darkText}
      />
      {/* Social Login */}
      <Texting
        text="Or continue with"
        fontSize={FontSize.small}
        marginTop={hp(5)}
        onPress={() => console.log('Testing Test')}
      />
      <View
        style={{
          flexDirection: 'row',
          marginTop: hp(1),
          justifyContent: 'center',
        }}>
        <Social
          address={require('../assets/images/icons/google.png')}
          onPress={() => console.log('Google Login')}
        />
        <Social
          address={require('../assets/images/icons/apple.png')}
          onPress={() => console.log('Apple Login')}
        />
        <Social
          address={require('../assets/images/icons/facebook.png')}
          onPress={() => console.log('Facebook Login')}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default LoginScreen;
