

// function loadScript(src,callback){
//     let script = document.createElement('script')
//     script.src =src ;
//     script.onload = () => callback(script);
//     document.head.append(script)

// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     alert(`Здорово, скрипт ${script.src} загрузился`);
//     alert( _ ); // функция, объявленная в загруженном скрипте
//   });


// function fetchData(callback) {
//     setTimeout(() => {
//         const data = "Данные загружены";
//         callback(data);
//     }, 2000); // Имитация задержки в 2 секунды
// }

// function handleData(data) {
//     console.log(data);
// }




// let json ="{uncorectable json}";


// try{
//     let User = JSON.parse(json);
//     console.log(User.name)

// } catch(e){

//     console.log("sry error")
//     console.log(e.name)
//     console.log(e.message)


// }


// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=>
//         resolve("done"),1000
//     )
// })

// promise.then(
//     result=>console.log(result),
//     error =>console.log(error)
// )



// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       let script = document.createElement('script');
//       script.src = src;
  
//       script.onload = () => resolve(script);
//       script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
  
//       document.head.append(script);
//     });
//   }
  

//   let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

//   promise.then(
//     script => alert(`${script.src} загружен!`),
//     error => alert(`Ошибка: ${error.message}`)
//   );
  
//   promise.then(script => alert('Ещё один обработчик...'));


// new Promise (function(resolve,reject){
//   setTimeout(()=> resolve(1),1000)




// }).then(function(result){
//     console.log(result)
//      return result*2
// }).then(function(result){
//   console.log(result)
//   return result*2
// }).then(function(result){
//   console.log(result)
//   return result*2
// }).then(function(result){
//   console.log(result)
//   return result*2
// })

// let promise = new Promise(function(resolve,reject){
//   setTimeout(()=> resolve(1),1000);

// });


// promise.then(function(result){
//   console.log(result)
//   return result * 2 
// })

// promise.then(function(result){
//   console.log(result)
//   return result * 2 
// })

// promise.then(function(result){
//   console.log(result)
//   return result * 2 
// })



// new Promise (function(resolve,reject){
//   setTimeout(() => resolve(1),1000)

// }).then(function(result){
//   console.log(result)
//   return  new Promise(function(resolve,reject){
//     setTimeout(() => resolve(result * 2),1000)
//   })
// }).then(function(result){
//     console.log(result)

//     return new Promise(function(resolve,reject){
//       setTimeout(() => resolve(result *2), 1000)
//     })

// }).then(function(result){
//     console.log(result)
// })


// class Thenable{
//   constructor(num){
//     this.num = num

//   }
//   then(resolve,reject){
//     console.log(resolve)
//     setTimeout(()=> resolve(this.num *2),5000)

//   } 
// }

// new Promise(resolve => resolve(1))
// .then (result => {
//   return new Thenable(result)

// })  
// .then(console.log())



fetch('https://no-such-file.bla')
  .then(response =>response.json())
  .catch(err => onslotchange.log(err))








