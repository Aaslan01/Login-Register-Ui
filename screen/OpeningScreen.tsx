import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import StyleGuide from '../constants/StyleGuide';
import FontSize from '../constants/FontSize';

const OpeningScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: StyleGuide.colors.background,
        flex: 1,
        padding: wp(3),
      }}>
      <Image
        style={{
          margin: wp(4),
          marginTop: hp(6),
          height: hp(40),
          width: wp(80),
        }}
        source={require('../assets/images/welcome-img.png')}
      />
      <Text
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: FontSize.xLarge,
          color: StyleGuide.colors.primary,
          paddingHorizontal: wp(10),
          textAlign: 'center',
        }}>
        Discover You Dream Job Here
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: FontSize.small,
          color: StyleGuide.colors.text,
          paddingHorizontal: wp(10),
          textAlign: 'center',
        }}>
        Explore the all exiting job roles based on your interest and study major
      </Text>
    </SafeAreaView>
  );
};

export default OpeningScreen;
