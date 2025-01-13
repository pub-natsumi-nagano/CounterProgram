
(() => {
    const $counter = document.getElementById("js-counter");
    const $heartArea = document.getElementById("js-heart");

    const clickHandler = () => {
        $counter.textContent = 0;
        $heartArea.innerHTML = "";
    };
    
    document.getElementById("js-reset-button").addEventListener
    ("click", clickHandler);
})();