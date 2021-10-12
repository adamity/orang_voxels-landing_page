setMaxHeight('.perks-card-body');
setMaxHeight('.roadmap-card-body');

$(document).ready(function () {
    if ($(window).width() < 768) {
        $(".see-more-roadmap").removeClass("d-block").addClass("d-none");
    }
});

$(".bg-sidenav").hide();

$(".sidenav-menu").click(function () {
    $(".bg-sidenav").hide();
    document.querySelector(".sidenav-responsive").style.width = "0";
    document.querySelector(".bg-sidenav").style.backgroundColor = "rgba(0, 0, 0, 0)";
});

$("#sidenav-mobile").click(function (e) {
    e.preventDefault();
    $(".bg-sidenav").show();
    document.querySelector(".sidenav-responsive").style.width = "220px";
    document.querySelector(".bg-sidenav").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

$(".bg-sidenav").click(function () {
    $(this).hide();
    document.querySelector(".sidenav-responsive").style.width = "0";
    document.querySelector(".bg-sidenav").style.backgroundColor = "rgba(0, 0, 0, 0)";
});

$("#see-more-roadmap").click(function (e) {
    e.preventDefault();
    $(this).parent().parent().removeClass("d-block").addClass("d-none");
    $(".see-more-roadmap").removeClass("d-none").addClass("d-block");
});

function setMaxHeight(value) {
    $(value).outerHeight('auto');
    $.fn.divMaxHeight = 0;

    $(value).each(function(index,item){
        if( $(item).outerHeight() > $.fn.divMaxHeight ){
            $.fn.divMaxHeight = $(item).outerHeight();
        }
    });

    if ($(window).width() >= 768 || value != '.roadmap-card-body') {
        $(value).outerHeight($.fn.divMaxHeight);
        if (value == '.roadmap-card-body') $('.roadmap-card-img').outerHeight($.fn.divMaxHeight);
    }
}