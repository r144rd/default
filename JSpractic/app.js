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



document.getElementById('nav').onmouseover = function(event) {
    let target = event.target;
    if (target.className == 'menu-item') {
        let s = target.getElementsByClassName('submenu');
        closeMenu();
        if (s.length > 0) {
            s[0].style.display = 'block';
        }
    }
}

document.onmouseover = function(event) {
    let target = event.target
    console.log(event.target);
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}

function closeMenu() {
    let menu = document.getElementById('nav');
    let subm = document.getElementsByClassName('submenu');

    for (let i = 0; i < subm.length; i++) {
        subm[i].style.display = 'none';
    }
}


let tabsHeader;
let tabsContent;
window.onload = function () {
    tabsContent = document.getElementsByClassName('tabContent');
    tabsHeader = document.getElementsByClassName('tabHeader');
    for (let i = 0; i < tabsHeader.length; i++) {
        tabsHeader[i].onclick = TabHeaderClick;
    }
};
function TabContentOnOff(index, show) {
    tabsContent[index].style.display = show === true ? "block" : "none";
}
function TabHeaderOnOff(index, enable) {
    if (enable) {
        tabsHeader[index].classList.add('active');
    }
    else {
        tabsHeader[index].classList.remove('active');
    }
}
function TabHeaderClick(event) {
    let target = event.target;
    let IsEnable;
    for (var i = 0; i < tabsHeader.length; i++) {
        IsEnable = (tabsHeader[i] == target);
        TabHeaderOnOff(i, IsEnable);
        TabContentOnOff(i, IsEnable);
    }
}




let modal = document.getElementById('myModal');
let btn = documnet.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];


btn.onclick = function(){
    modal.style.display = "block";

}
span.onclick = function(){
    modal.style.display = "none";
}

