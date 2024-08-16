function closestrobe() {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "none";
    localStorage.setItem("strobe", "True");
}
if (!localStorage.getItem("strobe")) {
    // @ts-ignore
    document.getElementById("strobeWarning").style.display = "block";
}
