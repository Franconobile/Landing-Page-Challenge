$(window).scroll( function(){
    $('.gaming-info').each( function(i){

        var bottom_of_object =  $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object - 400 ){
            $(this).addClass('is-visible');
        }
        else {
            $(this).removeClass('is-visible');
        }
    });
});