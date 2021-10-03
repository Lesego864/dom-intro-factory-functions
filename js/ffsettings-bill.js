const addbtnsettings = document.querySelector(".radioaddSettings");
const settingUpdate = document.querySelector(".updateSettings");
const settingCalltotalElem = document.querySelector(".callTotalSettings");
const settingSmstotallElem = document.querySelector(".smsTotalSettings");
const settingTotalElem = document.querySelector(".final");
const costperCallelem = document.querySelector(".callCostSetting");
const costperSmselem = document.querySelector(".smsCostSetting");
const warningValueelem = document.querySelector(".warningLevelSetting");
const dangerValueelem = document.querySelector(".criticalLevelSetting");

var settingCalltotal = 0;
var settingSmstotal = 0;
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var dangerLevel = 0;

function ffsettings() {
    function callSettingsTotal() {
        return parseFloat(document.querySelector(".callCostSetting").value);
    }
    function smsSettingsTotal() {
        return parseFloat(document.querySelector(".smsCostSetting").value);
    }
    function theWarningLevel() {
        return parseFloat(document.querySelector(".warningLevelSetting").value);
    }
    function theCriticalLevel() {
        return parseFloat(document.querySelector(".criticalLevelSetting").value);
    }
    return {
        callSettingsTotal,
        smsSettingsTotal,
        theWarningLevel,
        theCriticalLevel,
    }
}

settingUpdate.addEventListener('click', function() {
    settingTotalElem.classList.remove("danger");
    settingTotalElem.classList.remove("warning");
    var costperCall = parseFloat(costperCallelem.value);
    if (costperCall != 0) {
        callCost = costperCall;
        settingCalltotal = 0;
    }
    var costperSms = parseFloat(costperSmselem.value);
    if (costperSms != 0) {
        smsCost = costperSms;
        settingSmstotal = 0;
    }

    var warningValue = parseFloat(warningValueelem.value);
    if (warningValue != callCost - smsCost) {
        warningLevel = warningValue;
    }
    var dangerValue = parseFloat(dangerValueelem.value);
    if (dangerValue != callCost - smsCost) {
        dangerLevel = dangerValue;
    }

});

addbtnsettings.addEventListener('click', function() {
    const checkedRadioBtnSettings = document.querySelector(".billItemTypeWithSettings:checked");
    var inputItem = checkedRadioBtnSettings.value;
    if (inputItem == "call") {
        settingCalltotal += callCost;
    }
    else if (inputItem == "sms") {
        settingSmstotal += smsCost;
    }
    settingCalltotalElem.innerHTML = settingCalltotal.toFixed(2);
    settingSmstotallElem.innerHTML = settingSmstotal.toFixed(2);
    var settingTotal = settingCalltotal + settingSmstotal;
    var number = settingTotal.toFixed(2);


    if (settingTotal >= warningLevel && settingTotal < dangerLevel) {
        settingTotalElem.classList.add("warning");
    }
    else if (settingTotal >= dangerLevel) {
        settingTotalElem.classList.add("danger");
        number = dangerLevel;
    }
    settingTotalElem.innerHTML = "R" + number;

});
