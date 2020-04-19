function calcPlus() {
    var iPlus1 = parseInt(document.getElementById("inputPlus1").value);
    console.log(iPlus1);
    var iPlus2 = parseInt(document.getElementById("inputPlus2").value);
    console.log(iPlus2);
    var tempResult = iPlus1 + iPlus2;
    document.getElementById("outputPlusHasil").value = tempResult;
}