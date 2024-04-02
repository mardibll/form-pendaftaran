import httpClient from './httpClient';

export const query = {
  id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
  title: 'VARCHAR(150)',
  alamat: 'VARCHAR(150)',
  emailSekolah: 'VARCHAR(150)',
  facebook: 'VARCHAR(150)',
  jumlahSiswa: 'VARCHAR(150)',
  kodePos: 'VARCHAR(150)',
  kotaOrKab: 'VARCHAR(150)',
  nameSekolah: 'VARCHAR(150)',
  provinsi: 'VARCHAR(150)',
  telpSekolah: 'VARCHAR(150)',
  typeSekolah: 'VARCHAR(150)',
};

const fetchProvinsi = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch provinces');
        }
        return response.json();
      })
      .then(provinces => resolve(provinces))
      .catch(error => reject(error));
  });
};

const fetchCity = provinsiId => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${provinsiId}.json`,
    )
      .then(response => response?.json())
      .then(cities => resolve(cities))
      .catch(error => reject(error));
  });
};

const getList = () => {
  return new Promise((resolve, reject) => {
    httpClient
      .ApiGet('schools')
      .then(res => resolve(res?.data))
      .catch(err => reject(err));
  });
};

const addItem = data => {
  return new Promise((resolve, reject) => {
    httpClient
      .ApiPost('schools', data)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });
};

export {fetchProvinsi, fetchCity, getList, addItem};
