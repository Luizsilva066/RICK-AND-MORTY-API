const divCards = document.querySelector(".cards")
const btn = document.querySelector("#btn")

let pagina = 1


function carregarMais () {

   pagina++

   apresentaPersonagens()
}


btn.addEventListener("click", carregarMais)

async function apresentaPersonagens() {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina} `)
  const data = await response.json()
  data.results.forEach((personagem)=>{
  
  const divCard = document.createElement("div")
  divCard.classList.add("card")

  divCard.innerHTML = ` <header>
                        <img src="${personagem.image}" alt="rick">
                        <p>${personagem.name} </p>
                    </header>
                    <div class="content">
                        <div class="status">
                            <img src="./imagens/status.svg" alt="">
                            <p>${personagem.status} </p>
                        </div>
                        <div class="status">
                            <img src="./imagens/status02.svg" alt="">
                            <p>${personagem.specie}</p>
                        </div>
                        <div class="status">
                            <img src="./imagens/status03.svg" alt="">
                            <p>${personagem.origin.name}</p>
                        </div>
                    </div>`
  
  divCards.appendChild(divCard)


  })

}

apresentaPersonagens()
console.log()