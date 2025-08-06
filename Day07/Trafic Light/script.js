let l=document.querySelectorAll(".l");
let c=0;

l[c].classList.add("active");
const changeLight=()=>{
    l[c].classList.remove("active");
    c++;
    if(c>=l.length){
        c=0
    }
    l[c].classList.add("active");
}

let x = setInterval(changeLight, 3000);