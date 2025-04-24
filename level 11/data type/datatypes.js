// Different data types
let myString = "Hello, world!";         // String
let myNumber = 100;                     // Number
let myBoolean = true;                   // Boolean
let myNull = null;                      // Null
let myUndefined;                        // Undefined (not assigned)
let myObject = { name: "Vignesh", age: 22 }; // Object

// Using typeof operator
console.log("Type of myString:", typeof myString);       // string
console.log("Type of myNumber:", typeof myNumber);       // number
console.log("Type of myBoolean:", typeof myBoolean);     // boolean
console.log("Type of myNull:", typeof myNull);           // object (this is a known quirk in JS)
console.log("Type of myUndefined:", typeof myUndefined); // undefined
console.log("Type of myObject:", typeof myObject);       // object

// String to number conversion
let str = "123";
let convertedNumber = parseInt(str);
console.log("Converted number:", convertedNumber);       // 123
console.log("Type of convertedNumber:", typeof convertedNumber); // number
