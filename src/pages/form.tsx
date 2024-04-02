import React, {useEffect, useState} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Appbar, Buttons, Dropdown, Textinputs} from '../components';
import {addItem, fetchCity, fetchProvinsi} from '../utils/services';
import {typesSchool} from '../utils/data';
import {validate} from '../utils/validate';

type Props = {
  errors: string;
  navigation: any;
};

type Inputs = {
  typeSekolah: string;
  nameSekolah: string;
  alamat: string;
  kodePos: string;
  provinsi: string;
  kotaOrKab: string;
  telpSekolah: string;
  emailSekolah: string;
  facebook: string;
  jumlahSiswa: string;
};

type Shows = {
  [key: string]: boolean;
};

const Form = (props: Props) => {
  const [provinsis, setProvinsis] = useState([]);
  const [city, setCity] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const [shows, setShows] = useState<Shows>({
    types: false,
    provinsi: false,
    city: false,
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [Inputan, setInputan] = useState<Inputs>({
    typeSekolah: '',
    nameSekolah: '',
    alamat: '',
    kodePos: '',
    provinsi: '',
    kotaOrKab: '',
    telpSekolah: '',
    emailSekolah: '',
    facebook: '',
    jumlahSiswa: '',
  });

  useEffect(() => {
    getProvinsi();
  }, []);
  const getProvinsi = () => {
    fetchProvinsi().then(provinces => setProvinsis(provinces));
  };
  const getCity = () => {
    if (Inputan.provinsi === '') {
      setErrors(prev => ({
        ...prev,
        kotaOrKab: 'Silahkan pilih propinsi terlebih dahulu',
      }));
    } else {
      setErrors(prev => ({...prev, kotaOrKab: ''}));
      let provinsiId = provinsis.find(prov => prov?.name === Inputan.provinsi);
      fetchCity(provinsiId?.id).then(cities => setCity(cities));
    }
  };

  const handleShows = (key: string) => {
    if (key === 'city') getCity();
    setShows(prevShows => ({
      ...prevShows,
      [key]: !prevShows[key],
    }));
  };

  const handlerChange = (key: string, value: string) => {
    setInputan(prevInput => ({
      ...prevInput,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    const [errorsState, isValid] = validate(Inputan);
    setErrors(errorsState);
    if (isValid) {
      setisLoading(true);
      addItem(Inputan)
        .then(() => {
          setisLoading(false);
          props.navigation.goBack();
        })
        .catch(() => setisLoading(false));
    }
  };

  return (
    <View style={styles.container}>
      <Appbar backable={props.navigation} title="Form" />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Data Sekolah:</Text>
          </View>
          <View style={styles.forms}>
            <Dropdown
              placeholder="Pilih Tipe"
              label="Tipe Sekolah"
              value={Inputan.typeSekolah}
              onChangeText={val => handlerChange('typeSekolah', val)}
              error={errors.typeSekolah}
              visible={shows.types}
              onShowDropdown={() => handleShows('types')}
              data={typesSchool}
            />
            <Textinputs
              label="Nama Sekolah"
              placeholder="Contoh: SMK Negeri 1 Bandung (untuk negeri)"
              value={Inputan.nameSekolah}
              onChangeText={val => handlerChange('nameSekolah', val)}
              error={errors.nameSekolah}
            />

            <Textinputs
              label="Alamat"
              value={Inputan.alamat}
              onChangeText={val => handlerChange('alamat', val)}
              error={errors.alamat}
            />
            <Textinputs
              label="Kode Pos"
              value={Inputan.kodePos}
              onChangeText={val => handlerChange('kodePos', val)}
              maxLength={5}
              error={errors.kodePos}
            />
            <Dropdown
              placeholder="Pilih Provinsi"
              label="Provinsi"
              value={Inputan.provinsi}
              onChangeText={val => handlerChange('provinsi', val)}
              error={errors.provinsi}
              visible={shows.provinsi}
              onShowDropdown={() => handleShows('provinsi')}
              data={provinsis}
            />
            <Dropdown
              placeholder="Pilih kota/kabupaten"
              label="Kota/Kabupaten"
              value={Inputan.kotaOrKab}
              onChangeText={val => handlerChange('kotaOrKab', val)}
              error={errors.kotaOrKab}
              visible={shows.city}
              onShowDropdown={() => handleShows('city')}
              data={city}
            />
            <Textinputs
              label="No Telepon Sekolah"
              value={Inputan.telpSekolah}
              onChangeText={val => handlerChange('telpSekolah', val)}
              error={errors.telpSekolah}
            />
            <Textinputs
              label="Email Sekolah"
              value={Inputan.emailSekolah}
              onChangeText={val => handlerChange('emailSekolah', val)}
              error={errors.emailSekolah}
            />
            <Textinputs
              option={true}
              label="Facebook"
              value={Inputan.facebook}
              onChangeText={val => handlerChange('facebook', val)}
              error={errors.facebook}
            />
            <Textinputs
              label="Jumlah Siswa"
              value={Inputan.jumlahSiswa}
              onChangeText={val => handlerChange('jumlahSiswa', val)}
              error={errors.jumlahSiswa}
            />
          </View>
          <Buttons loading={isLoading} title="Submit" onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  header: {
    borderWidth: 1,
    margin: 20,
    marginTop: 10,
    borderRadius: 20,
    borderColor: '#eeeeee',
    flex: 1,
  },
  textContainer: {
    backgroundColor: '#cddef2',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0.1,
    borderColor: '#eeeeee',
    borderBottomWidth: 0,
    padding: 15,
  },
  title: {
    textDecorationLine: 'underline',
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
  },
  forms: {
    flex: 1,
    padding: 15,
    paddingTop: 0,
  },
});
