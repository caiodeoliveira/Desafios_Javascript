const modalOverlay = document.querySelector(".modalOverlay")
const cards = document.querySelectorAll(".card")

for (let card of cards) {


    card.addEventListener("click", () => {

        const imgID = card.getAttribute('id')
        const food_name = card.querySelector('p').textContent
        console.log(food_name)
        const cooker_name = card.querySelector('.food_cooker').textContent

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `/imgs/${imgID}.png`
        modalOverlay.querySelector('.modal_foodname').innerHTML = `${food_name}`
        modalOverlay.querySelector('.modal_creator').innerHTML = `${cooker_name}`
    })
}

document.querySelector(".close_modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
})