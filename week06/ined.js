function ubahNodeValue(){
    a = document.getElementById("menu").getElementsByTagName("a")[2].firstChild;
    a.nodeValue = "foto";
    b = "<p>Galeri berubah menjadi foto</p>";;
    document.getElementById("sisip").innerHTML = b;
}

function periksaProperti(){
    
    a = document.getElementById("menu").getElementsByTagName("a")[2].firstChild;
    console.log(a);
    b = "<p>nodeName : " + a.nodeName;
    b += "<br />nodeType : " + a.nodeType;
    b +=  "<br />nodeValue : " + a.nodeValue + "</p>";
    document.getElementById("sisip").innerHTML = b;
}

function ubahAtribut() {

    a = document.getElementById("menu").getElementsByTagName("li")[3].firstChild;
    a.setAttribute("href", "https;//facebook.com");
    console.log(a);
    b = "<p>Link dari galeri telah berubah dari galeri.html menjadi facebook.com</p>";
    document.getElementById("sisip").innerHTML = b;
}

function tambahAnak(){
    a = document.createElement("li");
    b = document.createTextNode("Tambah Anak Lagi");
    a.appendChild(b);

    c = document.getElementById("menu");
    c.appendChild(a);

    d = "<p>Anak dari menu bertambah</p>";
    document.getElementById("sisip").innerHTML = d;
}

function bikinKembaran() {
    
    a = document.getElementById("menu").getElementsByTagName("li")[3].firstChild;
    b = a.cloudNode(true);

    c = document.getElementById("meu");
    a.parrentNode.appendChild(b);

    d = "<p>galeri berhasil di kloning dan jadi anak bontot</p>";
    document.getElementById("sisip").innerHTML = d;
}

function sisipAnak() {

    a = document.createElement("li");
    a = document.createTextNode("anak sisipan");
    
    a.appendChild(b);
    c = document.getElementById("menu");

    d= c.getElementsByTagName("li")[4];
    c.insertBefore(a, d);

    e =   " <p>Berhasil nyisipin anak antara galeri dan testimonial</p>";
    document.getElementById("sisip").innerHTML = e;
}

function gantiAnak(){

    a = document.getElementById("menu");

    b = a.getElementsByTagName("li")[5];

    c = document.createElement("li");
    d = document.createTextNode("anak baru");

    c.appendChild(d);
    a.replaceChild(c,b);

    d = "<p>Menu yang ke-6 diganti jadi Anak Baru</p>"
    document.getElementById("sisip").innerHTML = d;
}
