
function NewPizzaUpload() 
{
    let adatok = {
        name: document.getElementById("megnevezes_input").value,
        isGlutenFree: document.getElementById("is_gluten_free_checkbox").checked ? 1 : 0,
        kepURL: document.getElementById("kep_url_input").value,
    }

    console.log(adatok);

    fetch("https://pizza.kando-dev.eu/Pizza", {
        method: "POST",
        body: JSON.stringify(adatok),
        headers: {
            "Content-Type": "application/json"
        }
    })
}


