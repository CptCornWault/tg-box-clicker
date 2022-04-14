// the starting integer of the game start countdown timer
var countdown_from = 2;

// percent size of the box relative to the game area in %
var default_box_size_x = 10;
var default_box_size_y = 10;

// the farthest the the top-left corner can go, in %, before the box touches an edge
var max_x = 100 - default_box_size_x;
var max_y = 100 - default_box_size_y;

// seconds before next box location for the first transition.
var initial_game_speed = 3;

// how fast the game speeds each time in %
var faster_increment = 3;

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