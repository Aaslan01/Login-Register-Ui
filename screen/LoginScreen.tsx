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

const LoginScreen = () => {
  const navigation = useNavigation();
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
          StyleGuide.fullButtonContainer
        ]}>
        <Text
          style={[
            StyleGuide.buttonText,
            StyleGuide.fullButtonText,
          ]}>
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
    </SafeAreaView>
  );
};

export default LoginScreen;
