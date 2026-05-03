function registerUser(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name === "" || email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");
}

function loginUser(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedUser = localStorage.getItem("user");

    if(savedUser === null){
        alert("No user found. Please register first.");
        return;
    }

    let userData = JSON.parse(savedUser);

    if(email === userData.email && password === userData.password){
        alert("Login Successful");
        window.location.href = "dashboard.html";
    }
    else{
        alert("Invalid Email or Password");
    }
}