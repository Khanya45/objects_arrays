let person = {
  p1: { name: "Khanya", surname: "Gope", age: 18 },
  p2: { name: "Johnny", surname: "Andrade", age: 30 },
  p3: { name: "Donald", surname: "Trump", age: 74 },
};

person.p1.name = "Ghiyaath";
console.log(person.p1.name);

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
