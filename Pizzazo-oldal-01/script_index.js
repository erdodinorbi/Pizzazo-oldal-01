let nepszeru_pizzak = [0,5,10];

function AllPopularPizzas() 
{
    fetch("https://pizza.kando-dev.eu/Pizza").then(function(adatok) {
    return adatok.json();
}).then(function(adatok) {
    console.log(adatok);
    let contentHTML = document.getElementById("card_with_data");
    for(let i = 0; i < nepszeru_pizzak.length; i++)
    {
        contentHTML.innerHTML += `<div class="card">
            <div class="card-body">
                <h5 class="card-title">${adatok[nepszeru_pizzak[i]].id}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${adatok[nepszeru_pizzak[i]].name}</h5>
                <p class="card-text">Glutén mentes: ${adatok[nepszeru_pizzak[i]].isGlutenFree ? "Igen" : "Nem"}</p>
                <img src="${adatok[nepszeru_pizzak[i]].kepURL}" class="pizza_img img-fluid">
                <hr>
                <button class="kosarba">Kosárba</button>
            </div>
        </div>`;
    }
})
}

AllPopularPizzas()