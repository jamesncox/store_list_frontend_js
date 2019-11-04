class Stores {
    constructor() {
        this.lists = []
        this.adapter = new StoresAdapter()
        // this.bindEventListeners()
        this.fetchAndLoadStores()
    }

    fetchAndLoadStores() {
        this.adapter
            .getStores()
            .then(stores => {
                // stores.forEach(store => this.stores.push(store))
                return console.log(stores)
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        // console.log('rendering...')
        const storesContainer = document.getElementById("stores-container")
        storesContainer.innerHTML = 'my stores here'
        // console.log('my stores are', this.stores)
    }
}