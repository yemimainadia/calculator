// membuat kamus data satuan
var kamusDataSatuan = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh"]



// membuat fungsi penjumlahan
function calcPlus() {
    var iPlus1 = parseInt(document.getElementById("inputPlus1").value);
    console.log(iPlus1);
    var iPlus2 = parseInt(document.getElementById("inputPlus2").value);
    console.log(iPlus2);
    var tempResult = iPlus1 + iPlus2;
    // cara menghitung jumlah digit hasil penjumlahan
    var tempResultDigit = tempResult.toString().length;

    // set variabel untuk menyimpan format hasil tulisan satuan
    var hasilTulisan;
    if (tempResultDigit == 1) {
        if (tempResult == 0) {
            hasilTulisan = kamusDataSatuan[0];
        } else if (tempResult == 1) {
            hasilTulisan = kamusDataSatuan[1];
        } else if (tempResult == 2) {
            hasilTulisan = kamusDataSatuan[2];
        } else if (tempResult == 3) {
            hasilTulisan = kamusDataSatuan[3];
        } else if (tempResult == 4) {
            hasilTulisan = kamusDataSatuan[4];
        } else if (tempResult == 5) {
            hasilTulisan = kamusDataSatuan[5];
        } else if (tempResult == 6) {
            hasilTulisan = kamusDataSatuan[6];
        } else if (tempResult == 7) {
            hasilTulisan = kamusDataSatuan[7];
        } else if (tempResult == 8) {
            hasilTulisan = kamusDataSatuan[8];
        } else if (tempResult == 9) {
            hasilTulisan = kamusDataSatuan[9];
        } else {
            alert('system error');
        }
    }

    document.getElementById("outputPlusHasil").value = hasilTulisan;
}


// membuat fungsi pengurangan
function calcMinus() {
    var iMinus1 = parseInt(document.getElementById("inputMinus1").value);
    console.log(iMinus1);
    var iMinus2 = parseInt(document.getElementById("inputMinus2").value);
    console.log(iMinus2);
    var tempResult = iMinus1 - iMinus2;
    // cara menghitung jumlah digit hasil penjumlahan
    var tempResultDigit = tempResult.toString().length;
    document.getElementById("outputMinusHasil").value = tempResult;
}
// membuat fungsi perkalian
function calcMultiple() {
    var iMultiple1 = parseInt(document.getElementById("inputMultiple1").value);
    console.log(iMultiple1);
    var iMultiple2 = parseInt(document.getElementById("inputMultiple2").value);
    console.log(iMultiple2);
    var tempResult = iMultiple1 * iMultiple2;
    // cara menghitung jumlah digit hasil penjumlahan
    var tempResultDigit = tempResult.toString().length;
    document.getElementById("outputMultipleHasil").value = tempResult;
}

// membuat fungsi pembagian
function calcDivide() {
    var iDivide1 = parseInt(document.getElementById("inputDivide1").value);
    console.log(iDivide1);
    var iDivide2 = parseInt(document.getElementById("inputDivide2").value);
    console.log(iDivide2);
    var tempResult = iDivide1 / iDivide2;
    // cara menghitung jumlah digit hasil penjumlahan
    var tempResultDigit = tempResult.toString().length;
    document.getElementById("outputDivideHasil").value = tempResult;
}