let Home = document.getElementById("home")
let Guest = document.getElementById("guest")

let hres = 0;
function add1home(){
    hres +=1
    Home.textContent = hres;
}
function add2home(){
    hres +=2
    Home.textContent = hres;
}
function add3home(){
    hres +=3
    Home.textContent = hres;
}

let gres = 0;
function add1guest(){
    gres +=1
    Guest.textContent = gres;
}
function add2guest(){
    gres +=2
    Guest.textContent = gres;
}
function add3guest(){
    gres +=3
    Guest.textContent = gres;
}