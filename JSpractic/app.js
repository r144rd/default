

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



// document.getElementById('nav').onmouseover = function(event) {
//     let target = event.target;
//     if (target.className == 'menu-item') {
//         let s = target.getElementsByClassName('submenu');
//         closeMenu();
//         if (s.length > 0) {
//             s[0].style.display = 'block';
//         }
//     }
// }

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

// let modal = document.getElementById("myModal");
// let btn = document.getElementById("myBtn");
// let span = document.getElementsByClassName("close")[0];


// if (btn) { // проверка существования btn
//     console.log('lol kek ')
//     btn.onclick = function(){
//         modal.style.display = "block";
//     }
// }

// if (span) { // проверка существования span
//     span.onclick = function(){
//         modal.style.display = "none";
//     }
// }

// window.onclick = function(event){
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }



function myMove(){
    let elem = document.getElementById('myAnimation');
    let pos = 0;
    let id = setInterval(frame,10);
    function frame(){
        if(pos == 350){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos +'px';
            elem.style.left = pos +'px';
            console.log(pos)
        }
    }
}




let slideIndex = 1
showSlides(slideIndex)


function plusSlide(n){
    showSlides(slideIndex +=n)
}

function currentSlide(n){
    showSlides(slideIndex= n)
}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("myslides")
    let dots = document.getElementsByClassName("dot")

    if(n <slides.length){
        slideIndex = 1; 
    }if(n<1){
        slideIndex = slides.length;

    }
    for(i =0; i<slides.length; i++){
        slides[i].style.display ="none"
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";



}




function searchfun(){
    let input,filter,ul,li,a,i;
    input = document.getElementById('searchinput')
    filter = input.value.toUpperCase();
    ul = document.getElementById("myul")
    li = ul.getElementsByTagName('li')

    for(i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            
        }else{
            li[i].style.display = "none"

        }
    }
}


function plus(){
    let num1,num2,result;
    num1 = document.getElementById('n1').value
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value
    num2 = parseInt(num2);
    
    result = num1 + num2 ;

    let out= document.getElementById('out').innerHTML ="Result ="+result



}


function minus(){
    let num1,num2,result;
    num1 = document.getElementById('n1').value
    num1 = parseInt(num1);
    num2 = document.getElementById('n2').value
    num2 = parseInt(num2);
    
    result = num1 - num2 ;

    let out= document.getElementById('out').innerHTML ="Result ="+result

}



let modal = document.getElementById('imgmodal');
let img= document.getElementById('myimg')
let modalimg = document.getElementById('img01')
let captiontext = document.getElementById('caption')

img.onclick = function(){
    modal.style.display = "block";
    modalimg.src = this.src;
    captiontext.innerHTML = this.alt;
}


let span = document.getElementsByClassName("close")[0]
span.onclick = function(){
    modal.style.display = "none";

}







function movemove(){
    let elem = document.getElementById('mybar')
    let width = 10;
    let id = setInterval(frame,30)
    function frame(){
        if(width>=100){
            clearInterval(id);
        }
        else{
            width++;
            elem.style.width = width + '%';
            document.getElementById('label').innerHTML = width*1 +'%';
        }
    }
}