const createObjs = (json) => {
    json.data.forEach((store) => {
        let storeObj = new Store(store)
        let lists = json.included.filter((list) => {
            return list.relationships.store.data.id === store.id
        })
        createLists(storeObj, lists)
        allStores.push(storeObj)
    })
    debugger
    generateShoppingList(allStores)
}
