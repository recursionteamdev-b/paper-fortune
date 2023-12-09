document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('draw');
    var shakeText = document.getElementById('shakeText');
    var imageDisplay = false;
    var mouseMoveCount = 0;
    var maxMouseMove = 150; // マウスを動かす最大回数
    var transitionDelay = 1200; // 画面遷移までの遅延時間（ミリ秒）

    // おみくじを引くボタンのイベントリスナー
    button.addEventListener('click', function () {
        buttonSound.play();
        // おみくじの画像表示
        var omikujiImage = document.createElement('img');
        omikujiImage.id = 'omikujiImage';
        omikujiImage.src = 'images/omikuji_box2.png'; // おみくじ画像のパス
        omikujiImage.style.position = 'absolute';
        document.body.appendChild(omikujiImage);
        imageDisplay = true;
        shakeText.style.display = 'block'; // テキストを表示
    });

    // マウスの動きに連動して画像を動かす
    document.addEventListener('mousemove', function (e) {
        if (imageDisplay) {
            var omikujiImage = document.getElementById('omikujiImage');
            omikujiImage.style.left = (e.pageX - omikujiImage.width / 2) + 'px';
            omikujiImage.style.top = (e.pageY - omikujiImage.height / 2) + 'px';

            // マウスを指定回数動かしたら、棒の画像に変更
            if (mouseMoveCount < maxMouseMove) {
                mouseMoveCount++;
                if (mouseMoveCount >= maxMouseMove) {
                    omikujiImage.src = 'images/omikuji_shake2.png'; // 棒画像のパス
                    shakeText.style.display = 'none'; // テキストを非表示
                    // 2秒後に画面遷移
                    setTimeout(function () {
                        window.location.href = 'result.html'; // 画面遷移先のURL
                    }, transitionDelay);
                }
            }
        }
    });
});
