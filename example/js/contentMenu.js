///////////////////////////////////////////////
// ggContentMenu Cell JS/CSS PlugIn V1.0     //
//  Developed by: Ing.Gerardo Garita J.      //
//                FullStack Developer        //
//  email:  info@ggaritaj.com                //
//  date:       friday, 2018-09-01           //
//  last date:  friday, 2018-09-01           //
///////////////////////////////////////////////

; (function ($) {
    var _opts;
    jQuery.fn.ContentMenu = function () {
        return this;
    };
    jQuery.fn.ggContentMenu = function (options) {
        try {
            var _menu = this;
            var _height = $(window).height();
            $(_menu).find("a").each(function (p, atag) {
                $(atag).on("click", function (e) {
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                    } else {
                        $(this).addClass("active");
                    }
                });
            });
            $('html').unbind("click").on('click', function (event) {
                if ($(_menu).find($(event.target)).length <= 0) {
                    $(".ggContentMenu div.contentMenu.first").animate({ width: "0px" }, 700);
                    setTimeout(function () {
                        $(".ggContentMenu a.active").removeClass("active");
                        $(".ggContentMenu div.contentMenu.first").css("width", "260px");
                    }, 700);
                } else {
                    $(".ggContentMenu div.contentMenu.first").css("width", "260px");
                }
            });
            $(this).ContentMenu().Refresh(options);
            console.log("gg:content menu ready!");
        }
        catch (err) {
            console.log("Error: " + err + ".");
        }
        finally {
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 1000);
        }
    };
    jQuery.fn.ContentMenu().Refresh = function (options) {
        try {
            var _height = $(window).height();
            _opts = ((options == undefined || options === null || options === "") ? _opts : options);
            if ((_opts != undefined) && (_opts !== null) && (_opts !== "")) {
                if (_opts.hasOwnProperty("top")) {
                    $(".ggContentMenu div.contentMenu.first").css("top", _opts.top);
                    _height -= (_opts.top);
                } else {
                    $(".ggContentMenu div.contentMenu.first").css("top", 0).css("border-top", "0px");
                }
                if (_opts.hasOwnProperty("bottom")) {
                    $(".ggContentMenu div.contentMenu.first").css("bottom", _opts.bottom);
                    _height -= (_opts.bottom);
                } else {
                    $(".ggContentMenu div.contentMenu.first").css("bottom", 0).css("border-bottom", "0px");
                }
                if (_opts.hasOwnProperty("left")) {
                    $(".ggContentMenu div.contentMenu.first").css("left", _opts.left).css("border-left", "0px");
                } else {
                    $(".ggContentMenu div.contentMenu.first").css("left", 0);
                }
                if (_opts.hasOwnProperty("right")) {
                    $(".ggContentMenu div.contentMenu.first").css("right", _opts.right).css("border-right", "0px");
                }
                if (_opts.hasOwnProperty("height")) {
                    $(".ggContentMenu div.contentMenu.first").css("max-height", _opts.height);
                } else {
                    $(".ggContentMenu div.contentMenu.first").css("max-height", _height);
                }
            } else {
                $(".ggContentMenu div.contentMenu.first").css("top", 0);
                $(".ggContentMenu div.contentMenu.first").css("left", 0);
                $(".ggContentMenu div.contentMenu.first").css("bottom", 0);
                $(".ggContentMenu div.contentMenu.first").css("max-height", _height);
                $(".ggContentMenu div.contentMenu.first").css("z-index", 100);
            }
        }
        catch (err) {
            console.log("Error: " + err + ".");
        }
        finally {
            setTimeout(function () {
                window.dispatchEvent(new Event('resize'));
            }, 1000);
        }
    };
})(jQuery);