function toggleSquare(divId) {
    options = ["transcription", "workspaces", "finetuning", "teamwork"]
    for (opt in options) {
        if (divId == options[opt]) {
            document.getElementById("#" + divId + "-notSelected").style.display = "none";
            document.getElementById("#" + divId + "-selected").style.display = "inline";
        } else if (divId != options[opt]) {
            document.getElementById("#" + options[opt] + "-selected").style.display = "none";
            document.getElementById("#" + options[opt] + "-notSelected").style.display = "inline";
        }
    }
}

function hideSquare() {
    document.getElementsByClassName("active")[1]["firstElementChild"].style.display = "none";
    options = ["workspaces", "finetuning", "teamwork"]
    for (opt in options) {
        document.getElementById("#" + options[opt] + "-selected").style.display = "none";
        document.getElementById("#" + options[opt] + "-notSelected").style.display = "inline";
    }
}