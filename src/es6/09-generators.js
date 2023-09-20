//Generators

function* iterar(array){

    for(let value of array){
        yield value;
    }

}

const it = iterar(['Jose','David','Sujey','Jesus']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);