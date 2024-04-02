export const validate = (
  Inputan: any,
): [errorsState: {[key: string]: string}, isValid: boolean] => {
  let formErrors: {[key: string]: string} = {};

  if (!Inputan.typeSekolah) {
    formErrors.typeSekolah = 'Tipe Sekolah harus dipilih';
  } else if (!Inputan.nameSekolah) {
    formErrors.nameSekolah = 'Nama Sekolah tidak boleh kosong';
  } else if (!Inputan.alamat) {
    formErrors.alamat = 'Alamat tidak boleh kosong';
  }
  //======
  else if (!Inputan.kodePos) {
    formErrors.kodePos = 'Kode Pos tidak boleh kosong';
  } else if (Inputan.kodePos.length !== 5) {
    formErrors.kodePos = 'Kode Pos harus terdiri dari 5 digit';
  } else if (!Inputan.provinsi) {
    formErrors.provinsi = 'Provinsi harus dipilih';
  }
  //======
  else if (!Inputan.kotaOrKab) {
    formErrors.kotaOrKab = 'Kota/Kabupaten harus dipilih';
  } else if (!Inputan.telpSekolah) {
    formErrors.telpSekolah = 'Nomor Telepon Sekolah tidak boleh kosong';
  } else if (!Inputan.emailSekolah) {
    formErrors.emailSekolah = 'Email Sekolah tidak boleh kosong';
  } else if (!Inputan.jumlahSiswa) {
    formErrors.jumlahSiswa = 'Jumlah Siswa tidak boleh kosong';
  }
  const isValid = Object.keys(formErrors).length === 0;

  return [formErrors, isValid];
};
