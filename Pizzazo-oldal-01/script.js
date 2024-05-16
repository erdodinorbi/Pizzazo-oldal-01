function sendRequest(url) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr);
            console.log(JSON.parse(xhr.responseText));
            let adatok = JSON.parse(xhr.responseText);
            let contentHTML = document.getElementById("card_with_data");
            for(let i = 0; i < adatok.length; i++) 
            {
                contentHTML.innerHTML += `<div class="card">
                <div class="card-body">
                    <h5 class="card-title">${adatok[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${adatok[i].location}</h5>
                    <p class="card-text">Minimum éjszakák: ${adatok[i].minimum_nights}</p>
                    <p class="card-text">Honlap: ${adatok[i].hostname}</p>
                    <p class="card-text">Éjszaka / fő: ${adatok[i].price} Ft</p>
                    <hr>
                    <button class="kosarba">Kosárba</button>
                </div>
            </div>`;
            }
        }
    };
    xhr.open("GET", url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send();
}

//sendRequest("https://www.nodejs.sulla.hu/data");

console.log(1 == "1");//a kettő egyenlőségjel a karaktert nézi nem a típust, illetve nézi a typust de automatikusan átkonvertálja hogy ugyanannak tekintse mind kettőt
console.log(1 === "1");//a három egyenlőségjel a típust nézi, mindkettőnek ugyanaz-e a típusa

function AllData() 
{
    fetch("https://pizza.kando-dev.eu/Pizza").then(function(adatok) {
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
            <img src="${adatok[i].kepURL}" class="pizza_img">
        </div>
    </div>`;
    }
})
}

function SingleData(data_id) 
{
    fetch("https://www.nodejs.sulla.hu/data" + "/" + data_id).then(function(adatok) {
    return adatok.json();
}).then(function(adatok) {
    
    let contentHTML = document.getElementById("card_with_data");
    contentHTML.innerHTML += `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${adatok.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${adatok.location}</h5>
            <p class="card-text">Minimum éjszakák: ${adatok.minimum_nights}</p>
            <p class="card-text">Honlap: ${adatok.hostname}</p>
            <p class="card-text">Éjszaka / fő: ${adatok.price} Ft</p>
        </div>
    </div>`;
})
}