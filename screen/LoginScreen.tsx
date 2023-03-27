import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
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
import {useForm, Controller} from 'react-hook-form';
const LoginScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log('error', errors);

  const onSignInPressed = data => {
    console.log('data', data);
    // navigation.push('LoginScreen');
  };

  return (
    <SafeAreaProvider
      style={[StyleGuide.mainPadding, {paddingVertical: hp(4)}]}>
      <Texting text={'Login here'} fontFamily={'Poppins-Bold'} />
      <Texting
        text={"Welcome back you've been missed!"}
        fontFamily={'Poppins-Bold'}
        fontSize={FontSize.large}
        color={StyleGuide.colors.text}
        paddingHorizontal={wp(16)}
        marginTop={hp(2)}
      />
      <View style={{marginTop: hp(2)}} />

      <InputField
        name={'email'}
        placeholder={'Email'}
        control={control}
        rules={{required: 'Email is required'}}
      />
      <InputField
        name={'password'}
        placeholder={'Password'}
        control={control}
        rules={{
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password should be 8 Characters long',
          },
        }}
        secureTextEntry
      />
      {/* <InputField title={'Password'} /> */}
      <Texting
        text="Forgot your password?"
        textAlign="right"
        fontSize={FontSize.small}
        paddingHorizontal={wp(0)}
        marginTop={hp(3)}
        onPress={() => console.log('Testing Test')}
      />
      <TouchableOpacity
        onPress={handleSubmit(onSignInPressed)}
        style={[StyleGuide.buttonContainer, StyleGuide.fullButtonContainer]}>
        <Text style={[StyleGuide.buttonText, StyleGuide.fullButtonText]}>
          Sign In
        </Text>
      </TouchableOpacity>
      <Texting
        text="Create New Account"
        fontSize={FontSize.small}
        marginTop={hp(6)}
        onPress={() => navigation.push('RegisterScreen')}
        color={StyleGuide.colors.darkText}
      />
      {/* Social Login */}
      <Texting
        text="Or continue with"
        fontSize={FontSize.small}
        marginTop={hp(6)}
        onPress={() => console.log('Testing Test')}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
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
