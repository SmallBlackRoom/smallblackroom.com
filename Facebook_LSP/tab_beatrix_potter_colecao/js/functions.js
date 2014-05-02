$(document).ready(function() {
    
    $('#toggle-livros').click(function(){
        $('#livros').show();
        buttonOn('#toggle-livros');
        
        $('#bio').hide();
        buttonOff('#toggle-bio');
    });
    
    $('#toggle-bio').click(function(){
        $('#livros').hide();
        buttonOff('#toggle-livros');
        
        $('#bio').show();
        buttonOn('#toggle-bio');
    });

});

function buttonOn(id) {
    $(id + ' img:first-child').attr("src").replace("_off", "_on");
}

function buttonOff(id) {
    $(id + ' img:first-child').attr("src").replace("_on", "_off");
}
