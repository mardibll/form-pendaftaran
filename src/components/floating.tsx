import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icons from './icons';

type Props = {
  onFloat: () => void;
};

const Floating = (props: Props) => {
  return (
    <View style={styles.float}>
      <TouchableOpacity style={styles.btn} onPress={props.onFloat}>
        <Icons name="add" color={'#FFF'} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default Floating;

const styles = StyleSheet.create({
  float: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  btn: {
    backgroundColor: '#4b9aa5',
    height: 60,
    width: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
