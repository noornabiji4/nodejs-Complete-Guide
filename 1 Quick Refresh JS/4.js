// push method
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Programing')
console.log(hobbies);


// spread operators
const hobbies = ['Sports', 'Cooking'];
const coppiedArray = [...hobbies];
console.log(coppiedArray)

// rest operator 
const toArray =(arg1,arg2,arg3)=>{
    return [arg1,arg2,arg3];
}
console.log(toArray(1, 2, 3));//can't adding 4 to rest operator 

// changing method to write rest and spread operators
const allArray = (...args) =>{
    return args;
}
console.log(toArray(1,2,3,4)); // merg multiple array in our objects 
