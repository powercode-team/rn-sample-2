import { Platform, Dimensions } from 'react-native';

const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export { isIOS, isAndroid, screenWidth, screenHeight };
