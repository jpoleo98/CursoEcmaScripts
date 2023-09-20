const fnAsync = () =>{

    return new Promise((resolve, reject) => {
        true 
        ? setTimeout(()=>resolve('Async!!'),5000)
        : reject(new Error('Error!'));
    })
} 

const fnanother = async() =>{
    const something = await fnAsync();
    console.log(something);
    console.log('hello');
}

console.log('before');
fnanother();
console.log('after');