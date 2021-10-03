const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
const rCallsTotalElement = document.querySelector(".callTotalTwo");
const rSmsTotalElement = document.querySelector(".smsTotalTwo");
const totalCostElement = document.querySelector(".orange");

var radioTotalCalls = 0;
var radioTotalSms = 0;

function radioBills() {

    function callRadioBill() {
        radioTotalCalls += 2.75;
    }
    function smsRadioBill() {
        radioTotalSms += 0.75;
    }
    function grandTotalRadio() {
        return (radioTotalCalls + radioTotalSms).toFixed(2);
    }

    function totalRadioCalls() {
        return radioTotalCalls.toFixed(2);
    }
    function totalRadioSms() {
        return radioTotalSms.toFixed(2);
    }
    function action(val) {
        if (val === "call" || val === "Call" || val === "CALL") {
            callRadioBill();
        }
        else if (val === "sms" || val === "Sms" || val === "SMS") {
            smsRadioBill();
        }
    }
    return {
        callRadioBill,
        smsRadioBill,
        grandTotalRadio,
        totalRadioCalls,
        totalRadioSms,
        action,
    }
}
const RadioBill = radioBills();

radioBillAddBtnElement.addEventListener('click', function() {
    const checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");
    var billItemType = checkedRadioBtn.value;
    RadioBill.action(billItemType)

    rCallsTotalElement.innerHTML = radioTotalCalls.toFixed(2);
    rSmsTotalElement.innerHTML = radioTotalSms.toFixed(2);
    var radioTotal = radioTotalCalls + radioTotalSms;
    var number = radioTotal.toFixed(2);

    if(radioTotal >= 30 && radioTotal < 50) {
    totalCostElement.classList.add("warning");
}
    else if (radioTotal >= 50) {
    totalCostElement.classList.add("danger");
    number = 50;
}
totalCostElement.innerHTML = "R" + number;
});


