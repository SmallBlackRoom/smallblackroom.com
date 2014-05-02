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
    $(id + ' img:first-child').attr("src").replace("_off", "_on");
}

function buttonOff(id) {
    $(id + ' img:first-child').attr("src").replace("_on", "_off");
}
