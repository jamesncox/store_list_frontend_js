function getStoreName() {
    let storeName = document.getElementById('store-name').value
    document.getElementById('stores-wrapper').innherHTML = storeName
}

userData = document.getElementById('submit-btn').addEventListener('click', getStoreName(console.log("click click click")))

let options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(userData)
}

fetch("http://localhost:3000/stores", options)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    });