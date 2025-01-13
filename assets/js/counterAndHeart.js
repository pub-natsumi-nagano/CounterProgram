(() => {
    const $counter = document.getElementById("js-counter");
    const $heartArea = document.getElementById("js-heart");

    const displayHearts = (count) => {
        $heartArea.innerHTML = "";
        if (count > 0) {
        for (let i = 0; i < count; i++) {
        $heartArea.innerHTML += "💕";
        }
        }
        };

    const clickHandler = (e) => {
        const $targetButton = e.currentTarget;
        let currentCount = parseInt($counter.textContent);
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
            displayHearts(currentCount + 1);
        } else {
            $counter.textContent = currentCount - 1;
            displayHearts(currentCount - 1);
        }
    }

    const buttons = document.getElementsByClassName("js-button");
    for (let index = 0; index < buttons.length; index++) {
        buttons[index].addEventListener("click", clickHandler);
    }
})();