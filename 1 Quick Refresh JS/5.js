// destructuring
const person = {
    name: "Noor",
    age: 29,
    greet: function () {
        console.log('Hi, I am ' + this.name)
    }
}

const obj = ({name })=>{
    console.log(name)
};
obj(person);

const { name , age } = person;
console.log(name,age );

const hobbies  = ['Sports','Programing']
const [hobby1,hobby2]= hobbies;
console.log(hobby1,hobby2)