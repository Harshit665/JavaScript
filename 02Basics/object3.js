// destructuring of Objects

const course = {
  coursename: "Python",
  prise: 1000,
  teacher: "bill gates",
};
// now if we want to access the properties or values of the object then we have to lenghty code to access the properties everytime sot to make it little shorter we can use destructuring

const { coursename, prise, teacher: T } = course;
console.log(coursename, prise, T);

// what is JSON ?? ********************************************************

// JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON is often used to transmit data between a server and a web application as an alternative to XML it looks like

/*
{
    "coursename": "Python",
    "prise": 1000,
    "teacher": "bill gates"
}
    */
