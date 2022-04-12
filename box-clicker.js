var countdown_from = 2;
var countdown_interval;

function start_game() {
    $( "#box" ).show();
}

function countdown() {
    $( "#countdown" ).show();

    if( countdown_from == 0 ){
        clearInterval( countdown_interval );
        $( "#countdown" ).hide()
        start_game();
    }
    
    $( "#countdown" ).text( countdown_from );
    countdown_from -= 1;
}

$( "#start" ).click( function() {
    countdown_interval = setInterval( countdown, 1000 );
} );