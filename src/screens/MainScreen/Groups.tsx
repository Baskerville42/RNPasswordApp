import React from 'react';
import {Text, useColorScheme, View} from 'react-native';
import {SFSymbol} from 'react-native-sfsymbols';
import styles from './styles.ts';
import {getColors} from '../../theme';

const Groups: React.FC = () => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme!);

  return (
    <>
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, {color: colors.placeholder}]}>
          СПІЛЬНІ ГРУПИ
        </Text>
      </View>

      <View
        style={[styles.groupCard, {backgroundColor: colors.cardBackground}]}>
        <View style={styles.groupRow}>
          <View style={styles.groupIconFill}>
            <SFSymbol name="person.2.fill" color="#FFF" size={12} />
          </View>
          <Text style={[styles.groupText, {color: colors.text}]}>
            Родинні паролі
          </Text>
          <View style={styles.spacer} />
          <Text style={[styles.groupCount, {color: colors.text}]}>9</Text>
          <SFSymbol name="chevron.right" color="#999" size={14} />
        </View>
        <View style={[styles.divider, {backgroundColor: colors.divider}]} />
        <View style={styles.groupRow}>
          <View style={styles.cardIcon}>
            <SFSymbol name="person.2.fill" color={colors.primary} size={12} />
          </View>
          <Text style={[styles.groupText, {color: colors.primary}]}>
            Нова спільна група
          </Text>
        </View>
      </View>
    </>
  );
};

export default Groups;
