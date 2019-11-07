const generateShoppingList = (allStores) => {
    // debugger
    const containerEl = document.createElement("div")
    const listEl = document.createElement("ul")

    containerEl.classList.add("all-stores")
    listEl.classList.add("list")

    if (allStores.length > 0) {
        //try and render out the first store first before getting the list items
        allStores.forEach((store => {
            let itemEl = document.createElement("li")
            itemEl.classList.add(`store-${store.name}`)
            itemEl.textContent = `${store.name}`
            containerEl.appendChild(itemEl)
            // itemEl.textContent = list.item
            // listEl.appendChild(itemEl)

            store.lists.forEach((list => {
                const listItemsEl = document.createElement("li")
                listItemsEl.classList.add(`list-${list.id}`)
                listItemsEl.textContent = list.item
                itemEl.appendChild(listItemsEl)
            }))
        }))
    } else {
        containerEl.textContent = "Oops try again later!"
    }
    main.append(containerEl)
}

// DJ's code....

// const generateTeamList = (allMembers) => {
//     const containerEl = document.createElement("div")
//     const listEl = document.createElement("ul")


//     containerEl.classList.add("all-members")
//     listEl.classList.add("list")

//     if (allMembers.length > 0) {
//         allMembers.forEach((member => {
//             const itemEl = document.createElement("li")
//             itemEl.classList.add(`team-member-${member.uplay}`)
//             // renderTeam(member)
//             itemEl.textContent = member.uplay
//             listEl.appendChild(itemEl)
//         }))

//     } else {
//         containerEl.textContent = "Oops try again later!"
//     }

//     containerEl.appendChild(listEl)
//     main.append(containerEl)

// }