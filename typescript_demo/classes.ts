import { Login, User } from './interface';

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements Login {
    #id: number;
    protected name: string;
    address: Address;

    get empId() : number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount() : number {
        return 50;
    }

    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress() : string {
        return `${this.name} stays at ${this.address}`;
    }

    login(): User {
        return {
            name: "John",
            id: 1,
            email: ""
        };
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is manager at ${this.address}`;
    }
}

let michael = new Manager(2, "Michael", {
    street: "ABC",
    "city": "Manhaten",
    "state": "Newyork",
    "pin": "11322"
});
let address = michael.getNameWithAddress();
console.log(address);
Employee.getEmployeeCount();
michael.empId = 100;
console.log(michael.empId);

