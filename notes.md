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