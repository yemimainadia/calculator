// membuat kamus data satuan
var kamusDataInduk = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas"];
var kamusDataBelasan = 'belas';
var kamusDataPuluhan = ["", "", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", "delapan puluh", "sembilan puluh"];
var kamusRatusan = 'ratus';
var kamusRibuan = 'ribu';
var kamusSeribu = 'seribu';
var kamusSeribuSepuluh = 'seribu sepuluh';
var kamusSeribuSebelas = 'seribu sebelas';
var kamusDataRatusan = ["", "seratus", "dua ratus", "tiga ratus", "empat ratus", "lima ratus", "enam ratus", "tujuh ratus", "delapan ratus", "sembilan ratus"];

function angkaKeTulisan(jumlahDigit, hasilOperasi) {
    var hasilTulisan, angkaBelakang, hasilOperasiString;
    hasilOperasiString = hasilOperasi.toString();

    if (jumlahDigit == 1) {
        if (hasilOperasi == 0) {
            hasilTulisan = "nol";
        } else {
            hasilTulisan = kamusDataInduk[hasilOperasi];
        }
    }

    if (jumlahDigit == 2) {
        if (hasilOperasi < 20) {
            if (hasilOperasi == 10 || hasilOperasi == 11) {
                hasilTulisan = kamusDataInduk[hasilOperasi];
            } else {
                angkaBelakang = hasilOperasi % 10;
                hasilTulisan = kamusDataInduk[angkaBelakang] + ' ' + kamusDataBelasan;
            }
        } else {
            hasilTulisan = kamusDataPuluhan[hasilOperasiString[0]] + ' ' + kamusDataInduk[hasilOperasiString[1]];
        }
    }

    if (jumlahDigit === 3) {
        if (hasilOperasiString[0] === '1') {
            if (hasilOperasi % 100 == 0) {
                hasilTulisan = kamusDataRatusan[hasilOperasiString[0]];
            } else if (hasilOperasi % 100 == 10) {
                hasilTulisan = kamusDataRatusan[hasilOperasiString[0]] + ' ' + kamusDataInduk[10];
            } else if (hasilOperasiString[1] === '1' && hasilOperasiString[2] === '1') {
                hasilTulisan = kamusDataRatusan[hasilOperasiString[0]] + ' ' + kamusDataInduk[11];
            } else if (hasilOperasiString[1] === '1') {
                // contoh: seratus lima belas 115
                angkaBelakang = hasilOperasiString[2] % 10;
                hasilTulisan = kamusDataRatusan[hasilOperasiString[0]] + ' ' + kamusDataInduk[angkaBelakang] + ' ' + kamusDataBelasan;
            } else {
                // contoh: seratus sembilan dua 192
                hasilTulisan = kamusDataRatusan[hasilOperasiString[0]] + ' ' + kamusDataPuluhan[hasilOperasiString[1]] + ' ' + kamusDataInduk[hasilOperasiString[2]];
            }
        } else {
            if (hasilOperasiString[1] === '1') {
                // contoh: dua ratus lima belas 215
                if (hasilOperasi % 100 == 10) {
                    // contoh: 210 - dua ratus sepuluh
                    hasilTulisan = kamusDataInduk[hasilOperasiString[0]] + ' ' + kamusRatusan + ' ' + kamusDataInduk[10];
                } else if (hasilOperasiString[1] === '1' && hasilOperasiString[2] === '1') {
                    // contoh: 211 - dua ratus sebelas
                    hasilTulisan = kamusDataInduk[hasilOperasiString[0]] + ' ' + kamusRatusan + ' ' + kamusDataInduk[11];
                } else {
                    angkaBelakang = hasilOperasiString[2] % 10;
                    hasilTulisan = kamusDataInduk[hasilOperasiString[0]] + ' ' + kamusRatusan + ' ' + kamusDataInduk[angkaBelakang] + ' ' + kamusDataBelasan;
                }
            } else {
                // contoh: lima ratus dua puluh empat 524
                hasilTulisan = kamusDataInduk[hasilOperasiString[0]] + ' ' + kamusRatusan + ' ' + kamusDataPuluhan[hasilOperasiString[1]] + ' ' + kamusDataInduk[hasilOperasiString[2]];
            }
        }
    }

    if (jumlahDigit === 4) {
        if (hasilOperasiString[0] === '1') {
            if (hasilOperasi % 1000 == 0) {
                hasilTulisan = kamusSeribu;
            }
            if (hasilOperasi % 100 == 10) {
                // contoh: 1110
                hasilTulisan = kamusSeribu + ' ' + kamusDataRatusan[hasilOperasiString[1]] + ' ' + kamusDataInduk[10];
            } else if (hasilOperasiString[2] === '1' && hasilOperasiString[3] === '1') {
                // contoh: 1111
                hasilTulisan = kamusSeribu + ' ' + kamusDataRatusan[hasilOperasiString[1]] + ' ' + kamusDataInduk[11];
            } else if (hasilOperasiString[2] === '1') {
                angkaBelakang = hasilOperasiString[3] % 10;
                hasilTulisan = kamusSeribu + ' ' + kamusDataRatusan[hasilOperasiString[1]] + ' ' + kamusDataInduk[angkaBelakang] + ' ' + kamusDataBelasan;
            } else {
                // contoh: 1995
                hasilTulisan = kamusSeribu + ' ' + kamusDataRatusan[hasilOperasiString[1]] + ' ' + kamusDataPuluhan[hasilOperasiString[2]] + ' ' + kamusDataInduk[hasilOperasiString[3]];
            }
        } else {
            if (hasilOperasiString[2] === '1') {
                if (hasilOperasi % 100 == 10) {
                    // contoh: 3210
                    hasilTulisan = kamusDataInduk[hasilOperasiString[0]] + ' ' + kamusRibuan + ' ' + kamusDataRatusan[hasilOperasiString[1]] + ' ' + kamusDataInduk[10];
                } else if (hasilOperasiString[2] === '1' && hasilOperasiString[3] === '1') {
                    // contoh: 3211
                    hasilTulisan = kamusDataInduk[hasilOperasiString[0]] + ' ' + kamusRibuan + ' ' + kamusDataRatusan[hasilOperasiString[1]] + ' ' + kamusDataInduk[11];
                } else {
                    // contoh: 2115
                    angkaBelakang = hasilOperasiString[3] % 10;
                    hasilTulisan = kamusDataInduk[hasilOperasiString[0]] + ' ' + kamusRibuan + ' ' + kamusDataRatusan[hasilOperasiString[1]] + ' ' + kamusDataInduk[angkaBelakang] + ' ' + kamusDataBelasan;
                }
            } else {
                // contoh: 5566
                hasilTulisan = kamusDataInduk[hasilOperasiString[0]] + ' ' + kamusRibuan + ' ' + kamusDataRatusan[hasilOperasiString[1]] + ' ' + kamusDataPuluhan[hasilOperasiString[2]] + ' ' + kamusDataInduk[hasilOperasiString[3]];
            }
        }
    }

    if (jumlahDigit === 5) {
        hasilTulisan = '';
        alert('Jumlah Digit Output melebihi batas! \nMaksimal output adalah ribuan (9999)');
    }

    if (isNaN(hasilOperasi)) {
        hasilTulisan = 'Tidak terdefinisi';
    }
    if (hasilOperasi === undefined) {
        hasilTulisan = 'Tidak terhingga';
    }

    return hasilTulisan;
}


// membuat fungsi penjumlahan
function calcPlus() {
    var iPlus1 = parseInt(document.getElementById("inputPlus1").value);
    var iPlus2 = parseInt(document.getElementById("inputPlus2").value);
    var hasilOperasi = iPlus1 + iPlus2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigit = hasilOperasi.toString().length;

    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputPlusHasil").value = angkaKeTulisan(jumlahDigit, hasilOperasi);
    // hapus dulu "class" dari hasilOperasi sebelumnya
    document.getElementById("outputPlusHasil").classList.remove('hasil-ganjil');
    document.getElementById("outputPlusHasil").classList.remove('hasil-genap');
    document.getElementById("outputPlusHasil").classList.remove('hasil-nol');
    // di sini baru tambahkan nama class sesuai hasil
    // cek hasilOperasi apakah ganjil atau genap
    if (hasilOperasi % 2 == 0) {
        // jika hasilOperasi adalah 0
        if (hasilOperasi == 0) {
            document.getElementById("outputPlusHasil").classList.add('hasil-nol');
        } else {
            // di sini baru tambahkan nama class sesuai hasil
            document.getElementById("outputPlusHasil").classList.add('hasil-genap');
        }
    } else {
        // di sini baru tambahkan nama class sesuai hasil
        document.getElementById("outputPlusHasil").classList.add('hasil-ganjil');
    }
}


// membuat fungsi pengurangan
function calcMinus() {
    var iMinus1 = parseInt(document.getElementById("inputMinus1").value);
    var iMinus2 = parseInt(document.getElementById("inputMinus2").value);
    var hasilOperasi = iMinus1 - iMinus2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigit = hasilOperasi.toString().length;
    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputMinusHasil").value = angkaKeTulisan(jumlahDigit, hasilOperasi);

    // hapus dulu "class" dari hasilOperasi sebelumnya
    document.getElementById("outputMinusHasil").classList.remove('hasil-ganjil');
    document.getElementById("outputMinusHasil").classList.remove('hasil-genap');
    document.getElementById("outputMinusHasil").classList.remove('hasil-nol');
    // di sini baru tambahkan nama class sesuai hasil
    // cek hasilOperasi apakah ganjil atau genap
    if (hasilOperasi % 2 == 0) {
        // jika hasilOperasi adalah 0
        if (hasilOperasi == 0) {
            document.getElementById("outputMinusHasil").classList.add('hasil-nol');
        } else {
            // di sini baru tambahkan nama class sesuai hasil
            document.getElementById("outputMinusHasil").classList.add('hasil-genap');
        }
    } else {
        // di sini baru tambahkan nama class sesuai hasil
        document.getElementById("outputMinusHasil").classList.add('hasil-ganjil');
    }

}
// membuat fungsi perkalian
function calcMultiple() {
    var iMultiple1 = parseInt(document.getElementById("inputMultiple1").value);
    var iMultiple2 = parseInt(document.getElementById("inputMultiple2").value);
    var hasilOperasi = iMultiple1 * iMultiple2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigit = hasilOperasi.toString().length;
    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputMultipleHasil").value = angkaKeTulisan(jumlahDigit, hasilOperasi);

    // hapus dulu "class" dari hasilOperasi sebelumnya
    document.getElementById("outputMultipleHasil").classList.remove('hasil-ganjil');
    document.getElementById("outputMultipleHasil").classList.remove('hasil-genap');
    document.getElementById("outputMultipleHasil").classList.remove('hasil-nol');
    // di sini baru tambahkan nama class sesuai hasil
    // cek hasilOperasi apakah ganjil atau genap
    if (hasilOperasi % 2 == 0) {
        // jika hasilOperasi adalah 0
        if (hasilOperasi == 0) {
            document.getElementById("outputMultipleHasil").classList.add('hasil-nol');
        } else {
            // di sini baru tambahkan nama class sesuai hasil
            document.getElementById("outputMultipleHasil").classList.add('hasil-genap');
        }
    } else {
        // di sini baru tambahkan nama class sesuai hasil
        document.getElementById("outputMultipleHasil").classList.add('hasil-ganjil');
    }
}

// membuat fungsi pembagian
function calcDivide() {
    var iDivide1 = parseInt(document.getElementById("inputDivide1").value);
    var iDivide2 = parseInt(document.getElementById("inputDivide2").value);
    var hasilOperasi = iDivide1 / iDivide2;
    // cara menghitung jumlah digit hasil penjumlahan
    var jumlahDigit = hasilOperasi.toString().length;
    // mengubah angka ke tulisan dan menampilkan
    document.getElementById("outputDivideHasil").value = angkaKeTulisan(jumlahDigit, hasilOperasi);
    console.log(hasilOperasi);
    // hapus dulu "class" dari hasilOperasi sebelumnya
    document.getElementById("outputDivideHasil").classList.remove('hasil-ganjil');
    document.getElementById("outputDivideHasil").classList.remove('hasil-genap');
    document.getElementById("outputDivideHasil").classList.remove('hasil-nol');
    // di sini baru tambahkan nama class sesuai hasil
    // cek hasilOperasi apakah ganjil atau genap
    if (hasilOperasi % 2 == 0) {
        // jika hasilOperasi adalah 0
        if (hasilOperasi == 0) {
            document.getElementById("outputDivideHasil").classList.add('hasil-nol');
        } else {
            // di sini baru tambahkan nama class sesuai hasil
            document.getElementById("outputDivideHasil").classList.add('hasil-genap');
        }
    } else {
        // di sini baru tambahkan nama class sesuai hasil
        document.getElementById("outputDivideHasil").classList.add('hasil-ganjil');
    }
}