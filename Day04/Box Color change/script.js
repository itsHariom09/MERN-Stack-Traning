let x=document.querySelector(".box");
function abc(){
    if(x.style.background==="red"){
        x.style.background="blue";
    }else if(x.style.background==="blue"){
        x.style.background="green";
    }else if(x.style.background==="green"){
        x.style.background="pink";
    }else{
        x.style.background="red";
    }
}