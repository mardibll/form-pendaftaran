import React from 'react';
import {StyleSheet, Text, Platform, TextProps} from 'react-native';

interface TextsProps extends TextProps {}

const Texts: React.FC<TextsProps> = ({...props}) => {
  const defStyle = [styles.textDefault];

  const incStyle = Array.isArray(props.style) ? props.style : [props.style];

  return <Text {...props} style={[...defStyle, ...incStyle]} />;
};

const styles = StyleSheet.create({
  textDefault: {
    fontSize: Platform.OS === 'ios' ? 14 : 16,
    fontWeight: '400',
    color: '#000',
  },
});

export default Texts;
