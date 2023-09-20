async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const others = anotherGenerator();

console.log(others.next().then(Response => console.log(Response.value)));

console.log(others.next().then(Response => console.log(Response.value)));

console.log(others.next().then(Response => console.log(Response.value)));

console.log('Hello');

async function arrayOfNames(array){
    for await(let value of array){
        console.log(value);
    }
}

const names = arrayOfNames(['Jose','Luis','Oscar'])