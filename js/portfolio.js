// ensure navbar doesn't cover scroll to section
$('#chevron').click(function(){    
    var divId = $(this).attr('href');
     $('html, body').animate({
      scrollTop: $(divId).offset().top - 80
    }, 100);
  });

  // disable dragging and saving of images