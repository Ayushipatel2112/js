/*  Data Type :

        1.Number , 2.String , 3.Boolean , 4.Symbol , 5.Null , 6.Undefined , 7.Bigint , 8.Object , 9.Array , 10.Function   */
        
// Number : 
let age = 25
let pi = 3.14

// String :
let FirstName = "Ayushi"
let LastName = "Dalsaniya"

// Boolean : 
let isStudent = true
let isLoggedin = false

// Symbol : 
let id = Symbol("@")

// Null :
let empty = null

// Undefined : 
let unassign;
let temprature = undefined

// Bigint : 
let Bigint = 1212222113131321313131313

// Function
function sum()
{
    const a = 10;
    const b = 20;
    const c = a + b;
    return sum(c)
}

// Array : 
let car = ["BMW","TOYOTA","KIA"]

// Object : 
let Person = {
    fname : "ayushi",
    lname : "Patel",
    city : "Surat"
}
// Display all Datatype : 

console.log("Number : ",age,pi);
console.log("String : ",FirstName,LastName);
console.log("Boolean : ",isLoggedin);
console.log("Symbol : ",id);
console.log("Null : ",empty);
console.log("Undefined : ",temprature);
console.log("Bigint : ",Bigint);
console.log("Function : ",sum);
console.log("Array : ",car);
console.log("Object : ",Person);
