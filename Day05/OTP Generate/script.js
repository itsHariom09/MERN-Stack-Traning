let btn=document.querySelector("button");
let inp=document.querySelector("input");
let d=document.querySelector("div");
let btn1=document.getElementById("bbt");
let x=Math.floor(Math.random()*((999999)-(111111)+1))+10;
btn.addEventListener("click",()=>{
    console.log(x);
})
btn1.addEventListener("click",()=>{
    if(inp.value==x){
        d.style.background="green";
        d.textContent="Login Success";
        d.style.margin="auto";
        d.style.display="block";
    }else{
        d.style.background="red";
        d.textContent="LoginFailed";
        d.style.margin="auto";
        d.style.display="block";
    }
});