(function($) {
    $.get('data.php', {}, function(data) {
        console.log(data);
    }, 'json');
})(jQuery);

