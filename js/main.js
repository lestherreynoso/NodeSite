$(document).ready(function(){
        $('.carousel').carousel({
          interval: false
        })
        $("div.panel-heading > ul.nav > li").click(function(){
          $("div.panel-heading > ul.nav > li").removeClass("active")
          $(this).addClass("active")
        })
    })