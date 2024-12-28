let nav = () => {
    let card = ` <div id="nav">
         <h3>Demo Book App</h3>
         <div id="nav-likns">
        <a href="index.html">Home</a>
        <a href="admin.html">Admin</a>
        <a href="books.html">Books</a>
        </div>
    </div>`
    document.getElementById("navbar").innerHTML = card;
}
nav()