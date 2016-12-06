(function (window, document, undefined) {
    var interval = 800;
    var closeDelay = 200;
    var index = 0;
    var couponLinks;
    var getCoupon = function () {
        if (index >= couponLinks.length) {
            console.log("点赞完毕");
            window.scrollTo(0, document.body.scrollHeight);
            return;
        }
        var coponLink = couponLinks[index];
        coponLink.click(); index++;
        console.log("点赞 第" + index + " 条");
        setTimeout(getCoupon, interval);
        setTimeout(function () {
            var close = document.querySelector('.mui-dialog-close');
            if (close != null) close.click();
        }, closeDelay);
    };
    var _scrollTop = 0;
    var _scrollStep = document.documentElement.clientHeight;
    var _maxScrollTop = document.body.clientHeight - document.documentElement.clientHeight;
    var autoScrollDown = setInterval(function () {
        _scrollTop += _scrollStep;
        if (_scrollTop > _maxScrollTop) {
            clearInterval(autoScrollDown);
            couponLinks = document.querySelectorAll(".up[aria-pressed='false']");
            console.log("总共：" + couponLinks.length + "条答案待点赞...");
            getCoupon();
        } else {
            document.body.scrollTop = _scrollTop;
        }
    }, 500);
})(window, document);