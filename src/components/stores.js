class Stores {
    constructor() {
        this.stores = []
        this.adapter = new StoresAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadStores()
    }

    fetchAndLoadStores() {
        this.adapter.getStores().then(stores => {
            console.log(stores)
        })
    }
}