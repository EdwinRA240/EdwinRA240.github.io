let users = [
  {
    id: 0,
    name: "John",
    email: "john@example.com",
    password: "123456",
    saldo: 320
  },
  {
    id: 1,
    name: "Jane",
    email: "jane@example.com",
    password: "123456",
    saldo: 180
  },
  {
    id: 2,
    name: "Doe",
    email: "doe@example.com",
    password: "123456",
    saldo: 640
  },
  {
    id: 3,
    name: "Rachan",
    email: "rachan@example.com",
    password: "123456",
    saldo: 490
  },
  {
    id: 4,
    name: "jane",
    email: "jane@example.com",
    password: "123456",
    saldo: 500
  },
  { 
    id: 5,
    name: "esmeralda",
    email: "esmeralda@example.com",
    password: "123456",
    saldo: 900
  }
];

//Update at localStorage
if (localStorage === undefined) {
  localStorage.setItem("allUsers", JSON.stringify(users));
}; 
// console.log(jsonUsers); /* JSON */