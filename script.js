registerbtn = document.getElementsByClassName("reg")[0]
loginbtn = document.getElementsByClassName("back")[0]

function noaccountclicked() {
    div = document.getElementsByClassName("logincontainer")[0]
    div.classList.add("slide-out");
    div.classList.remove("slide-in");
    div2 = document.getElementsByClassName("registercontainer")[0]
    div2.classList.add("slide-out");
    div2.classList.remove("slide-in");
}

function backclicked() {
    div = document.getElementsByClassName("logincontainer")[0]
    div.classList.add("slide-in");
    div.classList.remove("slide-out");
    div2 = document.getElementsByClassName("registercontainer")[0]
    div2.classList.add("slide-in");
    div2.classList.remove("slide-out");
}

registerbtn.onclick = noaccountclicked
loginbtn.onclick = backclicked