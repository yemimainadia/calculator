// membuat kamus data satuan
var kamusDataSatuan = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh"]


function angkaKeTulisan(jumlahDigit, hasilOperasi) {
    var hasilTulisan;
    if (jumlahDigit == 1) {
        if (hasilOperasi == 0) {
            hasilTulisan = kamusDataSatuan[0];
        } else if (hasilOperasi == 1) {
            hasilTulisan = kamusDataSatuan[1];
        } else if (hasilOperasi == 2) {
            hasilTulisan = kamusDataSatuan[2];
        } else if (hasilOperasi == 3) {
            hasilTulisan = kamusDataSatuan[3];
        } else if (hasilOperasi == 4) {
            hasilTulisan = kamusDataSatuan[4];
        } else if (hasilOperasi == 5) {
            hasilTulisan = kamusDataSatuan[5];
        } else if (hasilOperasi == 6) {
            hasilTulisan = kamusDataSatuan[6];
        } else if (hasilOperasi == 7) {
            hasilTulisan = kamusDataSatuan[7];
        } else if (hasilOperasi == 8) {
            hasilTulisan = kamusDataSatuan[8];
        } else if (hasilOperasi == 9) {
            hasilTulisan = kamusDataSatuan[9];
        } else {
            alert('system error');
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
    var jumlahDigit = hasilOperasi.toString().length;

    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputPlusHasil").value = angkaKeTulisan(jumlahDigit, hasilOperasi);
}


// membuat fungsi pengurangan
function calcMinus() {
    var iMinus1 = parseInt(document.getElementById("inputMinus1").value);
    console.log(iMinus1);
    var iMinus2 = parseInt(document.getElementById("inputMinus2").value);
    console.log(iMinus2);
    var hasilOperasi = iMinus1 - iMinus2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigit = hasilOperasi.toString().length;
    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputMinusHasil").value = angkaKeTulisan(jumlahDigit, hasilOperasi);

}
// membuat fungsi perkalian
function calcMultiple() {
    var iMultiple1 = parseInt(document.getElementById("inputMultiple1").value);
    console.log(iMultiple1);
    var iMultiple2 = parseInt(document.getElementById("inputMultiple2").value);
    console.log(iMultiple2);
    var hasilOperasi = iMultiple1 * iMultiple2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigit = hasilOperasi.toString().length;
    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputMultipleHasil").value = angkaKeTulisan(jumlahDigit, hasilOperasi);

}

// membuat fungsi pembagian
function calcDivide() {
    var iDivide1 = parseInt(document.getElementById("inputDivide1").value);
    console.log(iDivide1);
    var iDivide2 = parseInt(document.getElementById("inputDivide2").value);
    console.log(iDivide2);
    var hasilOperasi = iDivide1 / iDivide2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigit = hasilOperasi.toString().length;
    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputDivideHasil").value = angkaKeTulisan(jumlahDigit, hasilOperasi);

}