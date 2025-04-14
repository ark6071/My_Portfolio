document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded 🎉");

    // Example: Highlight skill badges on click
    const badges = document.querySelectorAll(".badge");
    badges.forEach((badge) => {
        badge.addEventListener("click", () => {
            badge.classList.toggle("active");
        });
    });
});