//Se passo con il mouse, evidenzia la chat selezionata.
$('.chat').mouseenter(function(){
    var bkGrey = $(this);

    bkGrey.addClass('background');
});

$('.chat').mouseleave(function(){
    var bkWhite = $(this);

    bkWhite.removeClass('background');
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

//Se clicco sulla chat di Clark, spariscono 3 notifiche
$('.chat.superman').click(function(){
    var numberThree = $('.superman-hours');


    numberThree.addClass('none');
    // readMessage.addClass('read');
});
// MANCA DA AGGIUNGERE CHE LE DUE CHIAMATE QUI SOPRA, FUNZIONINO SOLO CON IL MEDIA <= 760px

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
