let x=document.getElementById("num");
let d=document.querySelector("div");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let y=parseInt(x.value);
    let o="";
    for(let i=1;i<=10;i++){
        o+=`${y} x ${i} =  ${y*i}<br>`;
    }
    d.innerHTML=o;
})
