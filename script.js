let isLoaded = false;
let isAnimationEnded = false;

window.addEventListener("DOMContentLoaded",() => {
    const hideoutElement = document.querySelector(".hideout"); //can be refactor with ID

    hideoutElement.addEventListener("animationend", () => {
        isAnimationEnded = true;
        finishLoading();
    });
});

window.addEventListener("load", () => {
    isLoaded = true;
    finishLoading();
});

function finishLoading() {
    if (isAnimationEnded && isLoaded) {
        const loaderElement = document.getElementById("loader")

        loaderElement.classList.add("preload-finish");
    }
}
