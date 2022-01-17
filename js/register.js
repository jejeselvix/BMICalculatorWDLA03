function register(){
    let name = document.getElementById("name")
    let username = document.getElementById("username")
    let password = document.getElementById("pass")
    let email = document.getElementById("email")

    var emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(name.value == '' || name.value == null){
        alert("Please fill the name field")
        e.preventDefault()
    }
    else if(name.value.length < 5){
        alert("Name must be more than 5 characters")
        e.preventDefault()
    }
    else if(username.value == '' || username.value == null){
        alert("Please fill the username field")
        e.preventDefault()
    }
    else if(username.value.length < 5){
        alert("Username must be more than 5 characters")
        e.preventDefault()
    }
    else if(email.value == '' || email.value == null){
        alert("Please fill the email field")
        e.preventDefault()
    }
    else if(!email.value.match(emailValid)){
        alert("Please input correct email")
        e.preventDefault()
    }
    else if(password.value == '' || password.value == null){
        alert("Please fill the password field")
        e.preventDefault()
    }
    else{
        localStorage.setItem("nameRegistered", username.value)
        localStorage.setItem("passRegistered", password.value)
        window.location.href = "Login.html"
    }
}