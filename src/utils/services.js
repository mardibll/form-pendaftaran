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

export {fetchProvinsi, fetchCity};
