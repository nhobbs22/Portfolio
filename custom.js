$(function(){
    $("#earth").on({
     mouseenter: function(){
      $(this).attr('src','earth_hover.png');
    },
    mouseleave: function(){
      $(this).attr('src','earth.png');
    }
    });
});
    $(function(){
        $("#waste").on({
         mouseenter: function(){
          $(this).attr('src','waste_hover.png');
        },
        mouseleave: function(){
          $(this).attr('src','waste.png');
        }
        });    
  });

  $(document).ready(function(){
    $("#menu").click(function(){
        if(clicked){
            $(this).css('src','menu.png');
            clicked  = false;
        } else {
            $(this).css('src', 'menu_click.png');
            clicked  = true;
        }   
    });
});

$('.arrow-2-x').on('click', function(){
	$(this).toggleClass('x-ready');
})
