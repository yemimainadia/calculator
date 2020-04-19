// membuat kamus data satuan
var kamusDataInduk = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
var kamusDataBelas = "belas";
var kamusDataPuluhan = ["", "", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];


function angkaKeTulisan(jumlahDigitOperasi, hasilOperasi) {
    var hasilTulisan, angkaBelakang, hasilOperasiString;
    // hasilOperasiString untuk mengkonversi hasil operasi menjadi string
    //diletakkan di atas agar dapat dipanggil berulang kali
    hasilOperasiString = hasilOperasi.toString();

    // fungsi untuk menampilkan hasil operasi satu digit
    if (jumlahDigitOperasi == 1) {
        if (hasilOperasi == 0) {
            hasilTulisan = "nol";
        } else {
            hasilTulisan = kamusDataInduk[hasilOperasi];
        }
    }
    // fungsi untuk menampilkan hasil operasi dua digit
    if (jumlahDigitOperasi == 2) {
        if (hasilOperasi < 20) {
            angkaBelakang = hasilOperasi - 10;
            hasilTulisan = kamusDataInduk[angkaBelakang] + ' ' + kamusDataBelas;
        } else {
            hasilTulisan = kamusDataPuluhan[hasilOperasiString[0]] + ' ' + kamusDataInduk[hasilOperasiString[1]];
        }
    }


    return hasilTulisan;
}


// membuat fungsi penjumlahan
function calcPlus() {
    var iPlus1 = parseInt(document.getElementById("inputPlus1").value);
    console.log(iPlus1);
    var iPlus2 = parseInt(document.getElementById("inputPlus2").value);
    console.log(iPlus2);
    var hasilOperasi = iPlus1 + iPlus2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigitOperasi = hasilOperasi.toString().length;
    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputPlusHasil").value = angkaKeTulisan(jumlahDigitOperasi, hasilOperasi);
}


// membuat fungsi pengurangan
function calcMinus() {
    var iMinus1 = parseInt(document.getElementById("inputMinus1").value);
    console.log(iMinus1);
    var iMinus2 = parseInt(document.getElementById("inputMinus2").value);
    console.log(iMinus2);
    var hasilOperasi = iMinus1 - iMinus2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigitOperasi = hasilOperasi.toString().length;
    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputMinusHasil").value = angkaKeTulisan(jumlahDigitOperasi, hasilOperasi);

}
// membuat fungsi perkalian
function calcMultiple() {
    var iMultiple1 = parseInt(document.getElementById("inputMultiple1").value);
    console.log(iMultiple1);
    var iMultiple2 = parseInt(document.getElementById("inputMultiple2").value);
    console.log(iMultiple2);
    var hasilOperasi = iMultiple1 * iMultiple2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigitOperasi = hasilOperasi.toString().length;
    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputMultipleHasil").value = angkaKeTulisan(jumlahDigitOperasi, hasilOperasi);

}

// membuat fungsi pembagian
function calcDivide() {
    var iDivide1 = parseInt(document.getElementById("inputDivide1").value);
    console.log(iDivide1);
    var iDivide2 = parseInt(document.getElementById("inputDivide2").value);
    console.log(iDivide2);
    var hasilOperasi = iDivide1 / iDivide2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigitOperasi = hasilOperasi.toString().length;
    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputDivideHasil").value = angkaKeTulisan(jumlahDigitOperasi, hasilOperasi);

}