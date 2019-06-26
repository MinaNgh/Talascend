

$(window).scroll(function () {
    $('.image-frame').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();
        
        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            console.log(imagePos);
            $(this).addClass("change-scaleimage");
                       
            $('#text1').addClass("textChange");
            $('#text1').addClass("scrollText");             
            $('#text2').addClass("lastScrollText"); 

            $( '.image' ).addClass('hide');
        } else {
            $(this).removeClass("change-scaleimage");
            $('#text1').removeClass("scrollText");             
            $('#text2').removeClass("lastScrollText");          
         
            $('#text1').removeClass("textChange");

            $( '.image' ).removeClass('hide');
            
        }
    });
});