$('.m_btn').click(function(){
    $('.m_menu').show();
});
$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        $('.m_menu').fadeOut();
    }
});