            $(document).ready(function(){
                $("h2").fadeIn("slow"); 
            
                $('.carousel').carousel({
                    interval: false  
                });

                $("div.col-lg-3 > div.panel > div.panel-body > span").click(function(){
                    $("div.col-lg-3 > div.panel > div.panel-body > span").removeClass("active")
                    $(this).addClass("active")
                });
                $(".jumbotron h1").hover(function(){
                        $(".jumbotron h1").addClass("shimmer")
                    }, function(){
                        $(".jumbotron h1").removeClass("shimmer")
                      
                    });
                $("#sticker").sticky({topSpacing:0});

            })
