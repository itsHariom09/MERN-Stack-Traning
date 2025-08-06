const API_URL="https://v2.jokeapi.dev/joke/Any?safe-mode";
let h2 = document.getElementById("setup");
let h21 = document.getElementById("delivery");
let btn=document.querySelector("button");
let p=document.querySelector("p");
let getJokes=async ()=>{
    let res=await fetch(API_URL);
    let jsonRes=await res.json();
    // console.log(jsonRes);
    // console.log(jsonRes.setup);
    if (jsonRes.type === "twopart") {
        p.textContent=jsonRes.category;
        h2.textContent = jsonRes.setup;
        h21.textContent = jsonRes.delivery;
    } else {
        p.textContent=jsonRes.category;
        h2.textContent = jsonRes.joke;
        h21.textContent = "";
    }
}
btn.addEventListener("click",()=>{
    getJokes();
})



let calc=new Promise((resolve,reject)=>{
    let num=3+2;
    if(num==5){
        resolve("Success");
    }else{
        reject("Failure");
    }
})

calc 
.then((sol)=>{
    console.log("Great ",sol);
}).catch((err)=>{
    console.error("Oh No ",err);
})



