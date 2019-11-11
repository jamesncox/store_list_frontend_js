let allStores = []

const storeIndexUrl = "http://localhost:3000/stores"

let main = document.querySelector("#stores-wrapper")

fetchAllLists(storeIndexUrl)