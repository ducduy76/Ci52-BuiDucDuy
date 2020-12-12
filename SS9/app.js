
// let data=fetch("https://jsonplaceholder.typicode.com/users")
// console.log(data)
// setTimeout(function(){
// a=5
// function mul(){
// a=a*10
// }
// mul()
// console.log(a)
// },1000)

// console.log(a*10)

//cach1
// let data = fetch("https://jsonplaceholder.typicode.com/users").then(function (response) {

//     return response.json();
// }).then(function (dt) {
//     logName(dt)

// })
// function logName(dt) {
//     dt.forEach(function (user) {
//         console.log(user.name);
//     })
// }

// cach 2

async function getData(){
    let fetchData = await fetch("https://jsonplaceholder.typicode.com/users")
    let data=await fetchData.json();
    console.log(data)
}

getData()