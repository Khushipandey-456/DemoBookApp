let form = document.getElementById("form")
form.addEventListener("submit", function () {
    event.preventDefault()
    let email = form.email.vaule;
    let pass = form.password.value;
    console.log(email, pass)
    if (email == "admin@empher.com" && pass == "empher@123") {
        console.log(data)
        alert("logged in Successfully.....!")
        window.location.href = "admin.html"
    }
    else if (email === "user@empher.com" && pass === "user@123") {
        console.log(data)
        alert("logged in Successfully.....!")
        window.location.href = "books.html"

    } else {
        alert("something went wrong")
    }

})