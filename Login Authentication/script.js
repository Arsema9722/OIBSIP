// show register
function showRegister(){
    document.getElementById("loginbox").classList.add("hidden");
    document.getElementById("registerbox").classList.remove("hidden");
}

// show login
function showLogin(){
    document.getElementById("registerbox").classList.add("hidden");
    document.getElementById("loginbox").classList.remove("hidden");
}

// REGISTER
function register(){

    let user = document.getElementById("regUser").value.trim();
    let password = document.getElementById("regPassword").value.trim();

    let msg = document.getElementById("registerMessage");

    if(user==="" || password===""){
        msg.innerHTML="Please fill all fields";
        msg.className="error";
        return;
    }

    localStorage.setItem("username",user);
    localStorage.setItem("password",password);

    msg.innerHTML="Account successfuly created!";
    msg.className="success";

    document.getElementById("regUser").value="";
    document.getElementById("regPassword").value="";
}


// LOGIN
function login(){

    let user=document.getElementById("loginUser").value.trim();
    let password=document.getElementById("loginPassword").value.trim();

    let msg=document.getElementById("loginMessage");

    let storedUser=localStorage.getItem("username");
    let storedPassword=localStorage.getItem("password");

    if(storedUser === null || storedPassword === null){
        msg.innerHTML="No account found.Please register first.";
        msg.className="error";
        return;
    }
    if(user===storedUser && password===storedPassword){

        msg.innerHTML="Login successful!";
        msg.className="success";

    if(document.getElementById("remember").checked){
            localStorage.setItem("rememberUser",user);
        }else{
            localStorage.removeItem("rememberUser");
        }

        document.getElementById("loginbox").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");

    }else{

        msg.innerHTML="Invalid username or password";
        msg.className="error";
    }

}

// FORGOT PASSWORD
function forgotPassword(){

    let storedPassword=localStorage.getItem("password");

    if(storedPassword){
        alert("Your password is: "+storedPassword);
    }else{
        alert("No account found.Please register first");
    }
}

// LOGOUT
function logout(){

    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("loginbox").classList.remove("hidden");

}