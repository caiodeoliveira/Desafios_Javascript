const cards = document.querySelectorAll(".card")
const buttons = document.querySelectorAll('.button')
const contents = document.querySelectorAll('.content')


for (let card of cards) {

    card.addEventListener("click", function() {
        const recipeIndex = card.getAttribute('id')
        window.location.href = `recipes/${recipeIndex}`

    })
}

for (let button of buttons) {
    button.addEventListener('click', function() {
        if (button.innerHTML == 'MOSTRAR') {
            button.innerHTML = 'ESCONDER'
        } else {
            button.innerHTML = 'MOSTRAR'
        }
    })
}

for (let button in buttons) {
    buttons[button].addEventListener('click', function() {
        if (contents[button].classList.contains('hide')) {
            contents[button].classList.remove('hide')
        } else {
            contents[button].classList.add('hide')
        }
    })
}