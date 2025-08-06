let x=document.getElementsByClassName("box");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    for (let i=0;i<x.length;i++){
        let a=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        let c=Math.floor(Math.random()*256);
        x[i].style.background = `rgb(${a}, ${b}, ${c})`;
        let y=i+45;
        x[i].style.transform=`rotate(${Math.floor(Math.random()*361)}deg)`
    }
})
