import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Texts from './texts';

type Props = {
  onPress: () => void;
  title: string;
  btnStyle: any;
  textStyle: any;
  loading: boolean;
};

const Buttons = (props: Props) => {
  const {onPress, loading, title, btnStyle, textStyle} = props;
  return (
    <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onPress}>
      {loading && (
        <ActivityIndicator color="#FFF" size={20} style={styles.load} />
      )}
      <Texts style={[styles.textBtn, textStyle]}>{title}</Texts>
    </TouchableOpacity>
  );
};

Buttons.defaultProps = {
  onPress: () => {},
  title: '',
  btnStyle: {},
  textStyle: {},
};
export default Buttons;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#4b9aa5',
    padding: 15,
    margin: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBtn: {
    color: '#FFF',
  },
  load: {marginRight: 10},
});
