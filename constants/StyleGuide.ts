const white = '#fff';
const black = '#000';
const dark = '#626262';
const blue = '#1F41BB';
const gray = '#ECECEC';
const lightBlue = '#f1f4ff';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const StyleGuide = {
  colors: {
    darkText: dark,
    text: black,
    background: white,
    primary: blue,
    onPrimary: white,
    active: blue,
    borderWithOpacity: '#1f41bb',
    lightPrimary: lightBlue,
    gray: gray,
  },
  buttonContainer: {
    width: wp(32),
    borderRadius:10,
    paddingVertical: hp(1.4),
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
};

export default StyleGuide;
