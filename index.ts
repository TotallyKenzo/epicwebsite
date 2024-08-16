function closestrobe() {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "none";
    localStorage.setItem("strobe", "True");
}

console.log(localStorage.getItem("strobe"));
if (localStorage.getItem("strobe") === "True") {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "none";
}