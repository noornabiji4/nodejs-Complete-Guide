var name = "Noor";
var age = 24;
var hobbies = true;

function user(userName, userAge, userHobbies) {
    return ('My name is ' + userName +
        ', age is ' + userAge +
        ' and the user has hobbies ' +userHobbies);
}
console.log(user(name,age,hobbies))