const calculateBtnElement = document.querySelector(".calculateBtn");
const billStringElement = document.querySelector(".billString");
const newStyle = document.querySelector(".total");

var billTotal = 0;
function callAndSms() {
    function callsMade() {
        billTotal += 2.75;
    }
    function smsMade() {
        billTotal += 0.75;
    }
    function action(val) {
        if (val === "call" || val === "Call" || val === "CALL") {
            callsMade();
        }
        else if (val === "sms" || val === "Sms" || val === "SMS") {
            smsMade();
        }
    }
    function grandTotal() {
        return billTotal;
    }

    return {
        callsMade,
        smsMade,
        action,
        grandTotal,
    }
}
const SmsandCalls = callAndSms();


function calculateBtnClicked() {

    var billString = billStringElement.value;
    var billItems = billString.split(",");
    var billTotal = 0;
    for (var i = 0; i < billItems.length; i++) {
        var billItem = billItems[i].trim();
        if (billItem === "call" || billItem === "Call" || billItem === "CALL") {
            billTotal += 2.75;
        }
        else if (billItem === "sms" || billItem === "Sms" || billItem === "SMS") {
            billTotal += 0.75;
        }
        SmsandCalls.action(billItem)
    }
    newStyle.innerHTML = "R"+ billTotal.toFixed(2);
    newStyle.classList.remove("warning");
    newStyle.classList.remove("danger");
    if (billTotal >= 20 && billTotal<30) {
        newStyle.classList.add("warning");
    }
    else if (billTotal >= 30) {
        newStyle.classList.add("danger");
    }
}

calculateBtnElement.addEventListener('click', calculateBtnClicked);

