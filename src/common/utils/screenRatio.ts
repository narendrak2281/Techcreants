'use strict';
import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = width < height ? 350 : 500;
const guidelineBaseHeight = width < height ? 680 : 350;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// scale - for horizontal..
// vericalscale - for vertical..
// moderatescale - for margin..
export {scale, verticalScale, moderateScale, width as deviceWidth};
