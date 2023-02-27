import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import StyleGuide from '../constants/StyleGuide';
import FontSize from '../constants/FontSize';
import { useNavigation } from '@react-navigation/native';
import Texting from '../components/Texting';
const OpeningScreen = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: StyleGuide.colors.background,
        flex: 1,
        paddingHorizontal: wp(3),
      }}>
      <View style={{flex: 1}}>
        <Image
          style={{
            margin: wp(4),
            marginTop: hp(6),
            height: hp(40),
            width: wp(80),
          }}
          source={require('../assets/images/welcome-img.png')}
        />
      </View>
      <View style={{flex: 1}}>
        <Texting text={"Discover You Dream Job Here"}/>
        <Text
          style={{
            marginTop: hp(2),
            fontFamily: 'Poppins-Regular',
            fontSize: FontSize.small,
            color: StyleGuide.colors.text,
            paddingHorizontal: wp(10),
            textAlign: 'center',
          }}>
          Explore the all exiting job roles based on your interest and study
          major
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: wp(3),
            justifyContent: 'space-evenly',
            marginTop: hp(6),
          }}>
          <TouchableOpacity
          onPress={()=> navigation.push("LoginScreen")}
            style={[
              {
                backgroundColor: StyleGuide.colors.primary,
              },
              StyleGuide.buttonContainer,
            ]}>
            <Text
              style={[
                {color: StyleGuide.colors.onPrimary},
                StyleGuide.buttonText,
              ]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
                    onPress={()=> navigation.push("RegisterScreen")}
            style={[
              {
                backgroundColor: StyleGuide.colors.onPrimary,
              },
              StyleGuide.buttonContainer,
            ]}>
            <Text
              style={[{color: StyleGuide.colors.text}, StyleGuide.buttonText]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OpeningScreen;
