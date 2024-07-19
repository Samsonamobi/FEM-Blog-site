let open = document.getElementById("open"),
    close = document.getElementById("close"),
    navLinks = document.getElementById("navLinks");



    Slider = (x,y,z) => {
        x.addEventListener("click", ()=>{
            x.classList.toggle("hide");
            y.classList.toggle("hide");

            if(z== "slide-in"){
                navLinks.classList.toggle("slide")
            }
            if(z== "slide-out"){
                navLinks.classList.toggle("slide")
            }
        })
    }

    Slider(open,close, "slide-in")
    Slider(close,open, "slide-out")

    // open.addEventListener("click", ()=>{
    //     open.classList.toggle("hide");
    //     close.classList.toggle("hide");
    // })

    // close.addEventListener("click", ()=>{
    //     open.classList.toggle("hide");
    //     close.classList.toggle("hide");
    // })