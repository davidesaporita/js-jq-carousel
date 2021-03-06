/**
 * Creare uno slider di immagini
 * Potete usare le immagini che desiderate. Per facilitarvi la vita usate immagini delle stesse dimensioni
 * Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
 * In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
 * Utilizziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider
 * Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
 *  
 */

$( document ).ready(function() {
    
    var right = $('#right');
    var left = $('#left');
    var gallery = $('#gallery');
    var menuList = $('#img-menu-list');
    var imgMenuIcon = $('.img-menu-icon');

    right.click(goRight);
    left.click(goLeft);
    
    imgMenuIcon.click(function() {
        var activeImg = gallery.children('.active');
        var activeIcon = menuList.children('.active-icon');
        var id = $(this).attr('id').slice(5);
        var imgId = 'img-' + id;
        var iconId = 'icon-' + id;
        var newImg = gallery.children('#' + imgId);
        var newIcon = menuList.children('#' + iconId);

        activeImg.toggleClass('active');
        newImg.toggleClass('active');

        activeIcon.toggleClass('active-icon');
        newIcon.toggleClass('active-icon');
    });

    $(document).keydown(function(e) {
        if(e.keyCode == 39) {
            goRight();  
        }
        if(e.keyCode == 37) {
            goLeft();
        }
    });
    
    // Right Click or Keydown function
    function goRight() {
        var activeImg = gallery.children('.active');
        var activeIcon = menuList.children('.active-icon');

        if(activeImg.next().attr('src') == undefined) {
            var newImg = gallery.children('img').first();
            var newIcon = menuList.children('li').first();
        } else {
            var newImg = activeImg.next();
            var newIcon = activeIcon.next();
        }      

        activeImg.toggleClass('active');
        newImg.toggleClass('active');

        activeIcon.toggleClass('active-icon');
        newIcon.toggleClass('active-icon');
    }


    // Left Click or Keydown function
    function goLeft() {
        var activeImg = gallery.children('.active');
        var activeIcon = menuList.children('.active-icon');

        if(activeImg.prev().attr('src') == undefined) {
            var newImg = gallery.children('img').last();     
            var newIcon = menuList.children('li').last();   
        } else {
            var newImg = activeImg.prev();
            var newIcon = activeIcon.prev();
        }

        activeImg.toggleClass('active');
        newImg.toggleClass('active');

        activeIcon.toggleClass('active-icon');
        newIcon.toggleClass('active-icon');
    }

// End ready
});



