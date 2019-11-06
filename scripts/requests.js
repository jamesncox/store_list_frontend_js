const fetchAllLists = (storeIndexUrl) => {
    fetch(storeIndexUrl)
        .then(resp => resp.json())
        .then(json => createObjs(json))
}

// DJ's code....

// const fetchAllMembers = (teamIndexUrl) => {
//     fetch(teamIndexUrl)
//         .then(resp => resp.json())
//         .then(json => createObjs(json))
// }