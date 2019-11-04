const createStores = (list, stores) => {
    stores.forEach((store) => {
        let storeObj = new Store(store)
        list.stores.push(storeObj)
    })
}

// DJ's code....

// const createSeasons = (teamMember, seasons) => {
//     seasons.forEach((season) => {
//         let seasonObj = new Season(season)
//         teamMember.seasons.push(seasonObj)
//     })
// }