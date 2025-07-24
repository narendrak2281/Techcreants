import React from 'react';
import {ScrollView, StatusBar, StatusBarStyle, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
import styles from './styles';

interface MainFrameProps {
  children?: React.ReactNode;
  contentContainerStyle?: {};
  scrollable?: boolean;
  containerStyle?: {};
  barStyle?: StatusBarStyle;
  backgroundColor?: string;
}

export const MainFrame: React.FunctionComponent<MainFrameProps> = ({
  children,
  contentContainerStyle,
  scrollable,
  containerStyle,
  barStyle = 'light-content',
  backgroundColor = Colors.appHeader,
}) => {
  return (
    // <LinearGradient
    //   colors={[Colors.gredientTop, Colors.gradientBottom]}
    //   start={{ x: 0.5, y: 0 }}
    //   end={{ x: 0.5, y: 1 }}
    //   // style={[styles.containerView, {backgroundColor: backgroundColor}]}
    //   className={`flex-1 bg-${backgroundColor}`}
    // >
      <SafeAreaView
        style={[styles.containerView]}
        edges={['top', 'right', 'left']}>
        <StatusBar
          translucent
          backgroundColor={backgroundColor}
          barStyle={barStyle}
        />
        {scrollable ? (
          <ScrollView
            keyboardShouldPersistTaps={'handled'}
            contentContainerStyle={contentContainerStyle}>
            {children}
          </ScrollView>
        ) : (
          <View style={containerStyle}>{children}</View>
        )}
      </SafeAreaView>
    // </LinearGradient>
  );
};
