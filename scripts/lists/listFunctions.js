const createLists = (store, lists) => {
    lists.forEach((list) => {
        let listObj = new List(list)
        store.lists.push(listObj)
    })
}