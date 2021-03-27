import 'react-native-gesture-handler';
import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { assets as authenticatonAssets, AuthenticatonNavigator } from './src/Authenticaton';
import { LoadAssets, theme } from './src/components';

const assets = [...authenticatonAssets];

const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AuthenticatonNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}