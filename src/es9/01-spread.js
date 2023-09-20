const user = {
    name:'Jose',
    age:24,
    country:'VEN',
}

const {name, ...values} = user;
console.log(name);
console.log(values);