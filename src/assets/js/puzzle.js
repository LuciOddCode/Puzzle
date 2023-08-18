$(document).ready(function () {
    $('#main_menu').css('display', 'block');
    $('#easy_mode').css('display', 'none');
    $('#medium_mode').css('display', 'none');
    $('#hard_mode').css('display', 'none');
    $('#wining_status_container').css('display', 'none');
});
//show the right page when the user click on the button with selected mode

$("#main_menu_button_play").click(function () {
    /*select the mode from radio button*/
    var mode = $("input[name='difficulty']:checked").val();
   switch (mode) {
        case 'easy':
            $('#main_menu').css('display', 'none');
            $('#easy_mode').css('display', 'block');

            break;
        case 'medium':
            $('#main_menu').css('display', 'none');
            $('#medium_mode').css('display', 'flex');
            break;
        case 'hard':
            $('#main_menu').css('display', 'none');
            $('#hard_mode').css('display', 'flex');
            break;
        default:
            break;

   }
});

//back to main menu
function backToMainMenu() {
    $('#main_menu').css('display', 'block');
    $('#easy_mode').css('display', 'none');
    $('#medium_mode').css('display', 'none');
    $('#hard_mode').css('display', 'none');
    $('#wining_status_container').css('display', 'none');
}

$("#easy_mode_button_back").click(function () {
    backToMainMenu();
});

$("#medium_mode_button_back").click(function () {
    backToMainMenu();
});

$("#hard_mode_button_back").click(function () {
    backToMainMenu();
});

//scrambling the puzzle
function scramble() {
    var puzzle = document.getElementById("puzzle_container");
    var pieces = puzzle.children;
    var i = pieces.length;
    while (i-- > 0) {
        puzzle.appendChild(pieces[Math.random() * i | 0]);
    }
}

