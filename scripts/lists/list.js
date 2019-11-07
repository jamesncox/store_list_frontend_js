class List {
    constructor(list) {
        this.id = list.id
        this.item = list.attributes.item
        this.quantity = list.attributes.quantity
        this.price = list.attributes.price
        this.storeId = list.relationships.store.data.id
    }
}