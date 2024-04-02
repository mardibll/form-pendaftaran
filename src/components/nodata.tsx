import {StyleSheet, View} from 'react-native';
import React from 'react';
import Texts from './texts';

type Props = {
  loading: boolean;
};

const Nodata = (props: Props) => {
  if (props.loading) return null;
  return (
    <View style={styles.container}>
      <Texts style={styles.text}>NO DATA SCHOOL</Texts>
    </View>
  );
};

export default Nodata;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '5%',
  },
  text: {color: '#b4b4b4', fontWeight: '500'},
});
