
function AllPizzas() 
{
    fetch("https://pizza.kando-dev.eu/Pizza/").then(function(adatok) {
    return adatok.json();
}).then(function(adatok) {
    console.log(adatok);
    let contentHTML = document.getElementById("card_with_data");
    for(let i = 0; i < adatok.length; i++) 
    {
        contentHTML.innerHTML += `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${adatok[i].id}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${adatok[i].name}</h5>
            <p class="card-text">Glutén mentes: ${adatok[i].isGlutenFree ? "Igen" : "Nem"}</p>
            <img src="${adatok[i].kepURL}" class="pizza_img img-thumbnail">
            <hr>
            <button class="kosarba">Kosárba</button>
            <button class="torles" onclick="DeletePizza(${adatok[i].id})">Törlés</button>
        </div>
    </div>`;

    }
})
}

AllPizzas()


function DeletePizza(id) 
{
    fetch("https://pizza.kando-dev.eu/Pizza/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        }
    })
    .then(function() {
        location.reload();
    })
}
