//obects in js are like structures in C.. sued to store multiple values with a key value.. ki like ek person ki details store karni hai for eg, toh we store pehle name, then age, then identity type, then identity number, then gender AT PARTICULAER PLACES in a set of info...
var details=["tanaya", 19, "voter id", 234567, "female"]
// in details, another person may save their info like: var details =[male, "Varun", 19, "pan card", 123456]
//so to avoid aise MISPLACE Of info, we use MAPS or KEY VALUES to store particular values at particular places. (hash maps work similar way)
// so for eg 'x ' is an object
let x={
    name: "Tanaya ",
    age: 19,
    id_type: "voter id",
    id: 234567, 
    gender: "female"
};
console.log(x)
console.log(x.age)

for (const key in x) {
    if (Object.prototype.hasOwnProperty.call(x, key)) {
        console.log(key,x[key]) 
    }
}