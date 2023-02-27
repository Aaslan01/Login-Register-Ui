import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
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
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={[StyleGuide.mainPadding, {paddingVertical: hp(4)}]}>
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
      <InputField title={'Email'} />
      <InputField title={'Password'} />
      <Texting
        text="Forgot your password?"
        textAlign="right"
        fontSize={FontSize.small}
        paddingHorizontal={wp(0)}
        marginTop={hp(3)}
        onPress={() => console.log('Testing Test')}
      />
      <TouchableOpacity
        // onPress={() => navigation.push('LoginScreen')}
        style={[
          StyleGuide.buttonContainer,
          {
            marginTop: hp(2),
            backgroundColor: StyleGuide.colors.primary,
            width: wp(90),
          },
        ]}>
        <Text
          style={[
            StyleGuide.buttonText,
            {
              color: StyleGuide.colors.onPrimary,
              fontSize: FontSize.medium,
              fontFamily: 'Poppins-SemiBold',
            },
          ]}>
          Sign In
        </Text>
      </TouchableOpacity>
      <Texting
        text="Create New Account"
        fontSize={FontSize.small}
        marginTop={hp(6)}
        onPress={() => console.log('Testing Test')}
        color={StyleGuide.colors.darkText}
      />
      <Texting
        text="Or continue with"
        fontSize={FontSize.small}
        marginTop={hp(6)}
        onPress={() => console.log('Testing Test')}
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={{
            padding: wp(4),
            marginHorizontal: wp(1),
            backgroundColor: StyleGuide.colors.gray,
          }}>
          <Text>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: wp(4),
            marginHorizontal: wp(1),
            backgroundColor: StyleGuide.colors.gray,
          }}>
          <Text>Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: wp(4),
            marginHorizontal: wp(1),
            backgroundColor: StyleGuide.colors.gray,
          }}>
          <Text>Facebook</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
