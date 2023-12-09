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

        // タッチイベントリスナーを追加
        document.addEventListener('touchmove', function (e) {
            if (imageDisplay) {
                var touchX = e.touches[0].clientX;
                var touchY = e.touches[0].clientY;
                moveOmikuji(touchX, touchY);
            }
        });
        var shakePrompt = document.getElementById('shakePrompt');
        shakePrompt.style.display = 'block';
    });

    // マウスの動きに連動して画像を動かす
    document.addEventListener('mousemove', function (e) {
        if (imageDisplay) {
            moveOmikuji(e.pageX, e.pageY);
        }
    });

    function moveOmikuji(x, y) {
        var omikujiImage = document.getElementById('omikujiImage');
        if (omikujiImage) {
            omikujiImage.style.left = (x - omikujiImage.width / 2) + 'px';
            omikujiImage.style.top = (y - omikujiImage.height / 2) + 'px';
            if (mouseMoveCount < maxMouseMove) {
                mouseMoveCount++;
                if (mouseMoveCount >= maxMouseMove) {
                    omikujiImage.src = 'images/omikuji_shake2.png';
                    setTimeout(function () {
                        window.location.href = 'result.html';
                    }, transitionDelay);
                }
            }
        }
    }
});
