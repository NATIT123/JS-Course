///Values and Variables

const country = "VietNam";
const continent = "Asia";
const population = "98";

console.log(
  `Country:${country} - Continent:${continent} - Population:${population}`
);

//Data Types
const isIsland = false;
const language = "Vietnamese";

console.log(
  `Country:${country} - Continent:${continent} - Population:${population} - isIsland:${isIsland} - Language:${language}`
);

//Let,const,var
// const :can not change value and must be assigned value
// let,var :can change value

//Basic Operators
const halfPopulation = population / 2;
console.log(`Half Population:${halfPopulation} `);

const increaseHalfPopulation = halfPopulation + 1;
console.log(`Increase HalfPopulation:${increaseHalfPopulation}`);

const FinlandPopluation = 33;
console.log(
  `VietNam has more people than Finland:${population > FinlandPopluation}`
);

const description =
  "VietNam is in Asia, and its 98 million people speak vietnamese";

console.log(`Description:${description}`);

const descripton_literal = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

//Taking Decisions: if / else Statements
// Coding Challenge #1
function caculateBMI(mass, height) {
  const BMI = mass / Math.pow(height, 2);
  console.log(`Mass:${mass}- Height:${height} - BMI:${BMI}`);
  return BMI;
}

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = caculateBMI(massMark, heightMark);
const BMIJohn = caculateBMI(massJohn, heightJohn);

console.log(
  BMIMark > BMIJohn
    ? "Mark has a higher BMI than John"
    : "John has a higher Mark than John"
);

//Coding Challenge #2:
console.log(
  BMIMark > BMIJohn
    ? `Mark's BMI(${BMIMark}) a higher BMI(${BMIJohn}) than John`
    : `John's BMI(${BMIJohn}) a higher BMI(${BMIMark}) than Mark`
);

///Type Conversion and Coercion

//When using '+' : string otherwise normal

console.log("123" < 57);

///5 falsy values: 0 ,'',undefined, null, NaN
