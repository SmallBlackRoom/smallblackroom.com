$(document).ready(function() {
    
    $('#toggle-livros').click(function(){
        activate('livros');
        deactivate('bio');
        return false;
    });
    
    $('#toggle-bio').click(function(){
        deactivate('livros');
        activate('bio');
        return false;
    });

});

function activate(section) {
    $('#' + section).show();
    buttonOn('#toggle-' + section);
}

function deactivate(section) {
    $('#' + section).hide();
    buttonOff('#toggle-' + section);
}

function buttonOn(id) {
    image = $(id + ' img:first-child');
    image.attr("src", image.attr("src").replace("_off", "_on"));
}

function buttonOff(id) {
    image = $(id + ' img:first-child');
    image.attr("src", image.attr("src").replace("_on", "_off"));
}
