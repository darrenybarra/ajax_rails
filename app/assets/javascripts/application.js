// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap/dropdown
//= require bootstrap/modal
//= require bootstrap/transition
//= require jasny-bootstrap.min
//= require jquery_ujs
//= require jquery.remotipart
//= require turbolinks
//= require jquery-ui/core
//= require jquery-ui/widget
//= require jquery-ui/position
//= require jquery-ui/widgets/autocomplete
//= require jquery-ui/widgets/menu
//= require toastr
//= require spin
//= require jquery.spin
//= require_tree .

$(document).on('turbolinks:load', function() {
    $('#term').autocomplete({
        source: "/contacts/autocomplete",
        minLength: 3,
        select: function(event, ui) {
            $('#term').val(ui.item.value);
            $(this).closest('form').submit();
        }
    });

    $('#form-modal-save-btn').click(function() {
        $('#form-modal-body').find('form').submit();
    });

    $('#ajax-spin').spin(false);
});

$(document).ajaxStart(function() {
    $('#ajax-spin').spin({
        lines: 13 // The number of lines to draw
            ,
        length: 28 // The length of each line
            ,
        width: 14 // The line thickness
            ,
        radius: 42 // The radius of the inner circle
            ,
        scale: 1 // Scales overall size of the spinner
            ,
        corners: 1 // Corner roundness (0..1)
            ,
        color: '#000' // #rgb or #rrggbb or array of colors
            ,
        opacity: 0.25 // Opacity of the lines
            ,
        rotate: 0 // The rotation offset
            ,
        direction: 1 // 1: clockwise, -1: counterclockwise
            ,
        speed: 1 // Rounds per second
            ,
        trail: 60 // Afterglow percentage
            ,
        fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
            ,
        zIndex: 2e9 // The z-index (defaults to 2000000000)
            ,
        className: 'spinner' // The CSS class to assign to the spinner
            ,
        top: '50%' // Top position relative to parent
            ,
        left: '50%' // Left position relative to parent
            ,
        shadow: false // Whether to render a shadow
            ,
        hwaccel: false // Whether to use hardware acceleration
            ,
        position: 'absolute' // Element positioning
    });
});

$(document).ajaxStop(function() {
    $('#ajax-spin').spin(false);
});

$(document).on('click', '.pagination a[data-remote=true], a.list-group-item', function() {
    history.pushState({}, '', $(this).attr('href'));
});

$(window).on('popstate', function() {
    $.get(document.location.href);
});