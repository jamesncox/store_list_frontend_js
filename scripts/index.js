function getStoreName(event) {

    event.preventDefault()
    let storeName = document.querySelector('#store-name').value

    store = {
        name: storeName
    }

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(store)
    }

    fetch("http://localhost:3000/stores", options)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
        });
}

document.getElementById('store-btn').addEventListener('click', getStoreName)

function getItemName() {
    let itemName = document.getElementById('item-name').value
    itemName = document.getElementById('stores-wrapper').innerHTML
}

document.getElementById('item-btn').addEventListener('click', getItemName)

// let options = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(storeName)
// }

// fetch("http://localhost:3000/stores", options)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     });