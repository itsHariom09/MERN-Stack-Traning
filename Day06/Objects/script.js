let nam=document.getElementById("name");
let hobbies=document.getElementById("hobbies");
let spn=document.querySelector("span");
const user={
    name:"Hariom",
    age:22,
    occupation:"Software Engineer",
    hobbies:["video Game","Drawing","PhotoGraphy","Graphic Design"]
}
nam.textContent += user.name;

async function getHobbies(){
    for(let i=0;i<user.hobbies.length;i++){
        await new Promise(resolve => setTimeout(resolve, 1000));
        spn.textContent=user.hobbies[i];
    }
}
getHobbies();