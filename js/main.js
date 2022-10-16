let inp = document.querySelector('.age');
let btn = document.querySelector('.sub');
let age = 17;

let javaInp = document.querySelector('.java')
let javaSub = document.querySelector('.java__sub')
let java = "JavaScript";

btn.addEventListener('click', () => {
new Promise((resolve, reject) => {
    if(inp.value == age) {
        resolve('You right(Вы угадали:)')
    }else {
        reject('Dont right(Вы не угадали:(')
    }
}).then((Response) => console.log(Response))
.catch((er) => console.log(er))
})

javaSub.addEventListener('click', () => {
    new Promise((resolve, reject) => {
        if(javaInp.value == java.length) {
            resolve(alert('Правильно!'))
        }else{
            reject(alert('Не правильно'))
        }
    }).then((response) => console.log(response))
    .catch((er) => console.log(er))
})