class List {
    constructor(list) {
        this.id = list.id
        this.item = list.attributes.item
        this.quantity = list.attributes.quantity
        this.price = list.attributes.price
        this.storeId = list.relationships.store.data.id
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