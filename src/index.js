// fetch to the backend http://localhost:3000/stores

const app = new App()

function getStoreData() {
    byebug
    return fetch('http://localhost:3000/stores')
        .then(res => res.json())
        .then(data => {
            allStores = data
        })
}