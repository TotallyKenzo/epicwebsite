function closestrobe() {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "none";
    localStorage.setItem("strobe", "True");
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("strobe") !== "True") {
        // @ts-ignore
        document.getElementById("strobeWarning").style.display = "block";
    }
});