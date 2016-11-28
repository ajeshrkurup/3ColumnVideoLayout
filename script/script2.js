//IIFE
(function () {

    //Global Variables
    var globaliFrame;  //iframe element
    var globalWindowWidth; //width of window
    var globalWindowHeight; // height of window
    var globalWidthVideoContainer; //width of video popup container element
    var globalHeightVideoContainer; //height of video popup container element
    var iFrameWidth; //width of iframe element
    var iFrameHeight;//height of iframe element



    //function to set the size of pop video on resizing the window
    function resizeIFrameToFitContent() {
        globaliFrame = document.getElementById( 'iFrame1' ); 
        globalWindowWidth = $(window).width();
        globalWindowHeight = $(window).height();


        //breakpoint-1
        if(globalWindowWidth < 600) {

            globalWidthVideoContainer = globalWindowWidth*(0.9);
            globalHeightVideoContainer = globalWindowHeight*(0.35);

            $('.video-container').css('left', "5%");
            $('.video-container').css('top', "25%");


            $('.video-container').css('width', globalWidthVideoContainer);
            $('.video-container').css('height', globalHeightVideoContainer);
            $('.video-container').css('padding-left', '5%');
            $('.video-container').css('padding-right', '5%');
            $('.video-container').css('padding-top', '3%');
            $('.video-container').css('padding-bottom', '5%');

           // $('.video-container').css('padding-left', '20%');
            iFrameWidth  = globalWidthVideoContainer*0.90;
            iFrameHeight = globalHeightVideoContainer*0.80;
            $(globaliFrame).css('width', iFrameWidth);
            $(globaliFrame).css('height', iFrameHeight);
        }

        else {

            $('.video-container').css('padding', '1.5%');
    //        $('.video-container').css('padding-right', '1.5%');
    //        $('.video-container').css('padding-top', '1.5%');
    //        $('.video-container').css('padding-bottom', '1.5%');

            //breakpoint-3

            if(globalWindowWidth < 767) {

                globalWidthVideoContainer = globalWindowWidth*(0.9);
                globalHeightVideoContainer = globalWindowHeight*(0.40);
                $('.video-container').css('left', "5%");
                $('.video-container').css('top', "25%");
            }

            //breakpoint-4
            else if(globalWindowWidth < 1083){

                globalWidthVideoContainer = globalWindowWidth*(0.8);
                globalHeightVideoContainer = globalWindowHeight*(0.50);
                $('.video-container').css('left', "10%");
                $('.video-container').css('top', "20%");
            }

            //breakpoint-5
            else {

                globalWidthVideoContainer = globalWindowWidth*(0.8);
                globalHeightVideoContainer = globalWindowHeight*(0.65);
                $('.video-container').css('left', "10%");
                $('.video-container').css('top', "15%");

            }


        //calculate spacing around the iframe 5% & 4%
        var padTop = globalWidthVideoContainer*(.05);
        var padLeft = globalHeightVideoContainer*(.04);

        $('.video-container').css('width', globalWidthVideoContainer);
        $('.video-container').css('height', globalHeightVideoContainer);

    //     globaliFrame.width  = globalWidthVideoContainer - padLeft
    //     globaliFrame.height = globalHeightVideoContainer - padTop;

            iFrameWidth  = globalWidthVideoContainer - 2*padLeft;
            iFrameHeight = globalHeightVideoContainer - (2*padTop)*(0.8);
            $(globaliFrame).css('width', iFrameWidth);
            $(globaliFrame).css('height', iFrameHeight);
        }

    }
    // END - function resizeIFrameToFitContent()

    //whenever browser window size change, automatically adjust video size
    $(window).on('resize', function(){
        resizeIFrameToFitContent();
    });

    //Video Popup 
    $('.video-link').click(function() {

        var videoSrc = $(this).attr('data-src');

        resizeIFrameToFitContent();


        $('.video-container').find('iframe').attr('src', videoSrc);
        $('body').css('background-color', '#333')
        $('.grid').css('opacity', '.2');
        $('.video-container').fadeIn(1000);

    }); 

    //Close Button - Video Popup
    $('.close-btn').click(function() {

        $('.video-container').find('iframe').attr('src', '');
        $('.video-container').hide();
        $('body').css('background-color', '')
        $('.grid').css('opacity', '1');
    });
    
})();