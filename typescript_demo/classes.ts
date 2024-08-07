class Employee {
    #id: number;
    protected name: string;
    address: string;

    get empId() : number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount() : number {
        return 50;
    }

    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress() : string {
        return `${this.name} stays at ${this.address}`;
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is manager at ${this.address}`;
    }
}

let john = new Employee(1, "John", "Highway 71");
let michael = new Manager(2, "Michael", "New York")
let address = michael.getNameWithAddress();
console.log(address);
Employee.getEmployeeCount();
michael.empId = 100;
console.log(michael.empId);

