$('.carousel').carousel()


$(".nav-link").hover(function(){
  $ (this).css("text-decoration","underline") 
  $ (this).css("color","white")
});
$(".nav-link").mouseleave(function(){ 
  $ (this).css("text-decoration", "none")
});

$(".nav-link").mouseleave(function(){ 
  $ (this).css("color","white")
});



$(".btn-primary").hover(function(){
  $(this).css("background-color","white");
  $(this).css("color","#6505B5");
});

$(".btn-primary").mouseleave(function(){ 
  $ (this).css("background-color","#6505B5")
  $ (this).css("color","white")
});


$(".btn-secondary").hover(function(){
  $(this).css("color","white");
  $ (this).css("background-color","#6505B5")
});

$(".btn-secondary").mouseleave(function(){ 
  $ (this).css("color","#6505B5")
  $ (this).css("background-color","white")
});

$(".dropdown-menu-flex").click(function(){
$ (this).Dropdown('.dropdown-toggle')
});






