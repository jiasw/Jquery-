; (function ($,window,document) {
    var Beautifier = function (ele, opt) {
        this.$element = ele,
        this.defaults = {
            'color': 'red',
            'fontSize': '12px',
            'textDecoration': 'none'
        },
        this.options = $.extend({}, this.defaults, opt)
    }

    //定义方法
    Beautifier.prototype = {
        beautity: function () {
            return this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'textDecoration': this.options.textDecoration
            })
        }

    }

    $.fn.myPlugin = function (options) {
        var buautifier = new Beautifier(this, options);
        return buautifier.beautity();
    }
})(jQuery,window,document);

