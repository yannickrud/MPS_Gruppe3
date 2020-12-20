var id = document.getElementById("buttons");
var items = id.getElementsByTagName("div");

var current = 0;

function animate(){
  $(items[current]).addClass("animate");

  if (current == items.length){

  }else{
    current++
    setTimeout(function(){
      animate();
  }, 300);
  }
}

  setTimeout(function(){
      animate();
  }, 800);

var resizeTimer;

$(window).on('resize', function(e) {

  $(items).removeClass("animate");

  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {

    current = 0;
    animate();

  }, 250);

});
