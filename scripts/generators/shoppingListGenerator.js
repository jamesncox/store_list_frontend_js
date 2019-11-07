const generateShoppingList = (allStores) => {

    const storeWrapper = document.createElement("div")
    storeWrapper.classList.add("stores-wrapper")

    if (allStores.length > 0) {
        // debugger
        allStores.forEach((store) => {
            const storeEl = document.createElement("div")
            const nameEl = document.createElement("h3")
            const listEl = document.createElement("ul")

            storeEl.classList.add(`store-${store.name}`)
            nameEl.classList.add(store.name)
            listEl.classList.add(`${store.name}-list`)

            nameEl.textContent = store.name

            store.lists.forEach((listItem) => {
                const itemEl = document.createElement("li")
                itemEl.classList.add(`list-item-${listItem.item.replace(new RegExp(' ', 'g'), '-')}`)

                itemEl.textContent = listItem.item
                listEl.appendChild(itemEl)
            })
            storeEl.append(nameEl, listEl)
            storeWrapper.appendChild(storeEl)
            main.appendChild(storeWrapper)
        })
    } else {
        storeWrapper.textContent = "Oops try again later!"
    }
}