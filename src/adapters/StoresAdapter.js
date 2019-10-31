class StoreAdapter {
    constructor() {
        this.baseUrl =
            'http://localhost:3000/store'
    }

    getStores() {
        return fetch(this.baseUrl).then(res => res.json()
        )
    }
}