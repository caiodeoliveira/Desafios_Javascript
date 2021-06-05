const cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function() {
        const course_Id = card.getAttribute("id")
        window.location.href = `/course/${course_Id}`
    })
}