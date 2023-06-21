$(() => {
    // ハンバーガメニューの切り替え処理
    $('#hamburger .header-hamburger').on('click', () => {
        const isActive = 'is-active';

        if ($('.header-hamburger--open').hasClass(isActive)) {
            $('.header-hamburger--open').removeClass(isActive);
            $('.header-hamburger--close').addClass(isActive);
            $('.modal').fadeIn();
        } else {
            $('.header-hamburger--close').removeClass(isActive);
            $('.header-hamburger--open').addClass(isActive);
            $('.modal').fadeOut();
        }
    });

    // トップへスクロールアニメーション
    $('.arrow').click(function () {
        var target = $(this.hash);
        var position = $(target).offset().top;
        $('html,body').animate({ scrollTop: position }, 400);
        return false;
    });
});