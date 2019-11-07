# Run server on the frontend for Javascript
python -m SimpleHTTPServer

# Fetch stores
http://localhost:3000/stores  

# DJ app
DJ's Season = my List
DJ's TeamMember = my Store

# MY APP:

Store has many lists.
List belongs to a store.

Store attributes: name
List attributes: name, quantity, price

The url file:///C:/Users/james/code/store_list_frontend/index.html should display something like:

# first a "user" has to create a store
# then the "user" can add items to that store.
# if the store is already created they can select the store or create a new one.

Shopping List App

Where are you shopping? Select or create a new store: ________________ <submit> 

# once a store is selected, they can add items to that store. If it has to be created, then it must be selected, then they can add items.

What do you need? ________________ <submit> How many? ___________ <submit> Estimated price: _________ <submit>

KROGER
    - Milk 
    - Bread
    - Eggs
    Estimated total: 

Target
    - Vacuum
    - Quilt
    - Socks

Lucky
    - Hoodie
    - Jeans

# NEW index.html and shoppingListGenerator.js to play with...

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
  </head>
  <body>

    <div class="container"> 
      <h1> All stores </h1>

        <div class="stores-wrapper">

          <div class="store-kroger">
            <h3> Kroger </h3>
            <ul>
              <li> milk </li>
            </ul>

          </div>

          <div class="store-kroger">
            <h3> Target </h3>
            <ul>
              <li> milk </li>
            </ul>

          </div>

          <div class="store-kroger">
            <h3> Lucky's </h3>
            <ul>
              <li> milk </li>
            </ul>

          </div>

        </div>

    </div>

    <script src="script.js"></script>
  </body>
</html>


const storeWrapper = document.createElement("div")
storeWrapper.classList("stores-wrapper")

allstores.forEach((store) => {
  const storeEl = document.createElement("div")
  const nameEl = document.createElement("h3")
  const listEl = document.createElement("ul")
  
  storeEl.classList(`store-${store.name}`)
  nameEl.classList(store.name)
  listEl.classList(`${store.name}-list`)

  nameEl.textContent = store.name 

  store.lists.forEach((listItem) => {
    const itemEl = document.createElement("li")
    itemEl.classList(`list-item-${listItem.item}`)

    itemEl.textContent = listItem.item
    listEl.appendChild(itemEl)
  })

  storeEl.append(nameEl, listEl)
}) 