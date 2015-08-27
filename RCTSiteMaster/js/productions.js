$(document).ready(function(){
    $('div div a.page-scroll.portfolio-box').on('click',function(){
        // $("#panel").slideToggle("slow");
        var panel = $(this).attr('data-info');
        var check = $(this).parent().parent().parent().parent().children('div.panel').not(panel);
        console.log(check);
        $(check).slideUp();
      $(panel).slideToggle("slow");
    });
});

$(document).ready(function(){
    $('div a.text-success').on('click',function(){
        // $("#panel").slideToggle("slow");
        var panel = $(this).attr('data-info');

      $(panel).slideToggle("slow");
    });
});


$(document).ready(function(){
    $('div a.link').on('click',function(){
        // $("#panel").slideToggle("slow");
        var panel = $(this).attr('data-info');
 var check = $(this).parent().parent().parent().children('div.col-md-10.text-center').children('div.panel').not(panel);
console.log(check);
 $(check).hide();
      $(panel).fadeToggle("slow");
    });
});
$(document).ready(function(){
    $('div a.btn.btn-primary.btn-xl').on('click',function(){
        // $("#panel").slideToggle("slow");
        var panel = $(this).attr('data-info');
 var check = $(this).parent().parent().parent().parent().children('div.container').children('div.row')
 .children('div.col-md-12.text-center').children('div.panel').not(panel);
 console.log(check);
 $(check).slideUp();
      $(panel).slideToggle("slow");

  

    });
});

$(document).ready(function(){
    $('div a.btn.btn-default.btn-xl').on('click',function(){
        // $("#panel").slideToggle("slow");
        var panel = $(this).attr('data-info');
 var check = $(this).parent().parent().parent().parent().children('div.container').children('div.row').children('div.col-md-2').children('div.galpanel').not(panel);
 console.log(check);
 $(check).slideUp();
      $(panel).slideToggle("slow");
    });
});



$(document).ready(function(){
 console.log(place);
    /*
    Add this code to every page.

    We start by hiding the body, and then fading it in.
    */
    $('body').hide();

    setTimeout(function(){
      $('body').fadeIn(1000);
    },1000);       

 console.log(place);
 var offset = $(place).offset();
 console.log(offset);
$("html,body").animate({
    scrollTop: offset.top,
    scrollLeft: offset.left
});
    /*
    Now we deal with all 'a' tags...
    */
    if(place != '#page-top'){
          place = '#page-top'; 
    }


});


$(document).ready(function(){
 $('ul li a.page-scroll').on('click',function(e){
    console.log('SONNN');
console.log('SONNN');
     e.preventDefault();   
        
      //  Get the url from this anchors href
        
        var check = $(this).attr('data-info');
        place = check;
        var goTo = $(this).attr('href');
        if (check == 'newpage'){
        /*
        Fade out the whole page
        */
console.log(check);
console.log(goTo);
        $('body').fadeOut('slow');
            /*
            When that's done (on the 'callback') send the browser to the link.
            */
    setTimeout(function(){
         window.location = goTo;
    },1000);       
     
 
       } else if(goTo == 'index.html'){
        console.log('GOING TO INDEX');
        console.log(check);
console.log(goTo);

console.log(place);
        $('body').fadeOut('fast');
            /*
            When that's done (on the 'callback') send the browser to the link.
            */
    setTimeout(function(){
         window.location = goTo;
    },100);       


//  var offset = $(check).offset();
//  console.log(offset);
// $("html,body").animate({
//     scrollTop: offset.top,
//     scrollLeft: offset.left
// });
       }
       if (place != '#page-top'){
        console.log(place);
       }
    });
});

var place = '#page-top';
$(document).ready(function(){
 $('a.navbar-brand.page-scroll').on('click',function(e){
    console.log('SONNN');
console.log('SONNN');
     e.preventDefault();   
        
      //  Get the url from this anchors href
        
        var check = $(this).attr('data-info');
        place = check;
        var goTo = $(this).attr('href');
        if (check == 'newpage'){
        /*
        Fade out the whole page
        */
console.log(check);
console.log(goTo);
        $('body').fadeOut('fast');
            /*
            When that's done (on the 'callback') send the browser to the link.
            */
    setTimeout(function(){
         window.location = goTo;
    },100);       
     
 
       } else if(goTo == 'index.html'){
        console.log('GOING TO INDEX');
        console.log(check);
console.log(goTo);

console.log(place);
        $('body').fadeOut('slow');
            /*
            When that's done (on the 'callback') send the browser to the link.
            */
    setTimeout(function(){
         window.location = goTo;
    },1000);       


//  var offset = $(check).offset();
//  console.log(offset);
// $("html,body").animate({
//     scrollTop: offset.top,
//     scrollLeft: offset.left
// });
       }
       if (place != '#page-top'){
        console.log(place);
       }
    });
});

