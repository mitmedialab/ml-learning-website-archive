$(function() {        

    $('.project').hover(function(){  
        $(this).find(".description").css("visibility","visible");
    },    
    function(){ 
        $(this).find(".description").css("visibility","hidden");
    });

});


