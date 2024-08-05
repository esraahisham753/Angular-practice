"use strict";
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
let john = new Employee(1, "John", "Highway 71");
console.log(john);
