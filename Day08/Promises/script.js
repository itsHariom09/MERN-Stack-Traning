console.log("hello");
// const persson={
//     name:"Hariom",
//     age:23,
//     isStudent:true,
//     hobbies:["reading","writing","playing"],
// }

function jsonDemo(){
    const person={
        name:"Hariom",
        age:23,
        isStudent:true,
        hobbies:["reading","writing","playing"],
    }
    console.log(person);
    console.log(typeof(person));

    //convert object to jsonString
    const jsonString=JSON.stringify(person);
    console.log("Stringified JSON " ,jsonString);
    console.log(typeof(jsonString));
    console.log(jsonString.toUpperCase());
    console.log(jsonString.substring(9,15));

    //convert string to object
    const parseObj=JSON.parse(jsonString);
    console.log(parseObj);
}
