import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PortalHost} from '@rn-primitives/portal';

import RootNavigator from './core/Navigation';
import {persistor, store} from './redux/store';
import {DARK_THEME, LIGHT_THEME} from './common/styles/theme';
import {useColorScheme} from './common/utils';
import Toast from 'react-native-toast-message';
import {toastConfig} from './common/components/Toast';

const App = () => {
  const {colorScheme, isDarkColorScheme} = useColorScheme();
  const theme = colorScheme === 'dark' ? DARK_THEME : LIGHT_THEME;

  return (
    // <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView edges={['top', 'left', 'right']} className="bg-background flex-1">
        <NavigationContainer theme={theme}>
          <StatusBar
            barStyle={isDarkColorScheme ? 'light-content' : 'dark-content'}
            translucent={true}
          />
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <RootNavigator />
              <Toast config={toastConfig} />
              <PortalHost />
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </SafeAreaView>
    // </GestureHandlerRootView>
  );
};

export default App;
