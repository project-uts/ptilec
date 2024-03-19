// function simpanDanTampilkan() {

//   var nim = document.getElementById('nim').value;
//   var nama = document.getElementById('nama').value;
//   var alamat = document.getElementById('alamat').value;

//   localStorage.setItem('nim', nim);
//   localStorage.setItem('nama', nama);
//   localStorage.setItem('alamat', alamat);


//   var dataCont = document.getElementById('data-container');
//   dataCont.innerHTML = nim + ' ' + nama + '' +alamat

//   tampilkan();
// }

// function tampilkan() {
//   var nama = localStorage.getItem('nim');
//   var nim = localStorage.getItem('nama');
//   var alamat = localStorage.getItem('alamat');

//   var dataCont = document.getElementById('data-container');
//   dataCont.innerHTML = nim + ' ' + nama + '' +alamat
// }


const form = document.getElementById('crudForm');
const recordsContainer = document.getElementById('records');
let records = JSON.parse(localStorage.getItem('records')) || [];

function addRecord(event) {
  event.preventDefault();
  const nimInput = form.nim;
  const nameInput = form.name;
  const addressInput = form.address;

  if(nimInput && nameInput && addressInput) {
    const nim = nimInput.value.trim();
    const name = nameInput.value.trim();
    const address = addressInput.value.trim();

    const record = {nim, name, address};
    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));
    displayRecords();
    form.reset();
  } else {
    alert('Tidak dapat menambahkan mahasiswa')
  }
}

  function displayRecords() {
    recordsContainer.innerHTML = '';
    records.forEach((record, index)=>{
      const recordDiv = document.createElement('div');
      recordDiv.innerHTML = `
      <p><strong>NIM:</strong> ${record.nim}</p>
      <p><strong>Name:</strong> ${record.name}</p>
      <p><strong>Address:</strong> ${record.address}</p>
      <button onclick="editRecord(${index})">Edit</button>
      <button onclick="deleteRecord(${index})">Delete</button>
      `;
      recordsContainer.appendChild(recordDiv);
    });
  }

  function editRecord(index) {
    const newNim = prompt('Enter New Nim');
    const newName = prompt('Enter New Name');
    const newAddress = prompt('Enter New Addres');
    if(newNim && newName && newAddress ) {
      records[index].nim = newNim;
      records[index].name = newName;
      records[index].address = newAddress;
      localStorage.setItem('records', JSON.stringify(records));
      displayRecords();
    }
  }

  function deleteRecord(index) {
    if(confirm('Are you sure want to delete this record?')){
      records.splice(index, 1);
      localStorage.setItem('records', JSON.stringify(records));
      displayRecords();
    }
  }

  form.addEventListener('submit', addRecord);
  displayRecords();
