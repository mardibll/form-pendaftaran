import {StyleSheet, View} from 'react-native';
import React from 'react';
import Texts from './texts';
import Icons from './icons';

type Props = {
  item: any;
};

const ListItem = (props: Props) => {
  const {item} = props;
  return (
    <View style={styles.card}>
      <View style={{flex: 1, marginRight: 10}}>
        <Texts style={styles.school}>{item.nameSekolah}</Texts>
        <View style={styles.contactItem}>
          <Icons name="mail" color="#656360" size={16} />
          <Texts style={styles.contactNum}>{item.emailSekolah}</Texts>
        </View>
        <View style={styles.contactItem}>
          <Icons name="phone" color="#656360" size={16} />
          <Texts style={styles.contactNum}>{item.telpSekolah}</Texts>
        </View>
        <View style={{...styles.contactItem, alignItems: 'flex-start'}}>
          <Icons name="location-pin" color="#656360" size={16} />
          <Texts style={styles.address}>
            {item.alamat +
              ', ' +
              item.kotaOrKab +
              ', ' +
              item.provinsi +
              ', ' +
              item.kodePos}
          </Texts>
        </View>
        {item.facebook && <Texts>{item.facebook}</Texts>}
      </View>
      <View style={styles.jumlahSiswa}>
        <Texts>{item.jumlahSiswa}</Texts>
        <Texts>{'Siswa'}</Texts>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderColor: '#4b9aa5',
    padding: 15,
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 5,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  school: {
    fontWeight: '600',
    fontSize: 18,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  contactNum: {marginTop: -4, marginLeft: 10},
  jumlahSiswa: {
    alignItems: 'center',
    borderRadius: 100,
    width: 65,
    height: 65,
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: '#656360',
  },
  address: {
    textTransform: 'capitalize',
    marginTop: -4,
    marginLeft: 10,
  },
});
