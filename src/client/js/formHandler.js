async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    if (formText === '') {
        alert('Form is empty. Please fill in the form!')
    } else {
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
            if (res.success === true) {
                document.getElementById('results').innerHTML = res.message
            } else {
                alert('Fail to interact with meaningcloud API.')
            }
        })
        .catch(error => {
            alert('Connection fail!')
        })
    }
}

export { handleSubmit }
