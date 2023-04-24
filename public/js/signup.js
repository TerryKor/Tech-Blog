const userNameField = document.getElementById("userNameField");
const passwordField = document.getElementById("passwordField");
const confirmPasswordField = document.getElementById("confirmPasswordField");

const signUpButton = document.getElementById("signupButton");

async function signupFunction(){
    if (userNameField.value && passwordField.value && passwordField.value == confirmPasswordField.value){
        let username= userNameField.value
        let password= passwordField.value
        const response = await fetch("/api/users", {
            method:"POST",
            body: JSON.stringify({username, password}),
            headers:{"Content-Type": "application/json"},
        });

        if (response.ok){
            document.location.replace("/");
        }else{
            alert(response.statusText)
        }
    }else{
        alert("username or passowrd not valid")
    }

}

signUpButton.addEventListener("click", signupFunction)
