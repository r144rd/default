

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
}