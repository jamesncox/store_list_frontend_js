class Stores {
    constructor() {
        this.lists = []
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