// Clases

class User{
    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }

    #getName() {
        return this.name;
    }

    setName(name){
        return this.name = name;
    }

    getAge(){
        return this.age;
    }

    setAge(age){
        return this.age = age;
    }

    getCountry(){
        return this.country;
    }

    setCountry(country){
        return this.country = country
    }

    mensaje(){
        return `Usuario Creado: ${this.name} posee ${this.age} proviene de ${this.country}`;
    }

}

let newUser = new User('Jose',24,'VEN');

console.log(newUser.mensaje());