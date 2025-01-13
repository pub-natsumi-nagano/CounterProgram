// 即時関数を定義して、スコープを限定します
(()=> {
    // カウンターの要素を取得します
    const $counter = document.getElementById("js-counter");

    // クリックハンドラーを定義します
    const clickHandler = (e) => {
        // クリックされたボタンを取得します
        const $targetButton = e.currentTarget;
        // 現在のカウントを取得して整数に変換します
        let currentCount = parseInt($counter.textContent);
        // クリックされたボタンが「+」の場合、カウントを1増やします
        if($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
        // それ以外の場合、カウントを1減らします
        } else {
            $counter.textContent = currentCount - 1;
        }
    }
    // すべてのボタンにクリックイベントリスナーを追加します
        for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
            document.getElementsByClassName("js-button")[index].
            addEventListener("click", (e) => clickHandler(e))
        }
 })();