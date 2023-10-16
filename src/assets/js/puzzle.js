//Array of piece source
let arrEasy = [];
let arrMedium = [];
let arrHard = [];

//images arrays
let imgArrayEasy = [];
let imgArrayMedium = [];
let imgArrayHard = [];

//array of pieces div
const arrDivE = $('.easy_mode_puzzle_piece');
const arrDivM = $('.medium_mode_puzzle_piece');
const arrDivH = $('.hard_mode_puzzle_piece');

//arrays of pieces easy mode
arrEasy.push(null);
arrEasy.push('assets/img/pieces/EasyPieces/6.jpg');
arrEasy.push('assets/img/pieces/EasyPieces/3.jpg');

arrEasy.push('assets/img/pieces/EasyPieces/8.jpg');
arrEasy.push('assets/img/pieces/EasyPieces/5.jpg');
arrEasy.push('assets/img/pieces/EasyPieces/2.jpg');

arrEasy.push('assets/img/pieces/EasyPieces/7.jpg');
arrEasy.push('assets/img/pieces/EasyPieces/4.jpg');
arrEasy.push('assets/img/pieces/EasyPieces/1.jpg');

//arrays of pieces medium mode
arrMedium.push(null);
arrMedium.push('assets/img/pieces/MediumPieces/12.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/8.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/4.jpg');

arrMedium.push('assets/img/pieces/MediumPieces/15.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/11.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/7.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/3.jpg');

arrMedium.push('assets/img/pieces/MediumPieces/14.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/10.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/6.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/2.jpg');

arrMedium.push('assets/img/pieces/MediumPieces/13.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/9.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/5.jpg');
arrMedium.push('assets/img/pieces/MediumPieces/1.jpg');

//arrays of pieces hard mode
arrHard.push(null);
arrHard.push('assets/img/pieces/HardPieces/20.jpg');
arrHard.push('assets/img/pieces/HardPieces/15.jpg');
arrHard.push('assets/img/pieces/HardPieces/10.jpg');
arrHard.push('assets/img/pieces/HardPieces/5.jpg');

arrHard.push('assets/img/pieces/HardPieces/24.jpg');
arrHard.push('assets/img/pieces/HardPieces/19.jpg');
arrHard.push('assets/img/pieces/HardPieces/14.jpg');
arrHard.push('assets/img/pieces/HardPieces/9.jpg');
arrHard.push('assets/img/pieces/HardPieces/4.jpg');

arrHard.push('assets/img/pieces/HardPieces/23.jpg');
arrHard.push('assets/img/pieces/HardPieces/18.jpg');
arrHard.push('assets/img/pieces/HardPieces/13.jpg');
arrHard.push('assets/img/pieces/HardPieces/8.jpg');
arrHard.push('assets/img/pieces/HardPieces/3.jpg');

arrHard.push('assets/img/pieces/HardPieces/22.jpg');
arrHard.push('assets/img/pieces/HardPieces/17.jpg');
arrHard.push('assets/img/pieces/HardPieces/12.jpg');
arrHard.push('assets/img/pieces/HardPieces/7.jpg');
arrHard.push('assets/img/pieces/HardPieces/2.jpg');

arrHard.push('assets/img/pieces/HardPieces/21.jpg');
arrHard.push('assets/img/pieces/HardPieces/16.jpg');
arrHard.push('assets/img/pieces/HardPieces/11.jpg');
arrHard.push('assets/img/pieces/HardPieces/6.jpg');
arrHard.push('assets/img/pieces/HardPieces/1.jpg');


//bind click event to pieces
const clickHandlers = [];

function bindClickToPieces(arrDivs) {

    for (let i = 0; i < arrDivs.length; i++) {
        arrDivs[i].removeEventListener('click', clickHandlers[i]);
    }


    for (let i = 0; i < arrDivs.length; i++) {
        // Define a unique click event handler function for each element
        function clickHandler(e) {
            move(i,arrDivs);
        }

        clickHandlers[i] = clickHandler;

        arrDivs[i].addEventListener('click', clickHandler);
    }
}

function checkWin() {

}
function checkForEmptyPiece(arrDivs) {
    let emptyPiece = -1;

    for (let i = 0; i < arrDivs.length; i++) {
        let img = $(arrDivs[i]).find('img');
        let src = img.attr("src");

        if (src == null) {
            emptyPiece = i;
            console.log("ekak null awa");
            break;
        }

    }

    return emptyPiece;
}

function checkIfLegalMove(clicked,emptyPiece,arrDivs) {

    let gridSize=3;
    if (arrDivs.length===9){
        gridSize=3;
    }

    if (arrDivs.length===16){
        gridSize=4;
    }

    if (arrDivs.length===25){
        gridSize=5;
    }


    let colCli=Math.floor(clicked / gridSize);
    let rowCli = Math.floor(clicked % gridSize)
    console.log(colCli,rowCli);

    let colEmp =Math.floor(emptyPiece/gridSize);
    let rowEmp =Math.floor(emptyPiece % gridSize);


    return ((rowCli===rowEmp && Math.abs(colCli-colEmp)===1)  || (colCli===colEmp && Math.abs(rowCli-rowEmp)===1));

}

function move(i, arrDivs,mode) {
    let clicked=i;
    let emptyPiece=checkForEmptyPiece(arrDivs);
    console.log("Empty:"+emptyPiece);

    let isLegal=checkIfLegalMove(clicked,emptyPiece,arrDivs);
    if (isLegal===true){

        console.log(i);
        let img = $(arrDivs[i]).find('img');
        let src = img.attr("src");


        let find = $(arrDivs[emptyPiece]).find('img');
        find.attr("src",src);

        img.attr("src",null);
        console.log(src);

    }
}


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
            scramble(imgArrayEasy);
            appendImages(imgArrayEasy, arrDivE);
            bindClickToPieces(arrDivE);

            break;
        case 'medium':
            $('#main_menu').css('display', 'none');
            $('#medium_mode').css('display', 'flex');
            scramble(imgArrayMedium);
            appendImages(imgArrayMedium, arrDivM);
            bindClickToPieces(arrDivM);

            break;
        case 'hard':
            $('#main_menu').css('display', 'none');
            $('#hard_mode').css('display', 'flex');
            scramble(imgArrayHard);
            appendImages(imgArrayHard, arrDivH);
            bindClickToPieces(arrDivH);

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


//add images to img elements

for (let i = 0; i < arrEasy.length; i++) {
    let img = $('<img>').attr('src', arrEasy[i]);
    imgArrayEasy.push(img);

}

for (let i = 0; i < arrMedium.length; i++) {
    let img = $('<img>').attr('src', arrMedium[i]);
  /*  $(img).css('width', '100%');
    $(img).css('height', '100%');
    $(img).css('object-fit', 'cover');*/
    imgArrayMedium.push(img);
}

// Iterate through arrHard and create img elements
for (let i = 0; i < arrHard.length; i++) {
    let img = $('<img>').attr('src', arrHard[i]);
   /* $(img).css('width', '100%');
    $(img).css('height', '100%');
    $(img).css('object-fit', 'cover');*/
    imgArrayHard.push(img);
}

function appendImages(arrImg, arrDiv) {
    for (let i = 0; i < arrDiv.length; i++) {

        $(arrDiv[i]).empty();


        $(arrDiv[i]).append(arrImg[i]);
    }
}
//replay button
$("#hard_mode_button_play").click(function () {
    scramble(imgArrayHard);
    appendImages(imgArrayHard, arrDivH);
    bindClickToPieces(arrDivH);
});

$("#medium_mode_button_play").click(function () {
    scramble(imgArrayMedium);
    appendImages(imgArrayMedium, arrDivM);
    bindClickToPieces(arrDivM);
});

$("#easy_mode_button_play").click(function () {
    scramble(imgArrayEasy);
    appendImages(imgArrayEasy, arrDivE);
    bindClickToPieces(arrDivE);
});


//scramble pieces
//remove previous piece
function scramble(pieceArr) {
    let currentIndex = pieceArr.length;
    for (let i = 0; i < pieceArr.length; i++) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        let temporaryValue = pieceArr[currentIndex];
        pieceArr[currentIndex] = pieceArr[randomIndex];
        pieceArr[randomIndex] = temporaryValue;
    }
}



