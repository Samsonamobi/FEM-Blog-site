const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navLinks = document.querySelector("#navLinks");

hamburgerToggle.addEventListener("click", ()=>{
    if (!navLinks.classList.contains("open")) {
        navLinks.classList.add("open")
    }else{
        navLinks.classList.remove("open");
    }
})