$( document ).ready(function() {
    $('#navbar li').click(function(e) {
        var $this = $( this ); 
        
        $this.parent().find('.active').removeClass('active');
        $this.addClass('active');
    });
});
