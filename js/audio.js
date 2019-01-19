$(function() {
    var audio = $("audio")[0];
    $(".audioBox").on("mouseenter", function() {
        $(this).css({
            right() {
                return 0;
            }
        })
    }).on("mouseleave", function() {
        $(this).css({
            right() {
                return -90;
            }
        })
    })
    $(".audio").on("click", function(){
        $(this).css({
            animationPlayState() {
                var play = $(this).css("animationPlayState");
                if(play === "running") {
                    audio.pause();
                    return "paused";
                } else {
                    audio.play();
                    return "running";
                }
            }
        });
    })
})