function copy(selector) {
    const element = document.querySelector(selector)
    const elementType = element.type
    element.type = "text";
    document.execCommand('copy', false, element.select())
    element.type = elementType
}

function toggleObscured(selector) {
    const element = document.querySelector(selector);
    element.type = element.type == "password" ? "text" : "password";
}

function randomPassphrase() {
    const words = []
    for (let i=0; i<4; i++) {
        words.push(wordList()[parseInt(Math.floor(Math.random() * 2048)) % 2048]);
    }
    return words.slice(0, 4).join('-');
}