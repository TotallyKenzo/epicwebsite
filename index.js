function closestrobe() {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "none";
    localStorage.setItem("strobe", "True");
}
function strobe() {
    if (localStorage.getItem("strobe") != "True") {
        // @ts-ignore
        document.getElementById("strobeWarning").style.display = "block";
    }
}
