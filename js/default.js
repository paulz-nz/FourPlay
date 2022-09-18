//COPYRIGHT PAUL NIEUWELAAR 2013. ALL RIGHTS RESERVED

var ConnectFour = ConnectFour || {};

var red = true; //global var for next turn
var redStart = true; //gobal var for who starts
var playBot = true; //determines if playing human or bot
var waiting = false; //while the computer is thinking, dont allow the user to move
var redWins = 0; //total wins for red
var blackWins = 0; //total wins for black
var isInitialised = false; //determines whether the app has already been initialised
var dropSound; //holds the element of the sound when a counter is dropped
var gameOverSound; //holds the element of the sound when the game is over
var gameOver = true; //indicates if the player cannot move

//the board is numbered like:
//      6 . . . . . . .
//      5 . . . . . . .
//      4 . . . . . . .
//      3 . . . . . . .
//      2 . . . . . . .
//      1 . . . . . . .
//        a b c d e f g

//stores the position of each piece and colour (red="r", black="b")
var a = ["A", "", "", "", "", "", ""];
var b = ["B", "", "", "", "", "", ""];
var c = ["C", "", "", "", "", "", ""];
var d = ["D", "", "", "", "", "", ""];
var e = ["E", "", "", "", "", "", ""];
var f = ["F", "", "", "", "", "", ""];
var g = ["G", "", "", "", "", "", ""];
var cols = [d, c, e, b, f, a, g]; //start middle, work way out (smartest)

//stores winning moves (red="r", black="b", both="x")
var wA = ["A", "", "", "", "", "", ""];
var wB = ["B", "", "", "", "", "", ""];
var wC = ["C", "", "", "", "", "", ""];
var wD = ["D", "", "", "", "", "", ""];
var wE = ["E", "", "", "", "", "", ""];
var wF = ["F", "", "", "", "", "", ""];
var wG = ["G", "", "", "", "", "", ""];
var wCols = [wD, wC, wE, wB, wF, wA, wG]; //start middle, work way out (smartest)

ConnectFour.initialise = function () {
    //runs in body onload and initializer thing because doesnt always do 1 or the other
    if (isInitialised) { return; }
    isInitialised = true;

    ConnectFour.simulateTile(); //attach the tile events

    ConnectFour.attachTableEvents(); //add the mouse events to the table

    // create the sound elements
    dropSound = document.createElement("audio");
    dropSound.src = "audio/drop.wav";

    gameOverSound = document.createElement("audio");
    gameOverSound.src = "audio/gameover.wav";
}

ConnectFour.simulateTile = function () {
    var tiles = document.getElementsByClassName("tile");

    for (var i = 0; i < tiles.length; i++) {
        var element = tiles[i];
        element.onmousedown = function () { ConnectFour.tilePress(this); }
        element.onmouseout = function () { ConnectFour.tileRelease(this); }
        element.onmouseup = function () { ConnectFour.tileRelease(this); }
    }
}

ConnectFour.tilePress = function (element) {
    element.style.transform = "scale(0.97) perspective(400px) rotateY(0deg) rotateX(0deg)"; //press
}

ConnectFour.tileRelease = function (element) {
    element.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)"; //release
}

ConnectFour.start = function (isBot) {
    //after selecting a mode, and clicking 'start' - this will start the game
    gameOver = false;

    document.getElementById("MODEBLOCK").style.display = "none";
    document.getElementById("GAME").style.display = "inline";
    document.getElementById("NEXT").style.backgroundPosition = red ? "0 0" : "0 -60px";

    playBot = isBot;

    //determines if playing human or bot
    if (!playBot) {
        document.getElementById("PLAYER2").innerHTML = "Player 2";
    }
    else {
        document.getElementById("PLAYER2").innerHTML = "Machine";
        //red = false;
        //redStart = false;
        if (!red) { //if black (bot) starts, make a move
            ConnectFour.autoMove();
        }
    }
}

ConnectFour.attachTableEvents = function () {
    var boardCells = document.getElementsByTagName("td");

    for (var i in boardCells) {
        var cell = boardCells[i];

        cell.onmouseup = function () { ConnectFour.clicked(this.id); };
        cell.onmousedown = function () { ConnectFour.hovering(this.id); }; //adds the counter to the top if you press and hold
        cell.onmouseover = function () { ConnectFour.hovering(this.id); };
    }
}

ConnectFour.hovering = function (id) {
    //as the mouse moves around the board, a piece will appear to be hovering above the moused-over column
    if (gameOver || waiting) { return; }

    var col = id.substring(0, 1);
    for (var i = 0; i < cols.length; i++) {
        if (cols[i][0] == col) {
            if (red || playBot) { //determines which colour the hovering piece is. if playing bot only show players colour
                document.getElementById(cols[i][0] + 0).style.backgroundPosition = "7px 0";
            }
            else {
                document.getElementById(cols[i][0] + 0).style.backgroundPosition = "7px -60px";
            }
        }
        else {
            document.getElementById(cols[i][0] + 0).style.backgroundPosition = "7px -120px";
        }
    }
}

ConnectFour.clicked = function (id) {
    //user places a piece
    if (gameOver || waiting) { return; } //dont let them move if someone has won, or while the bot is moving

    var col = id.substring(0, 1);
    for (var i = 0; i < cols.length; i++) {
        if (cols[i][0] == col) {
            var colArray = cols[i];

            for (var row = 1; row < colArray.length; row++) {
                if (colArray[row] == "") {
                    colArray[row] = red ? "r" : "b"; //asign the new value into the array

                    ConnectFour.setWinningMoves("r"); //calculate winning positions for red (player 1)
                    ConnectFour.setWinningMoves("b"); //calculate winning positions for black (player 2)

                    red = red ? false : true; //change the colour for the next turn
                    //if (!playBot) { ConnectFour.hovering(col); }

                    //if (row != 6) { //animate the drop of the piece
                    ConnectFour.animateDrop(col, 7, row);
                    //}
                    //else { //top row doesnt need animating
                    //    ConnectFour.placeNextPiece(col, row);
                    //}
                    break;
                }
            }
            break;
        }
    }
}

ConnectFour.animateDrop = function (col, row, stopOn) {
    waiting = true;
    if (row == 7) { //animate the top row too
        if (!red) { //actually is red, we already changed the colour for the next turn
            document.getElementById(col + 0).style.backgroundPosition = "7px 0";
        }
        else {
            document.getElementById(col + 0).style.backgroundPosition = "7px -60px";
        }
    }
    else {
        //remove the piece from the previous space
        if (row < 6) {
            document.getElementById(col + (row + 1)).style.backgroundPosition = "0 0";
        }
        else {
            document.getElementById(col + 0).style.backgroundPosition = "7px -120px";
        }

        if (row != stopOn) {
            if (!gameOver) { //if game is reset during animate, stop animating

                //animate the next space 
                if (!red) { //actually is red, we already changed the colour for the next turn
                    document.getElementById(col + row).style.backgroundPosition = "0 -75px";
                }
                else {
                    document.getElementById(col + row).style.backgroundPosition = "0 -150px";
                }
            }
        }
        else {
            //end the 'drop' animation
            //document.getElementById(col + (row + 1)).style.backgroundPosition = "0 0";
            dropSound.play(); //make the drop sound
            waiting = false;
            if (!gameOver) { ConnectFour.placeNextPiece(col, stopOn); } //if game is reset during animate, dont place next piece
            return;
        }
    }

    //wait, and then do this again, but on the next row down
    setTimeout(function () {
        ConnectFour.animateDrop(col, row - 1, stopOn);
    }, 100);
}

ConnectFour.placeNextPiece = function (col, row) {
    var cell = document.getElementById(col + row);
    //place the piece (red or black)
    if (!red) { //actually is red
        cell.style.backgroundPosition = "0 -75px"; //red
        if (ConnectFour.isWinner("r", col, row)) { //check if red has won
            var player1 = document.getElementById("PLAYER1").innerHTML;
            ConnectFour.finish(player1 + " Wins!", 1);
            return;
        }
        document.getElementById("NEXT").style.backgroundPosition = "0 -60px"; //next move
    }
    else {
        cell.style.backgroundPosition = "0 -150px"; //black
        if (ConnectFour.isWinner("b", col, row)) { //check if black has won
            var player2 = document.getElementById("PLAYER2").innerHTML;
            ConnectFour.finish(player2 + " Wins!", 2);
            return;
        }
        document.getElementById("NEXT").style.backgroundPosition = "0 0"; //next move
    }

    if (row == 6 && ConnectFour.isDraw()) {
        ConnectFour.finish("Draw!");
        return;
    }

    if (!red && playBot) { ConnectFour.autoMove(col, row); } //if red has just played, and they're playing a bot, auto move
}

var currentTurn = 0; //which move the bot is up to (used for strategies)

ConnectFour.autoMove = function (col, row) {
    //if playing the bot, this will allow the computer to make the best move possible, or at least foil your plans!
    currentTurn++;
    if (col == null) { ConnectFour.clicked("D"); return; } //first move
    waiting = true; //dont let user move while waiting
    var timeoutPeriod = 2000;
    setTimeout(function () { //wait for 2 seconds before moving so the user doesnt freak out haha!!
        waiting = false; //after the timeout stop waiting

        if (ConnectFour.winOrBlock("b")) { return; } //if bot wins, return
        if (ConnectFour.winOrBlock("r")) { return; } //if win is blocked, return

        var move = ConnectFour.getNextMove(col, row);
        ConnectFour.clicked(move);

    }, timeoutPeriod);
}

ConnectFour.winOrBlock = function (colour) {
    //loop through winning columns to win or block a winning move
    for (var i = 0; i < wCols.length; i++) {
        var col = wCols[i];
        for (var j = 1; j < col.length; j++) {
            //if the spot is a winner, its empty, and theres something under it (unless its row 1)
            if ((col[j] == colour || col[j] == "x") && cols[i][j] == "" && (j == 1 || cols[i][j - 1] != "")) {
                ConnectFour.clicked(col[0]);
                return true;
            }
        }
    }
    return false;
}

ConnectFour.isDraw = function () {
    //if all spaces are full, and no winner is found, declare a draw!
    for (var i = 0; i < cols.length; i++) {
        if (cols[i][6] == "") {
            return false;
        }
    }
    return true;
}

ConnectFour.isWinner = function (colour, col, row) {
    //if they just dropped a piece in one of their winning positions, they win!
    for (var i = 0; i < wCols.length; i++) { //check each column
        if (wCols[i][0] == col) { //find the column just played in
            if (wCols[i][row] == colour || wCols[i][row] == "x") { //if the row matches their winning position, they win!
                return true;
            }
            return false; //if it wasnt a winning move return false
        }
    }
    return false; //if for some reason none of the cols match the col they played in, just return false!
}

ConnectFour.finish = function (result, winner) {
    gameOver = true;
    for (var i = 0; i < cols.length; i++) {
        document.getElementById(cols[i][0] + 0).style.backgroundPosition = "7px -120px";
    }
    document.getElementById("GAME").style.display = "none";
    document.getElementById("RESULTBLOCK").style.display = "inline";
    document.getElementById("RESULT").innerHTML = result;

    if (winner == 1) {
        redWins++;
        document.getElementById("PLAYER1COUNT").innerHTML = redWins;
    }
    else if (winner == 2) {
        blackWins++;
        document.getElementById("PLAYER2COUNT").innerHTML = blackWins;
    }

    //document.getElementById("PLAYAGAIN").style.display = "inline";

    gameOverSound.play(); //play the game over sound
}

ConnectFour.refresh = function (reset) {
    //loop through the columns
    for (var i = 0; i < cols.length; i++) {
        //wipe the current values
        for (var j = 1; j < cols[i].length; j++) {
            cols[i][j] = ""; //clear the columns array
            wCols[i][j] = ""; //clear the winning columns array
            document.getElementById(cols[i][0] + j).style.backgroundPosition = "0 0"; //clear the board
        }
    }

    document.getElementById("RESULTBLOCK").style.display = "none";
    document.getElementById("MODEBLOCK").style.display = "inline";

    if (reset) { //if game is reset, the game is not technically 'finished' so need do do these from that function
        gameOver = true;
        document.getElementById("GAME").style.display = "none";
        for (var i = 0; i < cols.length; i++) {
            document.getElementById(cols[i][0] + 0).style.backgroundPosition = "7px -120px";
        }
    }
    if (!reset) { redStart = redStart ? false : true; } //change who starts only if previous game was completed (not reset)
    red = redStart;
    currentTurn = 0;
}

//reset the win counts
ConnectFour.reset = function () {
    redWins = 0;
    blackWins = 0;

    document.getElementById("PLAYER1COUNT").innerHTML = redWins;
    document.getElementById("PLAYER2COUNT").innerHTML = blackWins;
}

ConnectFour.tryValidMove = function (col) {
    //the board is numbered like:
    //      6 . . . . . . .
    //      5 . . . . . . .
    //      4 . . . . . . .
    //      3 . . . . . . .
    //      2 . . . . . . .
    //      1 . . . . . . .
    //      0 a b c d e f g

    var board = "";
    var allCols = [a, b, c, d, e, f, g]; //get cols in order

    for (var i = 0; i < allCols.length; i++) {
        var colArray = allCols[i];
        for (var row = 1; row < colArray.length; row++) {
            if (colArray[0] == col && colArray[row] == "" && (row == 1 || colArray[row - 1] != "")) {
                board += "b,";
            }
            else {
                board += colArray[row] + ",";
            }
        }
    }

    var isValid = ConnectFour.checkMove('|' + board + '|');
    return isValid;
}

ConnectFour.getNextMove = function (col, row) {
    //start middle, work way out (smartest)
    if (ConnectFour.tryValidMove("D")) { return "D"; }
    if (ConnectFour.tryValidMove("C")) { return "C"; }
    if (ConnectFour.tryValidMove("E")) { return "E"; }
    if (ConnectFour.tryValidMove("B")) { return "B"; }
    if (ConnectFour.tryValidMove("F")) { return "F"; }
    if (ConnectFour.tryValidMove("A")) { return "A"; }
    if (ConnectFour.tryValidMove("G")) { return "G"; }

    //the board is numbered like:
    //      6 . . . o . . .
    //      5 . . . x . . .
    //      4 . . . o . . .
    //      3 . . . x . . .
    //      2 . . . o . . .
    //      1 . . x x o . .
    //      0 a b c d e f g

    //set up win

    //mouse trap
    if (c[1] == "b" && d[1] == "b" && d[3] == "b" && e[4] == "b" && a[1] == "" && b[1] == "" && c[2] == "") { return "B"; }

    //open ended along the bottom
    if (c[1] == "b" && d[1] == "b" && b[1] == "" && e[1] == "" && (a[1] == "" || f[1] == "")) { return "B"; }
    if (d[1] == "b" && e[1] == "b" && c[1] == "" && f[1] == "" && (b[1] == "" || g[1] == "")) { return "F"; }
    if (b[1] == "b" && c[1] == "b" && a[1] == "" && d[1] == "" && e[1] == "") { return "D"; }
    if (e[1] == "b" && f[1] == "b" && c[1] == "" && d[1] == "" && g[1] == "") { return "D"; }


    //block a set up

    //open ended along the bottom
    if (c[1] == "r" && d[1] == "r" && b[1] == "" && e[1] == "" && (a[1] == "" || f[1] == "")) { return "B"; }
    if (d[1] == "r" && e[1] == "r" && c[1] == "" && f[1] == "" && (b[1] == "" || g[1] == "")) { return "F"; }
    if (b[1] == "r" && c[1] == "r" && a[1] == "" && d[1] == "" && e[1] == "") { return "D"; }
    if (e[1] == "r" && f[1] == "r" && c[1] == "" && d[1] == "" && g[1] == "") { return "D"; }


    //try a strategy
    if (redStart) { //red starts, so black is on even rows (currently not fully supported)
        if (currentTurn == 1) {
            if (d[1] == "r") { return "C"; }
        }
    }
    else { //black starts, and is on odd rows
        if (d[2] != "" && d[3] == "") { return "D"; }
        if (c[2] == "b" && d[2] == "" && c[3] == "") { return "C"; }
        if (e[2] == "b" && d[2] == "" && e[3] == "") { return "E"; }

        if (currentTurn == 2) {
            if (d[2] == "r") { return "D"; }
            else if (c[1] == "r") { return "C"; }
            else if (e[1] == "r") { return "E"; }
            else { ConnectFour.clicked("D"); }
        }
        else if (currentTurn == 3) {
            if (d[4] == "r") { return "C"; }
        }
        else if (currentTurn == 4) {
            if (c[1] == "b" && d[1] == "b" && d[3] == "b" && e[1] == "r") { return "E"; }
        }
        else if (currentTurn == 5) {
            if (c[1] == "b" && d[1] == "b" && d[3] == "b" && e[3] == "r") { return "E"; }
        }
    }

    //there are no planned moves - go ontop of them, but only if they wont win by doing so
    for (var i = 0; i < wCols.length; i++) {
        if (wCols[i][0] == col) {
            //if they went down 6, we cant go ontop. 5 is safe to go ontop of. anything else needs checking
            if (row != 6 && (row == 5 || wCols[i][row + 2] == "")) {
                //go down the same column as them
                return col;
            }
            break;
        }
    }

    //if there's no room on top of their piece, go somewhere else that wont make them win
    for (var j = 0; j < wCols.length; j++) {
        if (cols[j][6] == "") {
            for (var k = 1; k < wCols[j].length; k++) {
                if (cols[j][k] == "") {
                    //if the column has a blank spot, with no win above it, fill it!
                    if (k == 6 || wCols[j][k + 1] == "") {
                        return wCols[j][0];
                    }
                    break;
                }
            }
        }
    }

    //if there's no where that will not make them win or block the bot winning, just let them block
    for (var l = 0; l < wCols.length; l++) {
        if (cols[l][6] == "") {
            for (var m = 1; m < wCols[l].length; m++) {
                if (cols[l][m] == "") {
                    //if the column has a blank spot, with no win above it, fill it!
                    if (m == 6 || wCols[l][m + 1] != "r") {
                        return wCols[l][0];
                    }
                    break;
                }
            }
        }
    }

    //as a last resort, if nothing else can be done, just fill an available space - start middle, work way out (smartest)
    if (d[6] == "") { return "D"; }
    if (c[6] == "") { return "C"; }
    if (e[6] == "") { return "E"; }
    if (b[6] == "") { return "B"; }
    if (f[6] == "") { return "F"; }
    if (a[6] == "") { return "A"; }
    if (g[6] == "") { return "G"; }
}