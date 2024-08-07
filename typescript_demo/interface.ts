export interface User {
    name: string;
    id: number;
    age?: number;
    email: string;
}

let {name: username, id, email: userlogin} : User = {
    name: "John",
    id: 1,
    email: "acs@gmail.com"
};


interface Employees extends User {
    salary: number;
}

let john : Employees = {
    name: "John",
    id: 2,
    email: "John@gmail.com",
    salary: 1000
};

export interface Login {
    login() : User;
}

let [user1, user2, ...restUers] : User[] = [
    {name: "John", id: 1, email: ""},
    {name: "John1", id: 2, email: ""},
    {name: "John2", id: 3, email: ""},
    {name: "John3", id: 4, email: ""},
    {name: "John4", id: 5, email: ""},
];

console.log(user1);
console.log(user2);
console.log(restUers);
