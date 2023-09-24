// スクロール
$('.scroll-top a').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 500);
    return false;
});

//ハンバーガーメニュー
$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active-btn');//ボタン自身に activeクラスを付与し
    $("#nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active-btn');//ボタンの activeクラスを除去し
    $("#nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
