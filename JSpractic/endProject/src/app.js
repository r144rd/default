console.log("JS is connected")

let cal = document.getElementById("calcu"); 
function dis(val) { 
    document.getElementById("result").value += val 
} 

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

function solve() { 
    let x = document.getElementById("result").value 
    let y = math.evaluate(x) 
    document.getElementById("result").value = y 
} 

function clr() { 
    document.getElementById("result").value = "" 
} 

cal.onkeyup = function(event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
} 

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];


if (btn) { // проверка существования btn
    console.log('lol kek ')
    btn.onclick = function(){
        modal.style.display = "block";
    }
}

if (span) { // проверка существования span
    span.onclick = function(){
        modal.style.display = "none";
    }
}

window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



