const userNameField = document.getElementById("userNameField");
const passwordField = document.getElementById("passwordField");

const loginButton = document.getElementById("loginButton");

async function loginFunction(){
    if (userNameField.value && passwordField.value){
        const username=userNameField.value
        const password=passwordField.value
        const reponse = await fetch("/api/users/login", {
            method:"POST",
            body:JSON.stringify({username, password}),
            headers:{"Content-Type": "application/json"}
        }) ;

        if (reponse.ok){
            document.location.replace("/")
        }else{alert(reponse.statusText)}
    }else{
        alert("Invalid")
    }
};

loginButton.addEventListener("click", loginFunction)