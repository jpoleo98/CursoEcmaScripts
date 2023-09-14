//Promise 

const anotherFunction = () =>{
    return new Promise((resolve,reject)=>{
        if(false){
            resolve('Bien');
        }else{
            reject('Mal');
        }
    })
}

/* Then */

anotherFunction().then(Response => console.log(Response))
                .catch(err => console.log(err));