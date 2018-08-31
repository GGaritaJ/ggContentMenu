///////////////////////////////////////////////
// ggContentMenu Cell JS/CSS PlugIn V1.0     //
//  Developed by: Ing.Gerardo Garita J.      //
//                FullStack Developer        //
//  email:  info@ggaritaj.com                //
//  date:       friday, 2018-09-01           //
//  last date:  friday, 2018-09-01           //
///////////////////////////////////////////////

; (function ($) {
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

            if ((options != undefined) && (options !== null) && (options !== "")) {
                if (options.hasOwnProperty("top")) {
                    $(".ggContentMenu div.contentMenu.first").css("top", options.top);
                    _height -= (options.top);
                } else {
                    $(".ggContentMenu div.contentMenu.first").css("top", 0).css("border-top", "0px");
                }
                if (options.hasOwnProperty("bottom")) {
                    $(".ggContentMenu div.contentMenu.first").css("bottom", options.bottom);
                    _height -= (options.bottom);
                } else {
                    $(".ggContentMenu div.contentMenu.first").css("bottom", 0).css("border-bottom", "0px");
                }

                if (options.hasOwnProperty("left")) {
                    $(".ggContentMenu div.contentMenu.first").css("left", options.left).css("border-left", "0px");
                } else {
                    $(".ggContentMenu div.contentMenu.first").css("left", 0);
                }
                if (options.hasOwnProperty("right")) {
                    $(".ggContentMenu div.contentMenu.first").css("right", options.right).css("border-right", "0px");
                }
                
                if (options.hasOwnProperty("height")) {
                    $(".ggContentMenu div.contentMenu.first").css("max-height", options.height);
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
})(jQuery);