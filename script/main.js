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
    
    right.click(function() {
        var activeImg = gallery.children('.active');

        if(activeImg.next().attr('src') == undefined) {
            var newImg = gallery.children('img').first();        
        } else  {
            var newImg = activeImg.next();
        }      

        activeImg.toggleClass('active');
        newImg.toggleClass('active');
    });

    left.click(function() {
        var activeImg = gallery.children('.active');
        console.log(activeImg.prev().attr('src'));

        if(activeImg.prev().attr('src') == undefined) {
            var newImg = gallery.children('img').last();        
        } else  {
            var newImg = activeImg.prev();
        }      

        activeImg.toggleClass('active');
        newImg.toggleClass('active');
    });
    

// End ready
});