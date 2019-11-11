function getStoreName() {
    let storeName = document.getElementById('store-name').value
    document.getElementById('stores-wrapper').innherHTML = storeName
}

document.getElementById('submit-btn').addEventListener('click', getStoreName(console.log("click click click")))

fetch("http://localhost:3000/stores")

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };

//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };

//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     });