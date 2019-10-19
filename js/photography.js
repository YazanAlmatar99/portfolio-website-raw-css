// var imagesHasAlreadySlided = false;
//dynamically get pictures number
var imagesNumber = $(".col-md-4").length;
//sliding in animation function
function slideInImages(className) {
  $("." + className).slideDown("slow");
}

console.log(imagesNumber);
var i = 0;
//Used a function instead of a loop to make setTimeout() work ;)
function startSlidingInImages() {
  setTimeout(function() {
    var temp = "image-" + (i + 1);
    slideInImages(temp);
    $('html, body').animate({
      scrollTop: $("." +temp).offset().top
   },1000);
    i++;
    if (i < imagesNumber) {
      startSlidingInImages();
    }
  }, 500);
}

startSlidingInImages();
setTimeout(function(){
  $('html, body').animate({
    scrollTop: 0
  },1000);
},imagesNumber * 700)
