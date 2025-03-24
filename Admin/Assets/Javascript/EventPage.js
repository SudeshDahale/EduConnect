document.querySelectorAll(".event-card").forEach(card => {
    card.addEventListener("click", () => {
        alert(`${card.innerText} Clicked!`);
    });
});
