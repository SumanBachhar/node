// spread operater
const person = {
  name: "John",
  age: 34,
  class: 10,
};
const person2 = { ...person };
console.log(person2);

// Rest Operators
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3));

// destructuring
const user = {
  name: "John",
  age: 34,
  class: 10,
};

const printName = (userName) => {
  console.log(userName.name);
};
printName(user);

const { name, age } = person;
console.log(name, age);

const hobbies = ["Sports", "Coocking"];
const [hobby1, hobbi2] = hobbies;
console.log(hobby1, hobbi2);

setTimeout(() => {
  console.log("Timer is done");
}, 5000);
