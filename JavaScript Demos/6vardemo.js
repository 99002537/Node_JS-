class Person{
    constructor(name,city){
        this.city =city;
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
}
var person = new Person();
person.setName('Marley');
console.log(person.getName());

class Person1{
    constructor(name,city){
        this.city =city;
        this.name = name;
    }
    get firstname(){
        return this.name;
    }
    set firstname(name){
        this.name = name;
    }
}
var person = new Person1('Raju');
console.log(person.firstname);
person.firstname='Marley';
console.log(person.firstname);