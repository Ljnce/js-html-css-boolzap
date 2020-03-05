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

$('i.fas.fa-comment-dots').click(function(){
     var imgText = $('.bottom-right i.fas.fa-comment-dots.active');
    var imgMic = $('.bottom-right i.fas.fa-microphone');

     imgText.removeClass('active');
     imgMic.addClass('active');
 })


//Input che mi da il messaggio visualizzato a destra
$('i.fas.fa-comment-dots').click(function(){
    var nomeInput = $('#nome').val(); //invio messaggio dall'input
    $('#nome').val('');//resetto quello che c'e dentro
    // $('.testo-messaggio').text(nomeInput);// me lo scrive dove c'è nome utente
    // $('.orario').text(time);// me lo scrive dove c'è nome utente

    // $('.chat-dx').append(nomeInput) // scrive e non sovrascrive
    var messaggio = $('.template .messaggio').clone();//clonato tmeplate  emesso sotto lista nomi sotto
    messaggio.children('.testo-messaggio').text(nomeInput);
    messaggio.children('.orario').text(time);
    $('.center-right').append(messaggio); //in lista nomi metto messaggio
})


//Imposta l'ora corrente da far apparire sui messaggi
var clock = new Date();

var time = clock.getHours() + ':' + clock.getMinutes();


//Risposta a sinistra sui messaggi
$('i.fas.fa-comment-dots').click(function(){
    var nomeInput = $('#nome').val(); //invio messaggio dall'input
    $('#nome').val('');//resetto quello che c'e dentro
    // $('.orario2').text(time);// me lo scrive dove c'è nome utente

    // $('.lista-nomi').append(nomeInput) // scrive e non sovrascrive
    var messaggio2 = $('.template2 .messaggio2').clone();//clonato tmeplate  emesso sotto lista nomi sotto
    messaggio2.children('.testo-messaggio2').text();
    messaggio2.children('.orario2').text(time);
    $('.center-right').append(messaggio2); //in lista nomi metto messaggio
});

//Le spunte diventano blu dopo 2 secondi
$('i.fas.fa-comment-dots').click(function(){
    setTimeout(function(){
    $('i.fas.fa-check-double').addClass('color-icon');
    }, 2000);
});


//Trovo i nomeInput
$('#search').keyup(function(event){ //evento
    var ricercaContatto = $(this).val().toLowerCase();// prendo il valore di questo
    // console.log(ricercaContatto);//MI TROVA TUTE LE LETTERE
    $('.chat').each(function(){//se nella lista contatti, è preesente il carattere digiato, visulazziarlo
        // console.log($(this).text());
        var name = $(this).find('p').text().toLowerCase();
        if(name.includes(ricercaContatto)){ //se il nome del list item  ha al suo interno uno dei caratteri digitati, visualizzalo
            $(this).show();
        } else{ //altrimenti dispaly none, non visualizzarlo
            $(this).hide();
            // $('.chat').not(this).hide();
        }
    });
});


//Scroll down
$('i.fas.fa-angle-double-down').click(function (){
    $('.center-right').animate({scrollTop: document.body.scrollHeight},"slow");
});

//Scroll up
$('i.fas.fa-angle-double-up').click(function (){
    $('.center-right').animate({ scrollTop: $(document).height()-$(window).height() });
});
