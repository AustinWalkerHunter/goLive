console.log("Hello from the Console, this tool can be helpful for debugging!");
function add(a, b){
    if(a == "" || b == ""){
        document.getElementById('addError').innerHTML = "Please enter numbers for calculation.";
        document.getElementById('addResult').innerHTML = "";
    }
    else {
        document.getElementById('addResult').innerHTML = "Result = " +(parseInt(a) + parseInt(b));
        document.getElementById('addError').innerHTML = "";
    }
}

function sub(a, b){
    if(a == "" || b == ""){
        document.getElementById('subError').innerHTML = "Please enter numbers for calculation."
        document.getElementById('subResult').innerHTML = "";
    }
    else{
        document.getElementById('subResult').innerHTML = "Result = " +(parseInt(a) - parseInt(b));
        document.getElementById('subError').innerHTML = "";
    }
}

function multiply(a, b){
    if(a == "" || b == ""){
        document.getElementById('multError').innerHTML = "Please enter numbers for calculation."
        document.getElementById('multResult').innerHTML = "";
    }
    else{
        document.getElementById('multResult').innerHTML = "Result = " +(parseInt(a) * parseInt(b));
        document.getElementById('multError').innerHTML = "";
    }
}

function divide(a, b){
    if(a == "" || b == ""){
        document.getElementById('divError').innerHTML = "Please enter numbers for calculation."
        document.getElementById('divResult').innerHTML = "";
    }
    else{
        document.getElementById('divResult').innerHTML = "Result = " +(parseInt(a)/parseInt(b));
        document.getElementById('divError').innerHTML = "";
    }
}