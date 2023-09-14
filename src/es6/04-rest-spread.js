//array Destructuting

let fruits = ['Apple','Banana','Kiwi'];

let [a,b] = fruits;

console.log(a,b);

// Object Destructuring

let user = {
    username: 'jose',
    age:24
};

let {username,age} = user;

console.log(username);

// spread operator

let person = {
    name:'Jose',
    age:24
}
let country = 'VEN';

let data = {...person, country};

console.log(data);

let {name,age} = data;
console.log(name,age);

//rest 

function sum(num,...values){
    console.log(values);
    console.log(num+values[0]);
    return num+values[0]
}

sum(1,2,3);