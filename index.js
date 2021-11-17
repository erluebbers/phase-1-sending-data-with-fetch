

function submitData (inputName, inputEmail) {
    return fetch ('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            name: inputName,
            email: inputEmail
        }),
    })
    .then(response => response.json())
    .then(data => {
        const p = document.createElement('p')
        document.body.appendChild(p)
        p.innerHTML = data.id
    })
    .catch(function (error) {
        document.body.innerHTML = error
    })
}