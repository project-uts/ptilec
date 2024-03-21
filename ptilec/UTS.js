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
    const record = {nim, name, address};
    records.push(record);
    localStorage.setItem('records', JSON.stringify(records));
    displayRecords();
    form.reset();

    showNotification('Data Mahasiswa Berhasil Ditambahkan!', 'Added!');
  } else {
    showAlert('Tidak dapat menambahkan data karena data tidak lengkap', 'warning');
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
    editButton.innerHTML = '<i class="fas fa-edit">Edit</i>';
    editButton.classList.add('edit-btn');
    editButton.onclick = () => editRecord(index);
    

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash-alt">Delete</i>';
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
  const record = records[index];
  const editNimSpan = document.getElementById('editNim');
  const editNameInput = document.getElementById('editName');
  const editAddressInput = document.getElementById('editAddress');

  editNimSpan.textContent = record.nim;
  editNameInput.value = record.name;
  editAddressInput.value = record.address;

  const modal = document.getElementById('editModal');
  modal.style.display = "block";

  const saveEditBtn = document.getElementById('saveEditBtn');
  saveEditBtn.onclick = () => saveEdit(index);
}

function saveEdit(index) {
  const newName = document.getElementById('editName').value.trim();
  const newAddress = document.getElementById('editAddress').value.trim();

  if (newName && newAddress) {
    records[index].name = newName;
    records[index].address = newAddress;
    localStorage.setItem('records', JSON.stringify(records));
    displayRecords();
    showNotification('Data Mahasiswa Berhasil di Perbaharui', 'Updated!', 'info');

    const modal = document.getElementById('editModal');
    modal.style.display = "none";
  } else {
    alert('Tidak Dapat Menambah Mahasiswa');
  }
}

const cancelEditBtn = document.getElementById('cancelEditBtn');
cancelEditBtn.addEventListener('click', () => {
  const modal = document.getElementById('editModal');
  modal.style.display = "none";
});

window.onclick = function(event) {
  const modal = document.getElementById('editModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const closeModalBtn = document.querySelector('.close');
closeModalBtn.addEventListener('click', () => {
  const modal = document.getElementById('editModal');
  modal.style.display = "none";
});

  function deleteRecord(index) {
    if(confirm('Are you sure want to delete this record?')){
      records.splice(index, 1);
      localStorage.setItem('records', JSON.stringify(records));
      displayRecords();
      showNotification('Data Mahasiswa Berhasil Dihapus!', 'Deleted!', 'error');
    }
}

  function reverseRecords(){
    records.reverse();
    localStorage.setItem('records', JSON.stringify(records));
    displayRecords();
}

  document.querySelector('.reverse-btn').addEventListener('click', reverseRecords);
  form.addEventListener('submit', addRecord);
  displayRecords();

function showAlert(message, type) {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert ${type}`;
  
  const header = document.createElement('div');
  header.className = 'alert-header';
  header.style.backgroundColor = '#ffcc00'; 
  
  const body = document.createElement('div');
  body.className = 'alert-body';
  body.textContent = message;

  const added = document.createElement('span');
  added.textContent = 'Warning!';
  
  const time = document.createElement('span');
  time.textContent = 'just now~';
  time.style.fontSize = '0.8em';
  
  const closeButton = document.createElement('button');
  closeButton.textContent = 'x';
  closeButton.className = 'close-btn';
  closeButton.onclick = function() {
    alertDiv.remove();
  };

  header.appendChild(added);
  header.appendChild(time);
  header.appendChild(closeButton);

  alertDiv.appendChild(header);
  alertDiv.appendChild(body);
  
  document.body.appendChild(alertDiv);
}



function showNotification(message, action, type) {
  const notificationDiv = document.createElement('div');
  notificationDiv.className = 'notification';
  
  const header = document.createElement('div');
  header.className = 'notification-header';
  header.style.backgroundColor = type === 'error' ? '#f44336' : type === 'info' ? 'rgb(0, 204, 255)' : type === 'warning' ? '#ffcc00' : '#4CAF50'; 
  
  const body = document.createElement('div');
  body.className = 'notification-body';
  body.textContent = message;

  const added = document.createElement('span');
  added.textContent = action;
  
  const time = document.createElement('span');
  time.textContent = 'just now~';
  time.style.fontSize = '0.8em';
  
  const closeButton = document.createElement('button');
  closeButton.textContent = 'x';
  closeButton.className = 'close-btn';
  closeButton.onclick = function() {
    notificationDiv.remove();
  };

  header.appendChild(added);
  header.appendChild(time);
  header.appendChild(closeButton);

  notificationDiv.appendChild(header);
  notificationDiv.appendChild(body);
  
  document.body.appendChild(notificationDiv);
}



