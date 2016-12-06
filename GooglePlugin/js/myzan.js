(function ($) {
    $(function () {
        var interval = 800;
        var closeDelay = 200;
        var index = 0;
        var couponLinks;
        
        var _scrollTop = 0;
        var _scrollStep = document.documentElement.clientHeight;
        var _maxScrollTop = document.body.clientHeight - document.documentElement.clientHeight;

        //获取赞
        var getCoupon = function () {
            couponLinks = $(".up[aria-pressed='false']");
            if (couponLinks.length <= 0) {
                window.scrollTo(0, document.body.scrollHeight);
                window.setTimeout(function(){ 
                    getCoupon();
                },5000); 
            }
            else {
                exec();
            }
        };
        //自定下拉
        var autoScrollDown = function () {
            console.log("自动下拉");
            window.scrollTo(0, document.body.scrollHeight)
            
            window.setTimeout(function () {
                getCoupon();
            }, 5000);
        };


        

        //处理赞
        function exec() {
            if (couponLinks.length>0) {
                for (var i = 0; i < couponLinks.length; i++) {
                    var coponLink = couponLinks[i];
                    index++;
                    console.log("点赞 第" + index + " 条");
                    coponLink.click();
                }

                autoScrollDown();
            }
            
        }
        getCoupon();
    });




})(jQuery);