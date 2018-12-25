//this function is not work 
// const person ={
//     name:"Noor",
//     age:29,
//     greet:()=>{
//         console.log('Hi, I am '+this.name )
//     }
// }
// person.greet();

// there are two methods to declare object function output
// 1 
const person = {
    name: "Noor",
    age: 29,
    greet:function() {
        console.log('Hi, I am ' + this.name)
    }
}
person.greet();

// 2
// const person = {
//     name: "Noor",
//     age: 29,
//     greet() {
//         console.log('Hi, I am ' + this.name)
//     }
// }
// person.greet();
