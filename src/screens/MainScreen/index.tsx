import React from 'react';
import {Text, TextInput, useColorScheme, View} from 'react-native';
import {SFSymbol} from 'react-native-sfsymbols';
import NewPasswordModal from '../NewPasswordModal';
import styles from './styles.ts';
import Tiles from './Tiles.tsx';
import Groups from './Groups.tsx';
import {getColors} from '../../theme';

const MainScreen: React.FC = () => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme!);

  return (
    <>
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        <Text style={[styles.header, {color: colors.text}]}>Паролі</Text>

        <View
          style={[styles.searchBox, {backgroundColor: colors.cardBackground}]}>
          <SFSymbol
            name="magnifyingglass"
            color={colors.placeholderIcon}
            style={styles.searchIcon}
            size={14}
          />
          <TextInput
            style={[styles.searchInput, {color: colors.text}]}
            placeholder="Пошук"
            placeholderTextColor={colors.placeholderIcon}
          />
          <SFSymbol
            name="microphone.fill"
            color={colors.placeholderIcon}
            style={styles.micIcon}
            size={14}
          />
        </View>

        <Tiles />
        <Groups />
      </View>

      <View style={styles.fab}>
        <NewPasswordModal />
      </View>
    </>
  );
};

export default MainScreen;
