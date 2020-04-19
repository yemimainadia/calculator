// membuat fungsi penjumlahan
function calcPlus() {
    var iPlus1 = parseInt(document.getElementById("inputPlus1").value);
    console.log(iPlus1);
    var iPlus2 = parseInt(document.getElementById("inputPlus2").value);
    console.log(iPlus2);
    var tempResult = iPlus1 + iPlus2;
    document.getElementById("outputPlusHasil").value = tempResult;
}
// membuat fungsi pengurangan
function calcMinus() {
    var iMinus1 = parseInt(document.getElementById("inputMinus1").value);
    console.log(iMinus1);
    var iMinus2 = parseInt(document.getElementById("inputMinus2").value);
    console.log(iMinus2);
    var tempResult = iMinus1 - iMinus2;
    document.getElementById("outputMinusHasil").value = tempResult;
}
// membuat fungsi perkalian
function calcMultiple() {
    var iMultiple1 = parseInt(document.getElementById("inputMultiple1").value);
    console.log(iMultiple1);
    var iMultiple2 = parseInt(document.getElementById("inputMultiple2").value);
    console.log(iMultiple2);
    var tempResult = iMultiple1 * iMultiple2;
    document.getElementById("outputMultipleHasil").value = tempResult;
}

// membuat fungsi pembagian
function calcDivide() {
    var iDivide1 = parseInt(document.getElementById("inputDivide1").value);
    console.log(iDivide1);
    var iDivide2 = parseInt(document.getElementById("inputDivide2").value);
    console.log(iDivide2);
    var tempResult = iDivide1 / iDivide2;
    document.getElementById("outputDivideHasil").value = tempResult;
}