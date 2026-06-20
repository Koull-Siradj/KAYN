const verticals = document.querySelectorAll(".vertical")
let v=0

// look for parent div with .vertical and activev
//look for the first horizontal




document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
        nextvertical()
    }
    
    if(event.key ==="ArrowLeft") {
        prevvertical()
    }

    if(event.key ==="ArrowDown") {
        nexthori()     
                                                                              // complete
    }

    if(event.key ==="ArrowUp"){
        prevhori()
    }
})

function prevvertical () {
    if (v>0) {
    verticals[v].classList.remove("activev");
    v-- ;
    
    verticals[v].classList.add("activev");
}
}

function nextvertical() {
    if (v<verticals.length-1) {
    verticals[v].classList.remove("activev");
    v++;
    verticals[v].classList.add("activev");
}
}

function prevhori() {
    let horizontals =verticals[v].querySelectorAll(".horizontal")

    for(let i=0;i<horizontals.length;i++){
        if(i>0){
            if(horizontals[i].classList.contains("active")) {
                horizontals[i].classList.remove("active")
                horizontals[i-1].classList.add("active")
                break;
            }
        }
    }
}

function nexthori() {
    let horizontals = verticals[v].querySelectorAll(".horizontal")


    for(let i=0;i<horizontals.length-1;i++){
        if(horizontals[i].classList.contains("active")) {
            
                horizontals[i].classList.remove("active");
                horizontals[i+1].classList.add("active");
                break;
            
        }
    }
}