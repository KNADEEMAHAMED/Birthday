// Script for displaying virtual cake with name
document.addEventListener("DOMContentLoaded", function() {
    const showCakeButton = document.getElementById("show-cake-button");
    const virtualCake = document.getElementById("virtual-cake");

    showCakeButton.addEventListener("click", function() {
        const girlName = "Mariya Naaz";

        const cakeHtml = `
            <img src="birthday cake.jpeg" alt="Virtual Cake">
            <p>${girlName}!</p>
        `;
        virtualCake.innerHTML = cakeHtml;
        virtualCake.classList.remove("hidden");
    });
});
