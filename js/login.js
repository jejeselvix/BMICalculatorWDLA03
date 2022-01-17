function login(){
    let name = document.getElementById("name")
    let pass = document.getElementById("pass")

    var nameRegistered = localStorage.getItem("nameRegistered")
    var passRegistered = localStorage.getItem("passRegistered")
    
    if(name.value == '' || name.value == null){
        alert("Please fill the name filed")
        e.preventDefault()
    }
    else if(pass.value == '' || pass.value == null){
        alert("Please fill the password field")
            e.preventDefault()
    }
    else if((!name.value.match(nameRegistered)) || (!pass.value.match(passRegistered))){
        alert("Your name or password is invalid")
        e.preventDefault()
    }

    else{
        window.location.href = "Dashboard.html"
    }
}