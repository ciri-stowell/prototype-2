$(document).ready(function() {
  var menu = $('.nav-container .nav');
  
  $('.sub-button').click(function() {

    var subMenu = $(this).siblings('ul');

    subMenu.show();

    menu.animate({

      'margin-left' : '-='+menu.width()+'px'
    }, 'linear');

  });
  
  var backButton = $('.nav-container .nav li.title > .go-back');

backButton.click(function() {
    var subMenu = $(this).parent().parent();
    menu.animate({
      'margin-left' : '+='+menu.width()+'px'
    }, 'linear', function() {
        subMenu.hide();
    });
  });

  $(".menu-button").click(function() {
    $(".menu-button").hide();
    $(".menu-button-x").show();
    $(".nav-container").show();
    $('.nav-dropdown ul').each(function() {
    });

  });

  $(".menu-button-x").click(function() {
    $(".menu-button-x").hide();
    $(".menu-button").show();
    $(".nav-container").hide();
  });



$(".page").click(function() {
  var title = $(this).text();
   $(".nav-container").toggle();
    $("p.page-title").replaceWith("<p class='page-title'>" + title + "</p>");
         $(".menu-button-x").hide();
  $(".menu-button").show();
});

$("#hamburger").click(function() {
  $("#main-menu").toggle();
  });

$("#main-menu a").click(function() {
  $('.nav-dropdown ul').each(function() {
    if($(this).css("display") === "block") {
      $(this).hide();
      menu.css('margin-left', '0')
    }
  });

  $("#main-menu").toggle();
  $(".nav-container").toggle();

});


});