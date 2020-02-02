var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'updatedujm.jpg',
            w: 21690,
            h: 7937
        },
       
    ];

    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen
      	history: false,
      	focus: false,
        maxSpreadZoom: 2,

        showAnimationDuration: 0,
        hideAnimationDuration: 0

    };

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};



document.getElementById('btn').onclick = openPhotoSwipe;
