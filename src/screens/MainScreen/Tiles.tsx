import React from 'react';
import {Text, TouchableOpacity, useColorScheme, View} from 'react-native';
import {SFSymbol} from 'react-native-sfsymbols';
import styles from './styles.ts';
import {getColors} from '../../theme';

type TileItem = {
  icon: string;
  color: string;
  title: string;
  count: number;
};

const tiles: TileItem[] = [
  {icon: 'key.fill', color: '#007aff', title: 'Усі', count: 216},
  {
    icon: 'person.badge.key.fill',
    color: '#30d158',
    title: 'Ключі допуску',
    count: 7,
  },
  {icon: 'lock.badge.clock', color: '#ffd60a', title: 'Коди', count: 39},
  {icon: 'wifi', color: '#64d2ff', title: 'Wi-Fi', count: 101},
  {
    icon: 'exclamationmark',
    color: '#ff3b30',
    title: 'Безпека',
    count: 2,
  },
  {icon: 'trash.fill', color: '#ff9f0a', title: 'Видалені', count: 0},
];

const Item: React.FC<{item: TileItem}> = ({item}) => {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme!);

  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: colors.cardBackground}]}>
      <View style={styles.cardContent}>
        <View style={[styles.cardIcon, {backgroundColor: item.color}]}>
          <SFSymbol name={item.icon} color="#FFF" size={12} />
        </View>

        <View style={styles.spacer} />
        <Text style={[styles.cardCount, {color: colors.text}]}>
          {item.count}
        </Text>
        <SFSymbol name="chevron.right" color="#999" size={14} />
      </View>
      <Text style={[styles.cardTitle, {color: colors.text}]}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const Tiles: React.FC = () => {
  return (
    <View style={styles.grid}>
      {tiles.map((item, index) => (
        <Item item={item} key={item.icon + index} />
      ))}
    </View>
  );
};

export default Tiles;
