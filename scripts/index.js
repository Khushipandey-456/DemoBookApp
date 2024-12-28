let form= document.getElementById("form")
form.addEventListener("submit",function(){
    event.preventDefault()
    let email = form.email.vaule;
    let pass = form.password.value;
    if(email==="admin@empher.com" && pass ==="empher@123"){
        alert("logged in Successfully.....!")
    window.location.href="admin.html"
}
    else{
        if(email==="user@empher.com" && pass ==="user@123"){
            alert("logged in Successfully.....!")
        window.location.href="books.html"

    }
}
})