$(function() {
    var toggleDrawer = function() {
        console.log("firing"), $(".pair").on("click", ".toggle-drawer", function() {
            console.log($(this).parent()), $(this).parent().toggleClass("drawer-active");
        });
    };
    toggleDrawer();
    var timer, body = $("body");
    $(window).on("scroll", function() {
        body.hasClass("disable-hover") || body.addClass("disable-hover"), timer = setTimeout(function() {
            body.removeClass("disable-hover");
        }, 250);
    }, !1);
});