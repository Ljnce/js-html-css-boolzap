//Se passo con il mouse, evidenzia la chat selezionata.
$('.chat').mouseenter(function(){
    var bkRed = $(this);

    bkRed.addClass('background');
});

$('.chat').mouseleave(function(){
    var bkRed = $(this);

    bkRed.removeClass('background');
});


//Se clicco sull'hamburger si apre la schermata dei contatti
$('.icon-right i.fas.fa-bars').click(function(){
    var right = $('.right.view');
    var left = $('.left');

    right.removeClass('view');
    left.addClass('view');
});


// Se clicco sull'icon X, si chiude la schermata dei contatti e ritorna di conseguenza su quella della chat
$('.icon-left i.fas.fa-times').click(function(){
    var left = $('.left');

    left.removeClass('view');
});


//Cambio icona micrfono con testo quando muovo il mouse dentro all'imput per inseirire il testo.
$('.bottom-right input').mouseenter(function(){
    var imgMic = $('.bottom-right i.fas.fa-microphone.active');
    var imgText = $('.bottom-right i.fas.fa-comment-dots');

    imgMic.removeClass('active');
    imgText.addClass('active');
})

$('.bottom-right input').mouseleave(function(){
    var imgText = $('.bottom-right i.fas.fa-comment-dots.active');
    var imgMic = $('.bottom-right i.fas.fa-microphone');

    imgText.removeClass('active');
    imgMic.addClass('active');
})
