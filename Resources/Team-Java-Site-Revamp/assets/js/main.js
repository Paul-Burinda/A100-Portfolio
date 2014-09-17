//close video when modal closes
$('document').ready(function(){

	$('#videoModal').on('hide.bs.modal', function() {
        var iframe= $('#videoModal iframe');
        var src = iframe.attr('src');
        iframe.attr('src', src);
    });

});