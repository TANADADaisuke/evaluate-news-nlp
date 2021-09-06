function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    const inputWords = inputText.split(' ')
    for (let i = 0; i < inputWords.length; i++) {
        if(names.includes(inputWords[i].replace('.', '').replace(',', ''))) {
            window.alert("Welcome, Captain!")
            return true
        }
    }
}

export { checkForName }
