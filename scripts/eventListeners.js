// function submitNewStore() {
//     const submitStore = document.getElementById('new-store-button');
//     submitStore.addEventListener('click', submitNewStore(event))
//     console.log("Click click click")
// }

// const newStoreSubmit = document.getElementById('new-store-submit');

// function storeClick(e) {
//     e.preventDefault()
// }

// newStoreSubmit.addEventListener('click', storeClick())

// newStoreSubmit.addEventListener('click', function (e) {
//     e.preventDefault()
// })

function getStoreName() {
    let storeName = document.getElementById('store-name').value
    document.getElementById('stores-wrapper').innherHTML = storeName
}

document.getElementById('submit-btn').addEventListener('click', getStoreName(console.log("click click click")))
