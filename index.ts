function closestrobe() {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "none";
    document.cookie = "strobeagree=1";
}

function getCookie(cname: string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let strobeagree = getCookie("strobeagree");
    if (strobeagree == "1") {
        return true;
    }
}

if (checkCookie()) {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "none";
}