let x=document.querySelector("div");
function abc(){
    const y=x.style.background;
    switch(y){
        case "red":
            x.style.background="blue";
            break;
        case "blue":
            x.style.background="green";
            break;
        case "green":
            x.style.background="red";
            break;
        default:
            x.style.background="red";
    }
}