//Apro l'app Boolzap
$('.ironzapp .fumetto').click(function(){
    $('.ironzapp').slideUp();
})

//Icon profilo utente
$('i.fas.fa-user').click(function(){
    $('.user-profile').slideToggle();
});

//Se passo con il mouse, evidenzia la chat selezionata.
$('.lista').on('mouseenter', 'li', function(){ //$('.chat').mouseenter(function(){ se era template normale
    var bkGrey = $(this);

    bkGrey.addClass('background');
});

$('.lista').on('mouseleave', 'li', function(){//$('.chat').mouseleave(function(){ se era template normale
    var bkWhite = $(this);

    bkWhite.removeClass('background');
});


// 760 @media : MANCA DA AGGIUNGERE CHE LE DUE CHIAMATE QUI SOPRA, FUNZIONINO SOLO CON IL MEDIA <= 760px
//Se clicco sull'icona chat si apre la schermata della chat
$('.icon-left i.fas.fa-comments').click(function(){
    var left = $('.left');
    var right = $('.right');

    left.addClass('noview');
    right.addClass('view');
});

//Se clicco sulla chat che voglio, mi porta direttamente alla chat da scrivere
$('.lista').on('click', '.chat', function(){ //$('.chat').click(function(){ se era template normale
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

//Cambio icona micrfono con testo quando muovo il mouse dentro all'imput per inseirire il testo e la ricambio quando clicco enter o ci clicco sopra
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

 $('#nome').keypress(function(event){
     if (event.keyCode == 13) { //tasto da premere e cosa scatena, la stessa sopra
         var imgText = $('.bottom-right i.fas.fa-comment-dots.active');
         var imgMic = $('.bottom-right i.fas.fa-microphone');

          imgText.removeClass('active');
          imgMic.addClass('active');
     }
 });


//Imposta l'ora corrente da far apparire sui messaggi
 var clock = new Date();

 var time = clock.getHours() + ':' + clock.getMinutes();

 //Parole random da inserire sulla Risposta
 var parole = ['Thanos sta arrivando! 😈', 'Siamo salvi grazie a Thor 🤠', 'Ultron? Questo si che è un casino 😱', 'Domani ci troviamo per riunione Avengers 🤩'];
 var parola = parole[Math.floor(Math.random()*parole.length)];

//Input che mi da il messaggio visualizzato a destra
$('i.fas.fa-comment-dots').click(function(){
    invioMessaggio();
    invioMessaggio2();
});

$('#nome').keypress(function(event){
    if (event.keyCode == 13) { //tasto da premere e cosa scatena, la stessa sopra
        invioMessaggio();
        invioMessaggio2();
    }
});

/*
METODO CLASSICO JQUERY PER MANDARE MESSAGGI
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
*/

//MERTODO CON HANDLEBARS PER MANDARE MESSAGGI
function invioMessaggio(){
    //Variabile con dati da inserire dentro template standard (template-invio)
    var messaggioInviato = {
        text: 'come va?',
        hour: time,
        info: 'Message info',
        delete: 'Delete message'
    };

    var testoInput = $('#nome').val();
    $('#nome').val('');

    messaggioInviato.text = testoInput;
    console.log(messaggioInviato);

    //Template standard
    var source = $("#template").html();
    var template = Handlebars.compile(source);

    //Copio e incollo
    if (messaggioInviato.text.length > 0) {
    var messaggio = template(messaggioInviato);
    $('.center-right .attivo').append(messaggio);
};
};

//Risposta a sinistra sui messaggi che compare dopo 1 secondi dall'arrivo del messaggio
/*
//METODO CLASSICO JQUERY PER RICEVERE OK COME RISPOSTA
function invioMessaggio2(){
    var nomeInput = $('#nome').val(); //invio messaggio dall'input
    $('#nome').val('');//resetto quello che c'e dentro
    // $('.orario2').text(time);// me lo scrive dove c'è nome utente

    // $('.lista-nomi').append(nomeInput) // scrive e non sovrascrive

    setTimeout(function(){
    var messaggio2 = $('.template2 .messaggio2').clone();//clonato tmeplate  emesso sotto lista nomi sotto
    messaggio2.children('.testo-messaggio2').text();
    messaggio2.children('.orario2').text(time);
    $('.center-right .attivo').append(messaggio2); //in lista nomi metto messaggio
    }, 1000);
};
*/

//MERTODO CON HANDLEBARS PER RICEVERE MESSAGGI
function invioMessaggio2(){
    //Variabile con dati da inserire dentro template standard (template-invio)
    var messaggioRisposta = {
        textrisp: parola,
        hourrisp: time,
        inforisp: 'Message info',
        deleterisp: 'Delete message'
    };

    //Template standard
    var source = $("#template-two").html();
    var template = Handlebars.compile(source);

    //Copio e incollo
    setTimeout(function(){
    var risposta = template(messaggioRisposta);
    $('.center-right .attivo').append(risposta);
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
    $('.emoticon img').slideDown();
});

$('.emoticon img').click(function(){
    $('.emoticon img').slideUp();
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
$('.lista').on('click', '.chat', function(){ //$('.chat').click(function() { se era template normale
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
            $('.open-chat small').text('Ultimo accesso ' + time);
        }
    });
});


//Creo un icona che compare al mouse enter sul messaggio ed esce con il mouse leave
$('.utente').on('mouseenter', '.messaggio', function(){
    var icon = $(this).find('i.fas.fa-sort-down');

    icon.addClass('activo')
});

$('.utente').on('mouseleave', '.messaggio', function(){
    var icon = $(this).find('i.fas.fa-sort-down');

    icon.removeClass('activo')
});

//Creo un icona che compare al mouse enter sul messaggio di risposta ed esce con il mouse leave
$('.utente').on('mouseenter', '.messaggio2', function(){
    var icon = $(this).find('i.fas.fa-sort-down');

    icon.addClass('activo')
});

$('.utente').on('mouseleave', '.messaggio2', function(){
    var icon = $(this).find('i.fas.fa-sort-down');

    icon.removeClass('activo')
});


//Creo una sottocartella al click sull'icon Down
$('.utente').on('click', 'i.fas.fa-sort-down', function(){
     $(this).siblings('.sub-menu').slideToggle();
});

//Oltre al click, mi esce anche all'uscita dal messaggio in automatico
 $('.utente').on('mouseleave', '.sub-menu', function(){
     $('.sub-menu').slideUp();
 });
// $('.messaggio').mouseleave(function(){
//      var imgText = $('.bottom-right i.fas.fa-comment-dots.active');
//     var imgMic = $('.bottom-right i.fas.fa-microphone');
//
//      imgText.removeClass('active');
//      imgMic.addClass('active');
//  })

//Elimino messaggio2
$('.utente').on('click', '.delete', function(){
   $(this).parents('.messaggio').remove();
   $(this).parents('.messaggio2').remove();
});

//Elimino messaggio in versione @media screen da cellualre
$('.utente').on('click', 'i.fas.fa-trash-alt', function(){
   $(this).parents('.messaggio').remove();
   $(this).parents('.messaggio2').remove();
});

/*
var delete = $(this).find('.messaggio');
 delete.remove()

*/

//Attivo icon Search
$('i.fas.fa-search').click(function(){
    $('.search-right input').show();
});

/*
//Elimino testo all'interno uscendo dall'input
$('.search-right input').mouseleave(function(){
   $('.search-right input').val('');
});

//Disattivo icon search all'invio del messaggio, e azzero il valore all'interno dell'input:
// $('.search-right input').keypress(function(event){
//     if (event.keyCode == 13) {
//         $('.search-right input').val('');
//         $('.search-right input').hide();
//     }
// });
*/

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


//Aggiungo messaggio per ogni singola chat al singolo click ( se no lo copia più volte ad ogni click) ----> DA CORREGGERE CON IL NUOVO METODO PER I TEMPLATE <----
$('.lista').on('click', '.chat', function(){ //$('.chat').one("click", function() { se era template normale con un click
    var chatLista = $(this).attr('data-chat');
    defaultMessage(chatLista);
    defaultMessageRisp(chatLista);
});

//Aggiungo messaggio per ogni singola chat
function defaultMessage(numeroChat){
    console.log(numeroChat);
    var archivioMessaggi = [
        {
            textdefault: 'Tchalla! Dove sei?? 🙏',
            hourdefault: time
        },
        {
            textdefault: 'Hey Kent, ti stiamo aspettando qui 🤟',
            hourdefault: time
        },
        {
            textdefault: 'Cap, ho bisogno di te 🙌',
            hourdefault: time
        },
        {
            textdefault: 'Ho un nuovo vestito per te 🙅',
            hourdefault: time
        },
        {
            textdefault: 'Il caos è ormai all\'oridine del giorno',
            hourdefault: time
        },
        {
            textdefault: 'Gli x man hanno bisogno di una mano 🙆',
            hourdefault: time
        },
        {
            textdefault: 'Hey Frank 🙋',
            hourdefault: time
        },
        {
            textdefault: 'Hai trovato Loki? 🕵',
            hourdefault: time
        },
        {
            textdefault: 'Ho un upgrade per la tua armatura 💪',
            hourdefault: time
        },
        {
            textdefault: 'Sappiamo del tuo arrivo, non ci fai paura 👊',
            hourdefault: time
        }
    ];


for (var i = 0; i < archivioMessaggi.length; i++) {
    console.log(archivioMessaggi[i]);


    if (numeroChat == i) {
        //Template
        var source = $("#template-default").html();
        var template = Handlebars.compile(source);

       // //Copio e incollo
        var messaggioDefault = template(archivioMessaggi[i]);
        $('.center-right .attivo').append(messaggioDefault);
    }
}
};

//Aggiungo messaggio default di risposta
function defaultMessageRisp(numeroChatRisposta){
    console.log(numeroChatRisposta);
    var archivioMessaggiRisposta = [
        {
            textdefaultrisp: 'A Wakanda 😉',
            hourdefaultrisp: time
        },
        {
            textdefaultrisp: 'Metto il vestito e arrivo 😎',
            hourdefaultrisp: time
        },
        {
            textdefaultrisp: 'Arrivo, mi stavo allenando 😏',
            hourdefaultrisp: time
        },
        {
            textdefaultrisp: 'Cosa cosa cosa? Arrivo subito 😍',
            hourdefaultrisp: time
        },
        {
            textdefaultrisp: 'E cosa ci vuoi fare 😓',
            hourdefaultrisp: time
        },
        {
            textdefaultrisp: 'Passo da Ciclope e arrivo da te 😬',
            hourdefaultrisp: time
        },
        {
            textdefaultrisp: 'Dimmi Tony',
            hourdefaultrisp: time
        },
        {
            textdefaultrisp: 'No! Ragnarok è in pericolo 😱',
            hourdefaultrisp: time
        },
        {
            textdefaultrisp: 'Che figata, arrivo subito! 🤩',
            hourdefaultrisp: time
        },
        {
            textdefaultrisp: 'Iniziate a tremare 😈',
            hourdefaultrisp: time
        }
    ];


for (var i = 0; i < archivioMessaggiRisposta.length; i++) {
    console.log(archivioMessaggiRisposta[i]);


    if (numeroChatRisposta == i) {
        //Template
        var source = $("#template-default-risp").html();
        var template = Handlebars.compile(source);

       // //Copio e incollo
        var messaggioDefaultRisposta = template(archivioMessaggiRisposta[i]);
        $('.center-right .attivo').append(messaggioDefaultRisposta);
    }
}
};

//Contatti
    var contatti = {
        contacts: [
    {
        numero: 0,
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1454d038650505.598fa118c9674.jpg',
        nome: 'Tchalla',
        orario: time,
        cit: 'A Wakanda 😉'
    },
    {
        numero:1,
        img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f6eb6f38650505.598fa7a08736e.jpg',
        nome: 'Clark',
        orario: time,
        cit:  'Metto il vestito e arrivo 😎'
    },
    {
        numero:2,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bdadd38650505.598fa118c9a00.jpg',
        nome: 'Steve Rogers',
        orario: time,
        cit: 'Arrivo, mi stavo allenando 😏'
    },
    {
        numero:3,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/64838738650505.598fa28916115.png' ,
        nome: 'Peter',
        orario: time,
        cit: 'Cosa cosa cosa? Arrivo subito 😍'
    },
    {
        numero:4,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/61b37438650505.598fa7a1c8da3.jpg' ,
        nome: 'Wonder Woman',
        orario: time,
        cit: 'E cosa ci vuoi fare 😓'
    },
    {
        numero:5,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/14bc8b38650505.598fa5eee1e95.jpg' ,
        nome: 'Wolverine',
        orario: time,
        cit: 'Passo da Ciclope e arrivo da te 😬'
    },
    {
        numero:6,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0eba3f38650505.598fa5ee0d1c1.jpg' ,
        nome: 'Frank Castle',
        orario: time,
        cit: 'Dimmi Tony'
    },
    {
        numero:7,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9024fe38650505.598fa11a292af.png' ,
        nome: 'Thor',
        orario: time,
        cit: 'No! Ragnarok è in pericolo 😱'
    },
    {
        numero:8,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7691a138650505.598fa119bce1e.jpg' ,
        nome: 'Iron Patriot',
        orario: time,
        cit: 'Che figata, arrivo subito! 🤩'
    },
    {
        numero:9,
        img:'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/592db138650505.598fa11a28ec5.jpg' ,
        nome: 'Thanos',
        orario: time,
        cit: 'Iniziate a tremare 😈'
    }
]
};
    console.log(contatti);

    //Template
    var source = $("#template-contatti").html();
    var template = Handlebars.compile(source);
      // //Copio e incollo
    var listaContatti = template(contatti);
    console.log(listaContatti);
    $('.bottom-left .lista').append(listaContatti);
