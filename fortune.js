document.addEventListener('DOMContentLoaded', (event) => {
    const fortuneTable = {
        1: "大吉",
        2: "中吉",
        3: "小吉",
        4: "吉",
        5: "凶"
    }

    const colorTable = {
        1: "赤",
        2: "青",
        3: "黄色",
        4: "紫",
        5: "オレンジ"
    }

    const langTable = {
        1: "Java",
        2: "Php",
        3: "Python",
        4: "JavaScript",
        5: "C++"
    }

    const omikujiDiv = document.getElementById("omikuji");

    let card = document.createElement("div");
    card.classList.add("card", "m-3", "col-3", "p-1", "set");
    card.setAttribute("style", "width: 40rem");

    let randomNum = Math.floor(Math.random() * 5) + 1;

    let title = document.createElement("h5");
    title.innerHTML = "今日の運勢は。。。";

    let result = document.createElement("h1");
    result.innerHTML = fortuneTable[randomNum];

    let colorTitle = document.createElement("h5");
    colorTitle.innerHTML = "今日のラッキーカラーは。。。";

    let colorResult = document.createElement("h2");
    colorResult.innerHTML = colorTable[randomNum];

    let langTitle = document.createElement("h5");
    langTitle.innerHTML = "今日のおすすめの言語は。。。";

    let langResult = document.createElement("h2");
    langResult.innerHTML = langTable[randomNum];

    card.append(title);
    title.append(result);
    card.append(colorTitle);
    colorTitle.append(colorResult);
    card.append(langTitle);
    langTitle.append(langResult);

    omikujiDiv.append(card);
});
