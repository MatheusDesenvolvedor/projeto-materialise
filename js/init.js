(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


  // Sort function for sorting autocomplete results


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems, options);
});
$('p.enfeitar').text("0%")
let doc = document.documentElement;
console.log(doc)
$(window).scroll(function(){
  var windowOffy = $(window).scrollTop();
  var windowHeight = $(window).height();
  let value = parseInt(100 * doc.scrollTop / (doc.scrollHeight - doc.clientHeight));
  //console.log(value);
  $('label').css('height',value * 3);
  if(value == 100){
    $('p.enfeitar').text('Fim')
  }
  if(value <= 99){
    $('p.enfeitar').text(value +"%")
  }
  //console.log(windowOffy);
 // var tamanho = (windowOffy * (windowOffy / 100)) / 100;
 // $(window).scrollTop();
 // var eloffy = $('fott').top();
});
  //console.log(eloffy);
//  var tamanhoFinal = 
  //console.log(tamanhoFinal);
    /*
  if(tamanho > 10){
    tamanho == 10;
  }
  var tamanho2 = (windowOffy/100) * 1.49999;
  
  if(tamanho2 < 1){
    tamanho2 == 0;
   }
  if(tamanho2 >= 99){
   tamanho2 == 100;
  }
  console.log(tamanho2 * 10)
  $('label').css('height',tamanho * 50);
  if(tamanho * 50 >= 530){
    $('p.enfeitar').text('Fim')
  }
  if(tamanho * 50 <= 530){
    $('p.enfeitar').text(tamanho2.toFixed(1) * 10+"%")
  }
})
/*
$('label').css('height',tamanho);
*/
//});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
  $('.materialboxed').materialbox();
});