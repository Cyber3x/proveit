import { StyleSheet } from 'react-native';
import { GREEN_MAIN, MAIN_BACKGROUND, WHITE_0 } from '../../constants/colors';
import { SCREEN_PADDING } from '../../constants/sizes';

export const styles = StyleSheet.create({
  keyboardAwareView: {
    backgroundColor: MAIN_BACKGROUND,
    flex: 1,
  },
  container: {
    padding: SCREEN_PADDING,
  },
  screenName: {
    textAlign: 'center',
    color: GREEN_MAIN,
    fontFamily: 'Open Sans',
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 40,
    paddingBottom: 30,
  },
  authButton: {
    marginBottom: 20,
  },
  navigtaionButtons: {
    marginTop: 50,
    marginHorizontal: 60,
  },
  // TEXT UNDER LOGIN AND REGISTER BUTTOn
  underAuthButtonText: {
    color: WHITE_0,
    textAlign: 'center',
    fontSize: 16,
  },
  line1: {},
  line2: {
    color: GREEN_MAIN,
  },
  // END OF NOTE
  authInput: {
    marginTop: 20,
  },
});
