function simpandantampilkan() {
  console.log('test');
  var nim = document.getElementById('nim').value;
  var nama = document.getElementById('nama').value;
  var alamat = document.getElementById('alamat').value;

  localStorage.setItem('nim', nim);
  localStorage.setItem('nama', nama);
  localStorage.setItem('alamat', alamat);

  tampilkan();
}

function tampilkan() {
  var nama = localStorage.getItem('nim');
  var nim = localStorage.getItem('nama');
  var alamat = localStorage.getItem('alamat');

  var dataCont = document.getElementById('data-container');
  dataCont.innerHTML = nim + ' ' + nama + '' +alamat
}
