class Store {
    constructor(store) {
        this.id = store.id
        this.name = store.attributes.name
        this.listId = store.relationships.list.data.id
    }
}

// DJ's code....

// class Season {
//     constructor(season){
//         this.id = season.id
//         this.mmr = season.attributes.mmr
//         this.kda = season.attributes.kda
//         this.wl = season.attributes.wl 
//         this.headShotRatio = season.attributes.headshot_ratio
//         this.teammemberId = season.relationships.team_member.data.id
//     }
// }