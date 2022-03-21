const fs = require('fs')
const path = require("path");

// fs.mkdir(path.join(__dirname, 'main', 'online'),{recursive: true}, (err)=>{
// if(err){
//     console.log(err);
//     throw err;
// }
// })


// fs.mkdir(path.join(__dirname, 'main', 'inPerson'),{recursive: true}, (err)=>{
//     if(err){
//         console.log(err);
//         throw err;
//     }
// })


// const onlineUsers = [
//     {name: "Andrii", age: 22, city: "Lviv"},
// ]
//
// const inPersonUsers = [
//     {name: "Anna", age: "32", city: "Lviv"},
// ]
//
// for (const i of onlineUsers) {
//
//     fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), `name ${i.name}\n age ${i.age}\n city ${i.city}\n`, (err) => {
//         if (err) {
//             console.log(err)
//             throw err
//         }
//     })
//
// }
//
// for (const i of inPersonUsers) {
//
//     fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `name ${i.name}\n age ${i.age}\n city ${i.city}\n`, (err) => {
//         if (err) {
//             console.log(err)
//             throw err
//         }
//     })
//
// }


const relocation = () => {

    fs.rename(path.join(__dirname, 'main', 'online', 'online.txt'),
        path.join(__dirname, 'main', 'inPerson', 'online.txt',), (err) => {
            if (err) {
                console.log(err);
            }
        })

    fs.rename(path.join(__dirname,'main','inPerson','inPerson.txt'),
        path.join(__dirname,'main','online','inPerson.txt'),(err)=>{
        if(err){
            console.log(err);
        }
    })

}
relocation()