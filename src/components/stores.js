class Stores {
    constructor() {
        this.lists = []
        this.adapter = new StoresAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadStores()
    }

    initBindingsAndEventListeners() {
        this.storesContainer = document.getElementById('stores-container')
    }

    fetchAndLoadStores() {
        this.adapter
            .getStores()
            .then(stores => {
                stores.forEach(store => this.stores.push(new Store(store)))
                // console.log(this.stores)
            })
            .then(() => {
                this.render()
            })
    }

    render() {
        storesContainer.innerHTML = this.stores.map(store => `<li>${store.name}</li>`).join('')
        // console.log('my stores are', this.stores)
    }
}