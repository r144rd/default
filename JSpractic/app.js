function checkedorno(){

let checkbox = document.getElementById('check');
if(checkbox.checked){
    console.log('Выбран')
}else{
    console.log("элемент не выбран")
}

}

function checkinp(){
    let input = document.getElementsByName('r1')
    // if(input.checked){
    //     console.log('schekded input')
    // }else{
    //     console.log('not checked')
    // }

    for(let i= 0 ;i < input.length;i++ ){
        if(input[i].checked){
            console.log('checkded   ' + i)
        }
    }
}



function selected(){
let sel = document.getElementById('select-1').selectedIndex;
let options = document.getElementById('select-1').options
    console.log('Selected options ' + options[sel].text)


}


function funfun(){
    let rng =document.getElementById('range')
    let par = document.getElementById('first')
    par.innerHTML = rng.value
    let div = getComputedStyle.getElementById('test')
    div.style.width = rng.value +'px'
}


function funrange(){
    let rtl = document.getElementById('rtl').value;
    let rtr = document.getElementById('rtr').value;
    let rbr = document.getElementById('rbr').value;
    let rbl = document.getElementById('rbl').value;
    let ttl = document.getElementById('ttl');
    let ttr = document.getElementById('ttr');
    let tbr = document.getElementById('tbr');
    let tbl = document.getElementById('tbl');


    let block = document.getElementById('block');
    ttl.value = rtl;
    ttr.value = rtr;
    tbr.value = rbr;
    tbl.value = rbl;


    block.style.borderRadius = rtl+'px ' +rtr +'px ' +rbr+'px '+rbl+'px ' 
}



document.getElementById('nav').onmouseover = function(event){
    let target = event.target;
    if(target.className == 'menu-item'){
        let s = target.getElementsByClassName('submenu')
        closeMenu();
        s[0].style.display = 'block'
    }
}


document.onmouseover =function(event){
    let target = event.target
    console.log(event.target)
    if(target.className != 'menu-item' && target.className !='submenu'){
        closeMenu()
    }
}

function closeMenu(){
    let menu = getElementById('nav') ;
    let subm = getElementsByClassName('submenu');

    for(let i = 0 ; i < subm.length;i++ ){
        subm[i].style.display = 'none';

    }

}