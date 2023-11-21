


let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];


let userpetya = users.find(users => users.id === 2);

if (userpetya) {
    console.log( userpetya);
}



let filterUsers = users.filter(users => users.id > 1);

console.log(filterUsers);
