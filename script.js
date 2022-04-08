import pokemonArray from "./data/pokemon.js";
const container = document.querySelector(".card-container")

function toProper(string){
    return string[0].toUpperCase() + string.substring(1)
}

pokemonArray.forEach(monsta => {
    let article = `<article class="card">         
        <img src="${monsta.sprite}" alt="${monsta.name}" class="card__image"/> 
        <div class="card__content">
            <h2 class="card__heading">${toProper(monsta.name)}</h2>
            <p class="card__text">${toProper(monsta.name)} (#${monsta.id}) is a ${monsta.types.join(" & ")} type of pokemon</p>
        </div>        
    </article>`
    
    container.innerHTML += article
    
})
