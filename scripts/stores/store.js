class List {
    constructor(list) {
        this.id = list.id
        this.item = list.attributes.item
        this.quantity = list.attributes.quantity
        this.price = list.attributes.price
        this.stores = []
    }
}

// DJ's code......

// class TeamMember {
//     constructor(team_member) {
//         this.id = team_member.id
//         this.uplay = team_member.attributes.uplay
//         this.rank = team_member.attributes.rank
//         this.position = team_member.attributes.position
//         this.def_main = team_member.attributes.def_main
//         this.atk_main = team_member.attributes.atk_main
//         this.seasons = []
//     }
// }