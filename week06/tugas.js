function generateAnggotaBoxes() {
  var jumlahAnggota = document.getElementById("jumlahAnggota").value;
  var anggotaBoxesDiv = document.getElementById("anggotaBoxes");
  anggotaBoxesDiv.innerHTML = "";

  for (var i = 1; i <= jumlahAnggota; i++) {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Nama Anggota " + i;
    input.name = "anggota" + i;
    input.classList.add("custom-input");
    anggotaBoxesDiv.appendChild('input' + i + '=');

    let 

    if (i < jumlahAnggota) {
      anggotaBoxesDiv.appendChild(document.createElement("br"));
    }
  }
}

function submitForm() {
  alert("Pendaftaran telah berhasil dilakukan.");
  location.reload();
}