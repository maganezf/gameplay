import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

interface ButtonIconProps extends TouchableOpacityProps {
  title: string;
  activeOpacity?: number;
}

export function ButtonIcon({
  title,
  activeOpacity = 0.7,
  ...rest
}: ButtonIconProps) {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      activeOpacity={activeOpacity}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
