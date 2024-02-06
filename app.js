const encryptDict = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
};

const decryptDict = createDecryptDict();

function createDecryptDict() {
    const decryptDict = {};
    for (let key in encryptDict) {
        decryptDict[encryptDict[key]] = key;
    }
    return decryptDict;
}

function emptyMSG(msg) {
    if (msg === "") {
        document.getElementById("hideOutput").style.display = "flex";
        document.getElementById("showOutput").style.display = "none";
        return true;
    } else {
        document.getElementById("hideOutput").style.display = "none";
        document.getElementById("showOutput").style.display = "flex";

        return false;
    }
}

function getMSG() {
    let msg = document.getElementById("text-input").value;
    return msg;
}

function encryptMSG() {
    let msg = getMSG();

    if (emptyMSG(msg)) {
        return;
    }

    msg = msg
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    let encryptedMSG = msg.replace(/[eiaou]/g, function (char) {
        if (char in encryptDict) {
            return encryptDict[char];
        } else {
            return char;
        }
    });

    document.getElementById("text-output").textContent = encryptedMSG;
}

function decryptMSG() {
    let msg = getMSG();

    if (emptyMSG(msg)) {
        return;
    }

    msg.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

    let decryptedMSG = msg.replace(/enter|imes|ai|ober|ufat/g, function (char) {
        if (char in decryptDict) {
            return decryptDict[char];
        } else {
            return char;
        }
    });

    document.getElementById("text-output").textContent = decryptedMSG;
}

function copyText() {
    let text = document.getElementById("text-output").textContent;
    navigator.clipboard.writeText(text);
    popup("Texto copiado!");

    let copyButton = document.getElementById("btn-copy");
    originalValue = copyButton.value;

    copyButton.value = "Copiado!";

    setTimeout(() => {
        copyButton.value = originalValue;
    }, 1000);
}

function clearText() {
    document.getElementById("text-input").value = "";
    encryptMSG();
}

function popup(msg) {
    let popup = document.createElement("div");
    popup.innerHTML = msg;
    popup.classList.add("popup");
    document.body.appendChild(popup);

    setTimeout(() => {
        document.body.removeChild(popup);
    }, 1500);
}
