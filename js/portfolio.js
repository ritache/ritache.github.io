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

//----------------
// Image Zoom
//----------------
$(document).ready(function() {
	$(".fancybox-button").fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none',
		closeBtn		: false,
		helpers		: {
			title	: { type : 'inside' },
			buttons	: {}
		}
	});
});

//-------------
// Lazy image loading
//-------------
lazyload();

// When the user clicks on an anchor with a class name "anchor"...
$('body').on('click', 'a.anchor', function(e) {

  // Get the hash. In this example, "#myDestinationAnchor".
  var targetSelector = this.hash;
  var $target = $(targetSelector);

  // Animate the scroll to the destination...
  $('html, body').animate(
      {
          scrollTop: $target.offset().top // Scroll to this location.
      }, {
          // Set the duration long enough to allow time
          // to lazy load the elements.
          duration: 2000,

          // At each animation step, check whether the target has moved.
          step: function( now, fx ) {

              // Where is the target now located on the page?
              // i.e. its location will change as images etc. are lazy loaded
              var newOffset = $target.offset().top;

              // If where we were originally planning to scroll to is not
              // the same as the new offset (newOffset) then change where
              // the animation is scrolling to (fx.end).
              if(fx.end !== newOffset)
                  fx.end = newOffset;
          }
      }
  );
});
// registerListener('load', setLazy);
// registerListener('load', lazyLoad);
// registerListener('scroll', lazyLoad);

// var lazy = [];

// function setLazy(){
//     lazy = document.getElementsByClassName('lazy');
//     console.log('Found ' + lazy.length + ' lazy images');
// } 

// function lazyLoad(){
//     for(var i=0; i<lazy.length; i++){
//         if(isInViewport(lazy[i])){
//             if (lazy[i].getAttribute('data-src')){
//                 lazy[i].src = lazy[i].getAttribute('data-src');
//                 lazy[i].removeAttribute('data-src');
//             }
//         }
//     }
    
//     cleanLazy();
// }

// function cleanLazy(){
//     lazy = Array.prototype.filter.call(lazy, function(l){ return l.getAttribute('data-src');});
// }

// function isInViewport(el){
//     var rect = el.getBoundingClientRect();
    
//     return (
//         rect.bottom >= 0 && 
//         rect.right >= 0 && 
//         rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
//         rect.left <= (window.innerWidth || document.documentElement.clientWidth)
//      );
// }

// function registerListener(event, func) {
//     if (window.addEventListener) {
//         window.addEventListener(event, func)
//     } else {
//         window.attachEvent('on' + event, func)
//     }
// }

//   // disable dragging and saving of images
//   document.oncontextmenu = function(e){
//     var target = (typeof e !="undefined")? e.target: event.srcElement
//     if (target.tagName == "IMG" || (target.tagName == 'A' && target.firstChild.tagName == 'IMG'))
//         return false
// }
// add to body tag if needed on contextmenu="return false;" onselectstart="return false;" ondragstart="return false;"