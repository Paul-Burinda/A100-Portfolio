
// scroller start
/* Create an array to hold the different image positions */
var itemPositions = [];
var numberOfItems = $('#scroller .item').length;

/* Assign each array element a CSS class based on its initial position */
function assignPositions() {
    for (var i = 0; i < numberOfItems; i++) {
        if (i === 0) {
            itemPositions[i] = 'left-hidden';
        } else if (i === 1) {
            itemPositions[i] = 'left';
        } else if (i === 2) {
            itemPositions[i] = 'middle';

        } else if (i === 3) {
            itemPositions[i] = 'right';
        } else {
            itemPositions[i] = 'right-hidden';
        }

    }
    /* Add each class to the corresponding element */
    $('#scroller .item').each(function(index) {
        $(this).addClass(itemPositions[index]);
    });
    // initial element
    $('#desc').html($('.middle').attr('desc')); 
    $('#created_by').html($('.middle').attr('created')); 
    $('#folio_name').html($('.middle').attr('name'));
    $('#url').html("<a href='"+$('.middle').attr('href')+"' target='_blank'>Visit Project</a>");  
    


}

/* To scroll, we shift the array values by one place and reapply the classes to the images */
function scroll(direction) {
    if (direction === 'prev') {
        itemPositions.push(itemPositions.shift());
    } else if (direction === 'next') {
        itemPositions.unshift(itemPositions.pop());
    }
    $('#scroller .item').removeClass('left-hidden left middle right right-hidden').each(function(index) {
        $(this).addClass(itemPositions[index]);

    });   
    // subsiquent elements
    $('#desc').html($('.middle').attr('desc')); 
    $('#created_by').html($('.middle').attr('created'));
    $('#folio_name').html($('.middle').attr('name'));
    $('#url').html("<a href='"+$('.middle').attr('href')+"' target='_blank'>Visit Project</a>");  

}
// scroller end

/* Do all this when the DOMs ready */
$(document).ready(function() {

    // scroller start
    assignPositions();
    var autoScroll = window.setInterval("scroll('next')", 4000);
  
    /* Hover behaviours */
    $('#scroller').hover(function() {
        window.clearInterval(autoScroll);
        // $('.nav').stop(true, true).fadeIn(200);
    }, function() {
        autoScroll = window.setInterval("scroll('next')", 4000);
        // $('.nav').stop(true, true).fadeOut(200);
    });

    /* Click behaviours */
    $('.prev').click(function() {
        scroll('prev');
    });
    $('.next').click(function() {
        scroll('next');
    });

 
});


