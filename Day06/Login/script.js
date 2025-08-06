let username=document.getElementById("username");
let email=document.getElementById("email");
let pass=document.getElementById("pass");
// let btn=document.querySelector("button");
let form=document.querySelector("form");

let uspan=document.getElementById("uspan");
let espan=document.getElementById("espan");
let pspan=document.getElementById("pspan");

// btn.addEventListener("click",()=>{
//     if(username.value.trim()===""){
//         uspan.textContent="Username is required";
//     }

//     if(email.value.trim()===""){
//         espan.textContent="Email is required";
//     }

//     if(pass.value.trim()===""){
//         pspan.textContent="Password is required";
//     }
// })


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    if (username.value.trim() === "") {
        uspan.textContent = "Username is required";
        isValid = false;
    }

    if (email.value.trim() === "") {
        espan.textContent = "Email is required";
        isValid = false;
    }

    if (pass.value.trim() === "") {
        pspan.textContent = "Password is required";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});
username.addEventListener("input", () => uspan.textContent = "");
email.addEventListener("input", () => espan.textContent = "");
pass.addEventListener("input", () => pspan.textContent = "");