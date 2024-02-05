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
        document.getElementById("noMSG").style.display = "block";
        document.getElementById("text-output").style.display = "none";
        document.getElementById("buttons-output").style.display = "none";
        return true;
    } else {
        document.getElementById("noMSG").style.display = "none";
        document.getElementById("text-output").style.display = "block";
        document.getElementById("buttons-output").style.display = "flex";

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
}

function clearText() {
    document.getElementById("text-input").value = "";
    encryptMSG();
}
