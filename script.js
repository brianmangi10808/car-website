
    document.addEventListener("DOMContentLoaded", function() {
        const searchInput = document.getElementById("search-item");
        const carList = document.querySelectorAll(".cars");

        searchInput.addEventListener("input", function() {
            const searchTerm = searchInput.value.toLowerCase().trim();

            carList.forEach(function(car) {
                const brand = car.querySelector(".brand").textContent.toLowerCase();
                if (brand.includes(searchTerm)) {
                    car.style.display = "block";
                } else {
                    car.style.display = "none";
                }
            });
        });
    });

document.addEventListener("DOMContentLoaded", function(){
    const minPrice = document.querySelector("#min-price");
    const carMinPrice = document.querySelectorAll(".cars");

    minPrice.addEventListener("input", function (){
        const lower = parseFloat(minPrice.value.toLowerCase().trim());

        carMinPrice.forEach(function(car){
            const min = parseFloat(car.querySelector(".price-range").textContent.toLowerCase().trim());
            if (min >= lower || isNaN(lower)){
                car.style.display = "block";
            } else {
                car.style.display = "none";
            }
        })
    })
})

document.addEventListener("DOMContentLoaded", function(){
    const maxPrice = document.querySelector("#max-price");
    const carMaxPrice = document.querySelectorAll(".cars");

    maxPrice.addEventListener("input", function (){
        const high = parseFloat(maxPrice.value.toLowerCase().trim());

        carMaxPrice.forEach(function(car){
            const max = parseFloat(car.querySelector(".price-range").textContent.toLowerCase().trim());
            if (max >= high || isNaN(high)){
                car.style.display = "block";
            } else {
                car.style.display = "none";
            }
        })
    })
})