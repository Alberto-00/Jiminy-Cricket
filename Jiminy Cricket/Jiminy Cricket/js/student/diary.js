$( document ).ready(function() {
    $('#btn > button').on('click', function(e) {

        e.preventDefault();
        document.execCommand($(this).data('role'), false);
    });
})