function closestrobe() {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "none";
    document.cookie = "strobeagree=1";
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
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
    var strobeagree = getCookie("strobeagree");
    if (strobeagree == "1") {
        return true;
    }
}
if (checkCookie()) {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "none";
}
