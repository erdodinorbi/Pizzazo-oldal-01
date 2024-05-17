class Munkatars {
    constructor(nev, beosztas, email, kep) {
      this.nev = nev;
      this.beosztas = beosztas;
      this.email = email;
      this.kep = kep;
    }
}

let munkatarsak = [];

munkatarsak.push(new Munkatars("Kiss Pista", "Egyéni vállalkozó", "kispityu@gmail.com", "https://c.disquscdn.com/uploads/users/14219/5823/avatar92.jpg?1665494834"));
munkatarsak.push(new Munkatars("Molnár Kristóf", "Takarító", "molnarkrissz@freemail.hu", "https://c.disquscdn.com/uploads/users/21901/499/avatar92.jpg?1605381344"));
munkatarsak.push(new Munkatars("Trab Antal András", "Futár", "trabantala@gmail.com", "https://c.disquscdn.com/uploads/users/34385/5600/avatar92.jpg?1580693923"));
munkatarsak.push(new Munkatars("Liszt Ferenc", "Szakács", "bl@gmail.com", "https://c.disquscdn.com/uploads/users/11538/5316/avatar92.jpg?1615190017"));
munkatarsak.push(new Munkatars("Király Alfréd", "Vendéglátó", "kalfred1996@gmail.com", "https://c.disquscdn.com/uploads/users/33819/9553/avatar92.jpg?1695220790"));
munkatarsak.push(new Munkatars("Balogh Lajos", "Pincér", "trabantala@gmail.com", "https://c.disquscdn.com/uploads/users/7786/8382/avatar92.jpg?1382032686"));

function AllWorkers() 
{
    fetch("https://pizza.kando-dev.eu/Pizza/").then(function(adatok) {
    return adatok.json();
}).then(function(adatok) {
    console.log(adatok);
    let contentHTML = document.getElementById("card_with_data");
    for(let i = 0; i < munkatarsak.length; i++) 
    {
        contentHTML.innerHTML += `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${munkatarsak[i].nev}</h5>
            <p class="card-text">Beosztás: ${munkatarsak[i].beosztas}</p>
            <p class="card-text">Email cím: ${munkatarsak[i].email}</p>
            <img src="${munkatarsak[i].kep}" class="pizza_img img-thumbnail">
        </div>
    </div>`;
    }
})
}

AllWorkers()