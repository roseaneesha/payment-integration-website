
function processPayment() {
        var options = {
        "key": "rzp_test_2eSoNsSQghxAo9", // Enter the Key ID generated from the Dashboard
        "amount": amountt(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Save panda",
        "description": "Test Transaction",
        "image": "../images/google-panda-circular-symbol.png",
        // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response){
            savetoDB(response);
        },
        "prefill": {
            "name": "",
            "email": "",
            "contact": ""
        },
        "notes": {
            "address": "save pOnda"
        },
        "theme": {
            "color": "#000"
        }
    };
    var propay = new Razorpay(options);
    propay.open();
    
}
function savetoDB(response) {
    console.log('amen');
    var payRef= firebase.database().ref('payment');
    // payRef.child('3432434').set
}
function amountt() {
    var amt=document.querySelector('input').value;
    amt=amt*100;
    console.log(amt);
    return amt;
    
}