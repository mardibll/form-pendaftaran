import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Texts from './texts';

type Props = {
  label: string;
  error: string;
  option?: boolean;
  value?: string;
  placeholder?: string;
  onChangeText: (item: string) => void;
  [key: string]: any;
};

const Textinputs = (props: Props) => {
  const {label, error, option, value, onChangeText, placeholder, ...rest} =
    props;
  return (
    <View style={styles.container}>
      <Texts style={styles.label}>
        {label}:{!option && <Texts>*</Texts>}
      </Texts>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        value={value}
        onChangeText={onChangeText}
        {...rest}
      />
      {error && <Texts style={styles.error}>{error}</Texts>}
    </View>
  );
};

Textinputs.defaultProps = {
  label: '',
  error: '',
  option: false,
  value: '',
  onChangeText: () => {},
  placeholder: '',
};

export default Textinputs;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  label: {marginBottom: 8},
  input: {
    fontSize: 14,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    color: '#000',
  },
  error: {
    color: 'red',
    fontSize: 14,
    fontWeight: '400',
  },
});
