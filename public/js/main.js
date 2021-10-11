setMaxHeight('.perks-card-body');
setMaxHeight('.roadmap-card-body');

function setMaxHeight(value) {
    $(value).outerHeight('auto');
    $.fn.divMaxHeight = 0;

    $(value).each(function(index,item){
        if( $(item).outerHeight() > $.fn.divMaxHeight ){
            $.fn.divMaxHeight = $(item).outerHeight();
        }
    });

    $(value).outerHeight($.fn.divMaxHeight);
    if (value == '.roadmap-card-body') $('.roadmap-card-img').outerHeight($.fn.divMaxHeight);
}