const modal_overlay = document.querySelector(".modal_overlay")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".card")


for (let card of cards) {
    card.addEventListener("click", function() {
        const page_Id = card.getAttribute("id")
        modal_overlay.classList.add("active")
        modal_overlay.querySelector("iframe").src = `https://rocketseat.com.br/${page_Id}`
    })
}

//          Função para fechar o modal
document.querySelector(".close_modal").addEventListener("click", function() {
    modal_overlay.classList.remove("active")
    modal_overlay.querySelector("iframe").src = " "
})

//          Função para maximizar o modal
document.querySelector(".fullscreen").addEventListener("click", function() {
    modal.classList.toggle("maximize")
})