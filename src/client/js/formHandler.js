async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    await fetch('http://localhost:8080/test', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            text: formText
        })
    })
    .then(res => res.json())
    .then(function(res) {
        console.log("::: Response :::")
        console.log(res)
        document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
