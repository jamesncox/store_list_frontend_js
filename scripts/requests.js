const fetchAllLists = (storeIndexUrl) => {
    fetch(storeIndexUrl)
        .then(resp => resp.json())
        .then(json => createObjs(json))
}