//Apro l'app Boolzap
$('.boolzap .fumetto').click(function(){
    $('.boolzap').slideUp();
})

//Se passo con il mouse, evidenzia la chat selezionata.
$('.chat').mouseenter(function(){
    var bkGrey = $(this);

    bkGrey.addClass('background');
});

$('.chat').mouseleave(function(){
    var bkWhite = $(this);

    bkWhite.removeClass('background');
});


//Se clicco sull'icona chat si apre la schermata della chat
$('.icon-left i.fas.fa-comments').click(function(){
    var left = $('.left');
    var right = $('.right');

    left.addClass('noview');
    right.addClass('view');
});


// Se clicco sull'icona contatti, si chiude la schermata dei contatti e apre la chat dell'utente selezionato
 $('i.fas.fa-list-ul').click(function(){
     var left = $('.left');
     var right = $('.right.view');

    left.removeClass('noview');
    right.removeClass('view');
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
    invioMessaggio();
});

$('#nome').keypress(function(event){
    if (event.keyCode == 13) { //tasto da premere e cosa scatena, la stessa sopra
        invioMessaggio()
    }
});

function invioMessaggio(){
    var nomeInput = $('#nome').val(); //invio messaggio dall'input
    $('#nome').val('');//resetto quello che c'e dentro
    // $('.testo-messaggio').text(nomeInput);// me lo scrive dove c'è nome utente
    // $('.orario').text(time);// me lo scrive dove c'è nome utente

    // $('.chat-dx').append(nomeInput) // scrive e non sovrascrive
    if (nomeInput.length > 0) {
    var messaggio = $('.template .messaggio').clone();//clonato tmeplate  emesso sotto lista nomi sotto
    messaggio.children('.testo-messaggio').text(nomeInput);
    messaggio.children('.orario').text(time);
    $('.center-right .attivo').append(messaggio); //in lista nomi metto messaggio
};
};


//Imposta l'ora corrente da far apparire sui messaggi
var clock = new Date();

var time = clock.getHours() + ':' + clock.getMinutes();

//Risposta a sinistra sui messaggi che compare dopo 2 secondi dall'arrivo del messaggio
$('i.fas.fa-comment-dots').click(function(){
    invioMessaggio2();
});

$('#nome').keypress(function(event){
    if (event.keyCode == 13) { //tasto da premere e cosa scatena, la stessa sopra
        invioMessaggio2()
    }
});

function invioMessaggio2(){
    setTimeout(function(){
    var nomeInput = $('#nome').val(); //invio messaggio dall'input
    $('#nome').val('');//resetto quello che c'e dentro
    // $('.orario2').text(time);// me lo scrive dove c'è nome utente

    // $('.lista-nomi').append(nomeInput) // scrive e non sovrascrive
    var messaggio2 = $('.template2 .messaggio2').clone();//clonato tmeplate  emesso sotto lista nomi sotto
    messaggio2.children('.testo-messaggio2').text();
    messaggio2.children('.orario2').text(time);
    $('.center-right .attivo').append(messaggio2); //in lista nomi metto messaggio
    }, 1000);
};

//Le spunte di destra diventano blu dopo 3 secondi al click dell'icona

$('i.fas.fa-comment-dots').click(function(){
    setTimeout(function(){
    $('i.fas.fa-check-double.one').addClass('color-icon');
    }, 2000);
});

//Le spunte diventano blu dopo l'invio tramite tasto "enter"
$('#nome').keypress(function(event){
    if (event.keyCode == 13) { //tasto da premere e cosa scatena, la stessa sopra
        setTimeout(function(){
        $('i.fas.fa-check-double.one').addClass('color-icon');
        }, 2000);
    }
});

//Le spunte di sinistra diventano blu dopo 4 secondi al click dell'icona
$('i.fas.fa-comment-dots').click(function(){
    setTimeout(function(){
    $('i.fas.fa-check-double.two').addClass('color-icon');
    }, 3500);
});

//Le spunte diventano blu dopo l'invio tramite tasto "enter"
$('#nome').keypress(function(event){
    if (event.keyCode == 13) {
        setTimeout(function(){
        $('i.fas.fa-check-double.two').addClass('color-icon');
        }, 3500);
    }
});

//Trovo i nomeInput
$('#search').keyup(function(event){ //evento
    var ricercaContatto = $(this).val().toLowerCase();// prendo il valore di questo
    // console.log(ricercaContatto);//MI TROVA TUTE LE LETTERE
    $('.chat').each(function(){//se nella lista contatti, è preesente il carattere digiato, visulazziarlo
        // console.log($(this).text());
        var name = $(this).find('h4').text().toLowerCase();
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

//Comparsa emoticon al click sullo smile
$('i.far.fa-smile').click(function (){
    $('.image img').slideDown();
});

$('.image img').click(function(){
    $('.image img').slideUp();
});

//Se si clicca sulla campanella delle notifiche, compare un messaggio "notifiche attivate"
$('i.fas.fa-bell-slash').click(function (){
    alert('Notifiche attivate');
    $('i.fas.fa-bell-slash').hide();
    $('i.fas.fa-bell').show();
});

$('i.fas.fa-bell').click(function (){
    alert('Notifiche disattivate');
    $('i.fas.fa-bell').hide();
    $('i.fas.fa-bell-slash').show();
});

//Chat e foto per ogni swingola chat selezionata:
$('.chat').click(function() {
    nome = $(this).find('h4').text();
    foto = $(this).find('img').attr('src');
    tempo = $(this).find('small').text(time);
    //console.log(nome); //ho preso il nome che ho cliccato
    //ciclo su tutte le schede
    //controllo che il nome cliccato sia == scheda.nome
    var chatLista = $(this).attr('data-chat');
    console.log(chatLista);
    $('.utente').each(function(){
        var chatCorrente = $(this).attr('data-open')
        if (chatLista == chatCorrente) {
            var now = $('.utente.attivo');
            var next = $(this);

            now.removeClass('attivo');
            next.addClass('attivo')
            console.log('.attivo');
            $('.open-chat h2').text(nome);
            $('.open-chat img').attr('src', foto);
            $('.open-chat small').text(time);
        }
    });
});


//Creo un icona che compare al mouse enter sul messaggio ed esce con i lmopuse leave
$('.attivo').mouseenter(function(){
    var icon = $('i.fas.fa-sort-down');

    icon.addClass('activo')
});

$('.attivo').mouseleave(function(){
    var icon = $('i.fas.fa-sort-down');

    icon.removeClass('activo')
});


//Creo una sottocartella al click sull'icon Down
$('.utente').click(function(){
    $('.sub-menu').slideToggle();
});
// $('.messaggio').mouseleave(function(){
//      var imgText = $('.bottom-right i.fas.fa-comment-dots.active');
//     var imgMic = $('.bottom-right i.fas.fa-microphone');
//
//      imgText.removeClass('active');
//      imgMic.addClass('active');
//  })


//Attivo icon Search
$('i.fas.fa-search').click(function(){
    $('.search-right input').show();
})

//Disattivo icon search all'invio del messaggio, e azzero il valore all'interno dell'input:
$('.search-right input').keypress(function(event){
    if (event.keyCode == 13) {
        $('#messages').val('');
        $('.search-right input').hide();
    }
});

//Trovo i messaggi ricercati sull'icona search
$('#messages').keyup(function(event){ //evento
    var ricercaTesto = $(this).val().toLowerCase();// prendo il valore di questo
    // console.log(ricercaContatto);//MI TROVA TUTE LE LETTERE
    $('.attivo .messaggio').each(function(){
        // console.log($(this).text());
        var testo = $(this).find('p').text().toLowerCase();
        if(testo.includes(ricercaTesto)){
            $(this).show();
            $(this).next().show(); //per next in questo caso è inteso il div risposta successivo che compare insieme
        } else{
            $(this).hide();
            $(this).next().hide(); //per next in questo caso è inteso il div risposta successivo che scopmare insieme
        }
    });
});
