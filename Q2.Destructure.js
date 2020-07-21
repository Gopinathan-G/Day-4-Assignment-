const student = {
    name: "Helsinki",
    age:24,
    projects: {
        dicegame: "Two players dice game using javascript"
    }
}

console.log(student.name);
console.log(student.age);
console.log(student.projects.dicegame);

const { name,age,projects} =student;
console.log(name,age,projects.dicegame);