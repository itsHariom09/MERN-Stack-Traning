let btn=document.getElementById("btn");
let count=document.getElementById("count");
let x=0;
function increment() {
    x++;
    count.innerHTML=x;
}
// btn.addEventListener("click", increment);