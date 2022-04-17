// the starting integer of the game start countdown timer
var countdown_from = 2;

// percent size of the box relative to the game area in %
var default_box_size_x = 10;
var default_box_size_y = 10;

// the farthest the the top-left corner can go, in %, before the box touches an edge
var max_x = 100 - default_box_size_x;
var max_y = 100 - default_box_size_y;

// milliseconds before next box location for the first transition.
var initial_game_speed = 2000;

// how fast the game speeds each time in % (expressed as a decimal)
var faster_increment = 0.03;

function show_box() {
    $( "#box" ).show();
}

function hide_box() {
    $( "#box" ).hide();
}

function position_box() {
    x_position = Math.floor( Math.random() * max_x );
    y_position = Math.floor( Math.random() * max_y );
    $( "#box" ).css( 'top', x_position + "%" );
    $( "#box" ).css( 'left', y_position + "%" );
}

function box_wait() {
    console.log( current_game_speed );
    end_game_timeout = setTimeout( () => { end_game() }, current_game_speed );
}

function end_game() {
    $( "#box" ).hide();
    $( "#too_slow" ).show();
    $( "#start" ).show();
}

function start_game() {
    show_box();
    box_wait();
}

function countdown() {
    $( "#countdown" ).show();
    if( current_countdown == 0 ){
        clearInterval( countdown_interval );
        $( "#countdown" ).hide()
        start_game();
    }
    $( "#countdown" ).text( current_countdown );
    current_countdown -= 1;
}

$( "#start" ).click( function() {
    // console.log( "click" );
    current_countdown = countdown_from;
    current_game_speed = initial_game_speed
    $( "#too_slow" ).hide();
    $( "#start" ).hide();
    position_box();
    countdown();
    countdown_interval = setInterval( countdown, 1000 );
} );

$( "#box" ).click( function() {
    clearTimeout( end_game_timeout );
    hide_box();
    position_box();
    current_game_speed = Math.floor( current_game_speed - current_game_speed * faster_increment );
    show_box();
    box_wait();
} );