const createLists = (store, lists) => {
    lists.forEach((list) => {
        let listObj = new List(list)
        store.lists.push(listObj)
    })
}

// DJ's code....

// const createSeasons = (teamMember, seasons) => {
//     seasons.forEach((season) => {
//         let seasonObj = new Season(season)
//         teamMember.seasons.push(seasonObj)
//     })
// }