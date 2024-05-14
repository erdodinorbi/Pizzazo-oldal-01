let random_pizza_indexes = []

function AllDiscountPizzas() 
{
    fetch("https://pizza.kando-dev.eu/Pizza").then(function(adatok) {
    return adatok.json();
}).then(function(adatok) {
    console.log(adatok);
    let contentHTML = document.getElementById("card_with_data");
    let discount_pizza_element = 0
    while(discount_pizza_element < 3)
    {
        let random_discuint_pizza_index = Math.floor((Math.random() * adatok.length) + 1);
        if(random_pizza_indexes.includes(random_discuint_pizza_index) == false)
        {
            random_pizza_indexes.push(random_discuint_pizza_index);
            contentHTML.innerHTML += `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${adatok[random_discuint_pizza_index].id}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${adatok[random_discuint_pizza_index].name}</h5>
                <p class="card-text">Glutén mentes: ${adatok[random_discuint_pizza_index].isGlutenFree ? "Igen" : "Nem"}</p>
                <img src="${adatok[random_discuint_pizza_index].kepURL}" class="pizza_img">
            </div>
        </div>`;
        discount_pizza_element += 1;
        }
    }
})
}

AllDiscountPizzas()