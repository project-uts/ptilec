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

  const nim = nimInput.value.trim();
  const name = nameInput.value.trim();
  const address = addressInput.value.trim();

  if(nim && name && address) {
    console.log('test');
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
    const tableContainer = document.createElement('div');
    tableContainer.classList.add('table-container')

    const table = document.createElement('table');
    const headerRow = table.insertRow();

    // Header
    const nimHeader = document.createElement('th');
    nimHeader.textContent = 'NIM';
    headerRow.appendChild(nimHeader);

    const nameHeader = document.createElement('th');
    nameHeader.textContent = 'Name';
    headerRow.appendChild(nameHeader);

    const addressHeader = document.createElement('th');
    addressHeader.textContent = 'Address';
    headerRow.appendChild(addressHeader);

    const settingsHeader = document.createElement('th');
    settingsHeader.textContent = 'Pengaturan';
    headerRow.appendChild(settingsHeader);

    // Records
    records.forEach((record, index) => {
    const row = table.insertRow();

    const nimCell = row.insertCell();
    nimCell.textContent = record.nim;
    nimCell.classList.add('justify');

    const nameCell = row.insertCell();
    nameCell.textContent = record.name;
    nameCell.classList.add('justify');

    const addressCell = row.insertCell();
    addressCell.textContent = record.address;
    addressCell.classList.add('justify');

    const settingsCell = row.insertCell();
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.onclick = () => editRecord(index);
    

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = () => deleteRecord(index);
   
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    settingsCell.appendChild(buttonContainer);
  });

  tableContainer.appendChild(table);
  recordsContainer.appendChild(table);
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
