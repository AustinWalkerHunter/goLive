var user = "Unknown Owl";
var score = 0;

function start() {
    document.getElementById('player').innerHTML = user;
    user = document.getElementById('username').value;
    document.getElementById('score').innerHTML = score;
    if(document.getElementById('username').value != ""){
        document.getElementById('name').innerHTML = user;
        document.getElementById('player').innerHTML = user;
    }
    scoreBoard.style.display = "block";
    intro.style.display = "none";
    q1.style.display = "block";
}


function checkQ1() {
    var x = document.getElementById("check1");
    if(x.checked == true){
        score += 10;
        document.getElementById('modal').style.backgroundColor = 'rgba(0, 171, 0, 0.42)';
        document.getElementById('q1Answer').innerHTML = "Correct! +10 Points";
        document.getElementById('q1Response').innerHTML = "Good work, keep going!";
        document.getElementById('score').innerHTML = score;
    }
    else{
        document.getElementById('modal').style.backgroundColor = 'rgba(255, 0, 2, 0.75)';
        document.getElementById('q1Answer').innerHTML = "Wrong!";
        document.getElementById('q1Response').innerHTML = "Better luck next time!";
    }
}
function question1() {
    q1.style.display = "none";
    q2.style.display = "block";
}


function checkQ2() {
    var x = document.getElementById("check2");
    if(x.checked == true){
        score += 5;
        document.getElementById('modal2').style.backgroundColor = 'rgba(0, 171, 0, 0.42)';
        document.getElementById('q2Answer').innerHTML = "Correct! +5 Points";
        document.getElementById('q2Response').innerHTML = "Good work, keep going!";
        document.getElementById('score').innerHTML = score;
    }
    else{
        document.getElementById('modal2').style.backgroundColor = 'rgba(255, 0, 2, 0.75)';
        document.getElementById('q2Answer').innerHTML = "Oof, that was an easy one...";
        document.getElementById('q2Response').innerHTML = "Better luck next time!";
    }
}
function question2() {
    q2.style.display = "none";
    q3.style.display = "block";
}

function checkQ3(){
    var x = document.getElementById("check3").value;
    if(x == 25){   
        score += 15;
        document.getElementById('modal3').style.backgroundColor = 'rgba(0, 171, 0, 0.42)';
        document.getElementById('q3Answer').innerHTML = "Correct! +15 Points";
        document.getElementById('q3Response').innerHTML = "Nice!";
        document.getElementById('score').innerHTML = score;
    }
    else{
        document.getElementById('modal3').style.backgroundColor = 'rgba(255, 0, 2, 0.75)';
        document.getElementById('q3Answer').innerHTML = "Ouch...";
        document.getElementById('q3Response').innerHTML = "Better luck next time!";
    }
}


function question3() {
    q3.style.display = "none";
    q4.style.display = "block";
}

function checkQ4(){
    var v = document.getElementById("A1");
    var u = document.getElementById("A2");
    var x = document.getElementById("A3");
    var y = document.getElementById("A4");
    if(u.checked == true && v.checked == true && x.checked ==true && y.checked == true){
        score += 15;
        document.getElementById('modal4').style.backgroundColor = 'rgba(0, 171, 0, 0.42)';
        document.getElementById('q4Answer').innerHTML = "Correct! +15 Points";
        document.getElementById('q4Response').innerHTML = "Nice!";
        document.getElementById('score').innerHTML = score;    
    }
    else{
        document.getElementById('modal4').style.backgroundColor = 'rgba(255, 0, 2, 0.75)';
        document.getElementById('q4Answer').innerHTML = "Ouch...";
        document.getElementById('q4Response').innerHTML = "Better luck next time!";
    }
}
function question4() {
    done();
    q4.style.display = "none";
    finished.style.display = "block";
}


function done() {
    var total = score/45;
    document.getElementById('finalScore').innerHTML = score;

    if(total == 1){
        document.getElementById('grade').innerHTML = "+A";
    }
    else if(total <= .59){
        document.getElementById('grade').innerHTML = "F";
    }
    else if(total >= .6 && total <= .69){
        document.getElementById('grade').innerHTML = "D";
    }
    else if(total >= .7 && total <= .79){
        document.getElementById('grade').innerHTML = "C";
    }
    else if(total >= .9 && total <= .99){
        document.getElementById('grade').innerHTML = "A";
    }
    else{
        document.getElementById('grade').innerHTML = "B";

    }
}

function showCodeForQuiz() {
    quizCode.style.display = "block";
}
