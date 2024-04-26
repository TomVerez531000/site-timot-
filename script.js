registerbtn = document.getElementsByClassName("reg")[0]
loginbtn = document.getElementsByClassName("back")[0]

secondsleft = document.getElementsByClassName("secs")[0]
checkbox = document.getElementsByClassName("agreecheckbox")[0]
timereaming = 5
aldreadyclicked = false

function timerdiscount(){
    timereaming -= 1
    secondsleft.innerHTML = String(timereaming)+" seconds reaming."
    if (timereaming > 0) {
        setTimeout(() => timerdiscount(), 1000);
    }else{
        secondsleft.style.display = "none";
        checkbox.disabled = false
    }
}

function noaccountclicked() {
    div = document.getElementsByClassName("logincontainer")[0]
    div.classList.add("slide-out");
    div.classList.remove("slide-in");
    div2 = document.getElementsByClassName("registercontainer")[0]
    div2.classList.add("slide-out");
    div2.classList.remove("slide-in");

    if (!aldreadyclicked) {
        aldreadyclicked = true
        setTimeout(() => timerdiscount(), 1000);
    }
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