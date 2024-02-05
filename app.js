const encryptDict = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
};

function getMSG() {
    let msg = document.getElementById("text-input").value;
    return msg;
}

function encryptMSG() {
    let msg = document.getElementById("text-input").value;
    let encryptedMSG = "";

    // Check for empty input
    if (msg !== "") {
        document.getElementById("noMSG").style.display = "none";
        document.getElementById("text-output").style.display = "block";
        document.getElementById("btn-copy").style.display = "block";

        msg.normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();

        document.getElementById("text-output").textContent = msg;
    } else {
        document.getElementById("noMSG").style.display = "block";
        document.getElementById("text-output").style.display = "none";
        document.getElementById("btn-copy").style.display = "none";
        return;
    }

    // for (let char of msg) {
    //     if (char in encryptDict) {
    //         encryptedMSG += encryptDict[char];
    //     } else {
    //         encryptedMSG += char;
    //     }
    // }
}

function decryptMSG() {}

function copyText() {
    let text = document.getElementById("text-output").textContent;
    navigator.clipboard.writeText(text);
}
