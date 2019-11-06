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

Shopping List

Where are you shopping? ________________ <submit> 

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