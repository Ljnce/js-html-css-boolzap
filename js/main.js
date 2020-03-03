//Se passo con il mouse, evidenzia la chat selezionata.
$('.chat').mouseenter(function(){
    var bkWhite = $('.chat')
    var bkRed = $(this);

    bkRed.addClass('background');
});

$('.chat').mouseleave(function(){
    var bkWhite = $('.chat')
    var bkRed = $(this);

    bkRed.removeClass('background');
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
