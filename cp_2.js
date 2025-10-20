// Retrieving data from Course API

function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}