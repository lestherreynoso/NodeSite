$(document).ready(function(){
        
        $('.carousel').carousel({

          	interval: false
        
        })

        $("div.panel-heading > ul.nav > li").click(function(){

        	$("div.panel-heading > ul.nav > li").removeClass("active").attr("id", "")
        	$(this).addClass("active").attr("id","active")

        })
        
        $("div.panel-heading > ul.nav > li > a").click(function(){

        	$("div.panel-heading > ul.nav > li > a").removeClass("active")
        	$(this).addClass("active")
  		
  		})
})