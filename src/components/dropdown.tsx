/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Texts from './texts';
import Icons from './icons';

type Props = {
  label: string;
  error: string;
  option: boolean;
  value?: any;
  onChangeText: (item: any) => void;
  placeholder: string;
  onShowDropdown: () => void;
  visible: boolean;
  data: any;
};

const Dropdown = (props: Props) => {
  const {
    label,
    error,
    option,
    value,
    onChangeText,
    placeholder,
    onShowDropdown,
    visible,
    data,
  } = props;

  const renderItem = () => {
    return (
      <View style={styles.shadow}>
        <View style={[styles.listContainer, styles.shadow]}>
          {data?.map((x: any, i: number) => (
            <TouchableOpacity
              onPress={() => onChangeText(x?.name)}
              key={i}
              style={{
                backgroundColor: value === x?.name ? '#ebebe5' : '#FFF',
                ...styles.itemDropdown,
              }}>
              <Texts>{x?.name}</Texts>
              {value === x?.name && (
                <Icons name="check" color={'#000'} size={18} />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Texts style={styles.label}>
        {label}:{!option && <Texts>*</Texts>}
      </Texts>
      <View style={styles.value}>
        <TouchableOpacity style={styles.input} onPress={onShowDropdown}>
          <Texts>{value ? value : placeholder}</Texts>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={onShowDropdown}>
          <Icons type="AntDesign" name="caretdown" size={15} color={'#000'} />
        </TouchableOpacity>
      </View>
      {visible && renderItem()}
      {error && <Texts style={styles.error}>{error}</Texts>}
    </View>
  );
};

Dropdown.defaultProps = {
  label: '',
  error: '',
  option: false,
  value: '',
  onChangeText: () => {},
  placeholder: '',
};

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  label: {marginBottom: 8},
  input: {
    fontSize: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e9e9e9',
    flex: 1,
  },
  arrowContainer: {
    backgroundColor: '#ebebe5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#969792',
    height: '100%',
  },
  value: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  listContainer: {
    backgroundColor: 'red',
    zIndex: 9999,
    position: 'absolute',
    width: '100%',
    paddingTop: 10,
    borderWidth: 0.2,
    borderColor: '#e9e9e9',
  },
  itemDropdown: {
    zIndex: 9999,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ebebe5',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shadow: {
    zIndex: 9999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#FFF',
  },

  error: {
    color: 'red',
    fontSize: 14,
    fontWeight: '400',
  },
});
