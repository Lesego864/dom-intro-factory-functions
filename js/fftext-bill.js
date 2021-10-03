
const billTypeTextElement = document.querySelector(".billTypeText");
const addToBillBtnElement = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".red");

var textTotalCalls = 0;
var textTotalSms = 0;

function textBills() {

    function callsTextBill() {
        textTotalCalls += 2.75;
    }
    function smsTextBill() {
        textTotalSms += 0.75;
    }
    function grandTotalText() {
        return (textTotalCalls + textTotalSms).toFixed(2);
    }

    function totalCalls() {
        return textTotalCalls.toFixed(2);
    }
    function totalSms() {
        return textTotalSms.toFixed(2);
    }
    function action(val) {
        if (val ==="call" || val === "Call" || val === "CALL") {
            callsTextBill();
        }
        else if (val ==="sms" || val === "Sms" || val === "SMS") {
            smsTextBill();
        }
    }
    return {
        callsTextBill,
        smsTextBill,
        grandTotalText,
        totalCalls,
        totalSms,
        action,
    }
}
const billText = textBills();

addToBillBtnElement.addEventListener('click', function() {
    var billTypeEntered = billTypeTextElement.value.trim();
    billText.action(billTypeEntered)

    callTotalOneElement.innerHTML = textTotalCalls.toFixed(2);
    smsTotalOneElement.innerHTML = textTotalSms.toFixed(2);
    var totalCost = textTotalCalls + textTotalSms;
    var number = totalCost.toFixed(2);

    if (totalCost >= 30 && totalCost < 50) {
        totalOneElement.classList.add("warning");
    }
    else if (totalCost >= 50) {
        totalOneElement.classList.add("danger");
    }
    totalOneElement.innerHTML = "R" + number;

});



