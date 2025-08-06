let span=document.getElementById("span");
let sdate=document.getElementById("sdate");
let pad = (n) => n.toString().padStart(2, '0');
let x= setInterval(()=>{
    let now=new Date;
    let hours = now.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    span.innerHTML = `${pad(hours)} : ${pad(now.getMinutes())} : ${pad(now.getSeconds())} ${ampm}`;
    sdate.innerHTML=`${pad(now.getDate())} / ${pad(now.getMonth()+1)} / ${pad(now.getFullYear())}`
},1000)

