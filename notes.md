# Run server on the frontend for Javascript
python -m SimpleHTTPServer

# Fetch stores
http://localhost:3000/stores  

# DJ app
DJ's Season = my Store
DJ's TeamMember = my List

# MY APP:

Store has many lists.
List belongs to a store.

Store attributes: name
List attributes: name, quantity, price

The url http://localhost:3000/stores should display something like:

Shopping List

Where are you shopping? ________________ <submit> 

What do you need? ________________ <submit> How many? ___________ <submit> 

KROGER
    - Milk
    - Bread
    -Eggs

Target
    -Vacuum
    -Quilt
    -Socks

Lucky
    -Hoodie
    -Jeans