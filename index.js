function closestrobe() {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "none";
    localStorage.setItem("strobe", "True");
}
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("strobe") !== "True") {
        // @ts-ignore
        document.getElementById("strobeWarning").style.display = "block";
    }
});
