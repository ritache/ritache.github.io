// ensure navbar doesn't cover scroll to section
$('.anchor').click(function(){    
  var divId = $(this).attr('href');
   $('html, body').animate({
    scrollTop: $(divId).offset().top - 80
  }, 100);
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollTop").style.display = "block";
  } else {
    document.getElementById("scrollTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//   // disable dragging and saving of images
//   document.oncontextmenu = function(e){
//     var target = (typeof e !="undefined")? e.target: event.srcElement
//     if (target.tagName == "IMG" || (target.tagName == 'A' && target.firstChild.tagName == 'IMG'))
//         return false
// }
// add to body tag if needed on contextmenu="return false;" onselectstart="return false;" ondragstart="return false;"