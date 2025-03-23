/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MainScreen from './screens/MainScreen';
import {getColors} from './theme';

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme!);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[styles.safeArea, {backgroundColor: colors.background}]}
        edges={['top', 'bottom']}>
        <MainScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
