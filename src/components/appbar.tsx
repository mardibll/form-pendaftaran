import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Texts from './texts';
import Icons from './icons';

type Props = {
  title: string;
  backable: any;
};

const Appbar = (props: Props) => {
  const {title, backable} = props;

  const goBack = () => {
    if (backable) {
      backable.goBack();
    }
  };

  return (
    <View style={[styles.header, styles.shadow]}>
      <View style={styles.sider}>
        {backable && (
          <TouchableOpacity onPress={goBack} activeOpacity={0.8}>
            <Icons name="arrow-back-ios" size={25} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.center}>
        <Texts style={styles.title}>{title}</Texts>
      </View>
      <View style={styles.sider} />
    </View>
  );
};

Appbar.defaultProps = {
  title: '',
  backable: null,
};

export default Appbar;

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4b9aa5',
    flexDirection: 'row',
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
  title: {color: '#FFF', fontWeight: '500'},
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sider: {
    width: '12%',
    height: '100%',
    marginLeft: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
