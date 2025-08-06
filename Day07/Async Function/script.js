let b=document.querySelector("body");
let btn=document.querySelector("button");
let color=["red","yellow","blue","green","lightgreen","lightpink","lightblue","orange"];

async function bgChange() {
    for(let i=0;i<color.length;i++){
        b.style.background=color[i];
        await new Promise(resolve => setInterval(resolve, 1500));
    }
}

btn.addEventListener("click",()=>{
    bgChange();
});
