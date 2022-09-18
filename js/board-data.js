﻿/// <reference path="default.js" />

var ConnectFour = ConnectFour || {};

//each board (pipe separator) represents a1-a6 b1-b6 etc in that order. each 'space' is separated by comma
//null space means no piece occupies, b means black occupies, r means red occupies
var validMoves = "|,,,,,,,,,,,,b,,,,,,r,,,,,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,b,b,,,,,r,,,,,,,,,,,,r,,,,,,,,,,,,|,,,,,,,,,,,,b,b,r,,,,r,,,,,,,,,,,,r,,,,,,b,,,,,,|,,,,,,,,,,,,b,b,r,r,,,r,,,,,,,,,,,,r,b,,,,,b,,,,,,|,,,,,,,,,,,,b,b,r,r,r,b,r,b,,,,,,,,,,,r,b,r,,,,b,,,,,,|,,,,,,,,,,,,b,b,r,r,r,b,r,b,r,,,,,,,,,,r,b,r,b,,,b,,,,,,|,,,,,,,,,,,,b,b,r,r,r,b,r,b,r,r,b,,,,,,,,r,b,r,b,,,b,,,,,,|,,,,,,,,,,,,b,b,r,r,r,b,r,b,r,r,b,r,,,,,,,r,b,r,b,b,,b,,,,,,|,,,,,,,,,,,,b,b,,,,,r,,,,,,r,r,b,,,,r,,,,,,b,,,,,,|,,,,,,,,,,,,b,b,,,,,r,b,,,,,r,r,b,,,,r,r,,,,,b,,,,,,|,,,,,,,,,,,,b,b,,,,,r,b,r,,,,r,r,b,b,,,r,r,,,,,b,,,,,,|,,,,,,,,,,,,b,b,,,,,r,b,r,,,,r,r,b,b,r,,r,r,,,,,b,b,,,,,|,,,,,,,,,,,,b,,,,,,r,r,b,,,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,b,r,,,,,r,r,b,b,,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,b,r,b,,,,r,r,b,b,r,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,b,r,b,r,b,,r,r,b,b,r,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,b,r,b,r,b,,r,r,b,b,r,b,,,,,,,,,,,,,r,,,,,,|,,,,,,,,,,,,b,r,b,r,b,,r,r,b,b,r,b,b,b,,,,,r,,,,,,r,r,,,,,|,,,,,,,,,,,,b,r,b,r,b,,r,r,b,b,r,b,b,b,r,b,,,r,,,,,,r,r,,,,,|b,,,,,,,,,,,,b,r,b,r,b,,r,r,b,b,r,b,b,b,r,b,r,,r,,,,,,r,r,,,,,|,,,,,,r,,,,,,b,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,|,,,,,,r,,,,,,b,,,,,,,,,,,,r,b,,,,,,,,,,,,,,,,,|,,,,,,r,,,,,,b,r,b,,,,,,,,,,r,b,,,,,,,,,,,,,,,,,|,,,,,,r,b,,,,,b,r,b,r,,,,,,,,,r,b,,,,,,,,,,,,,,,,,|b,,,,,,r,b,r,,,,b,r,b,r,,,,,,,,,r,b,,,,,,,,,,,,,,,,,|b,,,,,,r,b,r,b,,,b,r,b,r,r,,,,,,,,r,b,,,,,,,,,,,,,,,,,|b,,,,,,,,,,,,b,r,b,,,,r,r,b,b,r,r,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,b,r,b,,,,r,,,,,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,b,r,b,r,,,r,,,,,,,,,,,,,,,,,,b,,,,,,|,,,,,,,,,,,,b,r,b,r,b,,r,,,,,,,,,,,,,,,,,,b,r,,,,,|,,,,,,,,,,,,b,r,b,r,b,,r,r,,,,,,,,,,,,,,,,,b,r,b,,,,|,,,,,,,,,,,,b,r,b,r,b,,r,r,r,b,r,b,,,,,,,,,,,,,b,r,b,,,,|r,b,,,,,,,,,,,b,r,b,r,b,,r,r,r,b,r,b,,,,,,,,,,,,,b,r,b,,,,|r,b,,,,,,,,,,,b,r,b,r,b,r,r,r,r,b,r,b,,,,,,,,,,,,,b,r,b,b,,,|r,b,,,,,,,,,,,b,r,b,r,b,r,r,r,r,b,r,b,,,,,,,,,,,,,b,r,b,b,r,b,|r,b,,,,,r,b,,,,,b,r,b,r,b,r,r,r,r,b,r,b,,,,,,,,,,,,,b,r,b,b,r,b,|r,b,,,,,r,b,,,,,b,r,b,r,b,r,r,r,r,b,r,b,,,,,,,r,b,,,,,b,r,b,b,r,b,|r,b,,,,,r,b,,,,,b,r,b,r,b,r,r,r,r,b,r,b,,,,,,,r,b,r,b,,,b,r,b,b,r,b,|r,b,,,,,r,b,,,,,b,r,b,r,b,r,r,r,r,b,r,b,,,,,,,r,b,r,b,r,b,b,r,b,b,r,b,|r,b,,,,,r,b,r,b,,,b,r,b,r,b,r,r,r,r,b,r,b,,,,,,,r,b,r,b,r,b,b,r,b,b,r,b,|,,,,,,,,,,,,,,,,,,b,,,,,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,,,,,,,b,r,b,,,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,,,,,,,b,r,b,r,b,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,,,,,,,b,r,b,r,b,r,b,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,r,b,,,,,b,r,b,r,b,r,b,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,r,b,r,b,,,b,r,b,r,b,r,b,,,,,,,,,,,,,,,,,,|r,,,,,,,,,,,,r,b,r,b,,,b,r,b,r,b,r,b,,,,,,b,,,,,,,,,,,,|,,,,,,,,,,,,b,,,,,,r,r,b,r,b,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,b,,,,,,r,r,b,r,b,,b,,,,,,,,,,,,r,,,,,,|,,,,,,,,,,,,b,b,,,,,r,r,b,r,b,,b,r,,,,,,,,,,,r,,,,,,|,,,,,,,,,,,,b,b,b,,,,r,r,b,r,b,,b,r,r,,,,,,,,,,r,,,,,,|,,,,,,,,,,,,b,b,b,r,,,r,r,b,r,b,,b,r,r,b,,,,,,,,,r,,,,,,|,,,,,,r,,,,,,b,b,b,r,,,r,r,b,r,b,b,b,r,r,b,,,,,,,,,r,,,,,,|,,,,,,r,,,,,,b,b,b,r,r,b,r,r,b,r,b,b,b,r,r,b,,,,,,,,,r,,,,,,|b,,,,,,r,,,,,,b,b,b,r,r,b,r,r,b,r,b,b,b,r,r,b,,,,,,,,,r,r,,,,,|,,,,,,r,,,,,,b,r,b,,,,,,,,,,,,,,,,,,,,,,,,,,,,|,,,,,,r,b,,,,,b,r,b,r,,,,,,,,,,,,,,,,,,,,,,,,,,,|,,,,,,r,b,,,,,b,r,b,r,,,r,b,,,,,,,,,,,,,,,,,,,,,,,|,,,,,,r,b,,,,,b,r,b,r,,,r,b,r,b,,,,,,,,,,,,,,,,,,,,,|r,,,,,,r,b,,,,,b,r,b,r,,,r,b,r,b,b,,,,,,,,,,,,,,,,,,,,|r,,,,,,r,b,,,,,b,r,b,r,,,r,b,r,b,b,,,,,,,,b,,,,,,r,,,,,,|r,,,,,,r,b,,,,,b,r,b,r,,,r,b,r,b,b,,,,,,,,r,,,,,,b,,,,,,|,,,,,,,,,,,,r,b,r,b,,,b,r,b,r,b,r,b,r,,,,,b,,,,,,,,,,,,|,,,,,,,,,,,,r,b,r,b,,,b,r,b,r,b,r,b,r,b,,,,b,,,,,,r,,,,,,|r,,,,,,,,,,,,r,b,r,b,,,b,r,b,r,b,r,b,r,b,b,,,b,,,,,,r,,,,,,|r,,,,,,r,b,,,,,r,b,r,b,,,b,r,b,r,b,r,b,r,b,b,b,,b,b,r,,,,r,r,,,,,|r,,,,,,r,b,b,,,,r,b,r,b,,,b,r,b,r,b,r,b,r,b,b,b,r,b,b,r,,,,r,r,,,,,|r,r,,,,,r,b,b,,,,r,b,r,b,b,,b,r,b,r,b,r,b,r,b,b,b,r,b,b,r,,,,r,r,,,,,|,,,,,,,,,,,,r,,,,,,b,r,b,,,,,,,,,,b,,,,,,,,,,,,|,,,,,,,,,,,,r,,,,,,b,r,b,b,,,,,,,,,b,r,,,,,,,,,,,|,,,,,,,,,,,,r,r,,,,,b,r,b,b,,,,,,,,,b,r,,,,,b,,,,,,|,,,,,,,,,,,,r,r,,,,,b,r,b,b,b,,r,b,r,,,,b,r,,,,,b,,,,,,|,,,,,,,,,,,,r,r,,,,,b,r,b,b,b,r,r,b,r,,,,b,r,,,,,b,b,,,,,|,,,,,,,,,,,,r,r,,,,,b,r,b,b,b,r,r,b,r,r,,,b,r,,,,,b,b,b,,,,|,,,,,,,,,,,,r,r,,,,,b,r,b,b,b,r,r,b,r,r,b,,b,r,,,,,b,b,b,r,,,|,,,,,,,,,,,,r,r,,,,,b,r,b,b,b,r,r,b,r,r,b,,b,r,,,,,b,b,b,r,r,b,|r,b,,,,,,,,,,,r,r,,,,,b,r,b,b,b,r,r,b,r,r,b,,b,r,,,,,b,b,b,r,r,b,|r,b,,,,,,,,,,,r,r,b,,,,b,r,b,b,b,r,r,b,r,r,b,r,b,r,,,,,b,b,b,r,r,b,|r,b,,,,,,,,,,,r,r,b,r,b,,b,r,b,b,b,r,r,b,r,r,b,r,b,r,,,,,b,b,b,r,r,b,|,,,,,,,,,,,,,,,,,,b,r,b,b,,,r,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,,,,,,,b,r,b,b,b,,r,r,,,,,,,,,,,,,,,,,|b,,,,,,,,,,,,,,,,,,b,r,b,b,b,r,r,r,,,,,,,,,,,,,,,,,|b,,,,,,b,,,,,,,,,,,,b,r,b,b,b,r,r,r,r,b,r,,,,,,,,,,,,,,|,,,,,,,,,,,,r,,,,,,b,r,b,r,b,,,,,,,,b,,,,,,,,,,,,|,,,,,,,,,,,,r,b,,,,,b,r,b,r,b,,,,,,,,b,,,,,,r,,,,,,|,,,,,,,,,,,,r,b,,,,,b,r,b,r,b,,,,,,,,b,r,,,,,r,b,,,,,|,,,,,,,,,,,,r,b,r,b,,,b,r,b,r,b,,,,,,,,b,r,,,,,r,b,,,,,|b,,,,,,,,,,,,r,b,r,b,,,b,r,b,r,b,,,,,,,,b,r,,,,,r,b,r,,,,|b,r,,,,,,,,,,,r,b,r,b,b,,b,r,b,r,b,,,,,,,,b,r,,,,,r,b,r,,,,|b,,,,,,,,,,,,,,,,,,b,,,,,,r,,,,,,,,,,,,,,,,,,|b,,,,,,b,,,,,,,,,,,,b,,,,,,r,,,,,,r,,,,,,,,,,,,|b,,,,,,b,,,,,,r,b,,,,,b,,,,,,r,,,,,,r,,,,,,,,,,,,|b,,,,,,b,,,,,,r,b,,,,,b,r,b,,,,r,,,,,,r,,,,,,,,,,,,|b,,,,,,b,,,,,,r,b,r,,,,b,r,b,,,,r,b,,,,,r,,,,,,,,,,,,|b,,,,,,b,,,,,,r,b,r,b,,,b,r,b,r,,,r,b,,,,,r,,,,,,,,,,,,|b,,,,,,b,r,,,,,r,b,r,b,,,b,r,b,r,b,,r,b,,,,,r,,,,,,,,,,,,|b,,,,,,b,r,,,,,r,b,r,b,,,b,r,b,r,b,,r,b,,,,,r,r,b,,,,,,,,,,|,,,,,,,,,,,,r,,,,,,b,,,,,,,,,,,,,,,,,,b,,,,,,|,,,,,,,,,,,,r,,,,,,b,r,b,,,,,,,,,,,,,,,,b,,,,,,|,,,,,,r,,,,,,r,,,,,,b,r,b,b,,,,,,,,,,,,,,,b,,,,,,|,,,,,,r,,,,,,r,b,,,,,b,r,b,b,r,,,,,,,,,,,,,,b,,,,,,|,,,,,,r,,,,,,r,b,r,,,,b,r,b,b,r,,b,,,,,,,,,,,,b,,,,,,|,,,,,,r,,,,,,r,b,r,,,,b,r,b,b,r,,b,,,,,,r,,,,,,b,b,,,,,|,,,,,,r,,,,,,r,b,r,,,,b,r,b,b,r,,b,,,,,,r,r,,,,,b,b,b,,,,|,,,,,,r,,,,,,r,b,r,,,,b,r,b,b,r,,b,,,,,,r,r,b,,,,b,b,b,r,,,|,,,,,,,,,,,,r,,,,,,b,,,,,,r,b,,,,,,,,,,,b,,,,,,|,,,,,,,,,,,,r,,,,,,b,,,,,,r,b,r,b,,,,,,,,,b,,,,,,|,,,,,,,,,,,,r,,,,,,b,r,b,,,,r,b,r,b,,,,,,,,,b,,,,,,|,,,,,,,,,,,,r,r,,,,,b,r,b,,,,r,b,r,b,b,,,,,,,,b,,,,,,|,,,,,,,,,,,,r,r,,,,,b,r,b,r,b,,r,b,r,b,b,,,,,,,,b,,,,,,|,,,,,,,,,,,,r,r,,,,,b,r,b,r,b,,r,b,r,b,b,,b,,,,,,b,r,,,,,|,,,,,,,,,,,,r,r,b,,,,b,r,b,r,b,,r,b,r,b,b,r,b,,,,,,b,r,,,,,|,,,,,,,,,,,,r,r,b,r,b,,b,r,b,r,b,,r,b,r,b,b,r,b,,,,,,b,r,,,,,|,,,,,,,,,,,,r,r,b,r,b,b,b,r,b,r,b,r,r,b,r,b,b,r,b,,,,,,b,r,,,,,|,,,,,,,,,,,,r,r,b,r,b,b,b,r,b,r,b,r,r,b,r,b,b,r,b,,,,,,b,r,r,b,,,|,,,,,,,,,,,,r,r,b,r,b,b,b,r,b,r,b,r,r,b,r,b,b,r,b,,,,,,b,r,r,b,r,b,|,,,,,,r,b,,,,,,,,,,,b,,,,,,,,,,,,,,,,,,,,,,,,|,,,,,,r,b,,,,,,,,,,,b,r,b,,,,,,,,,,,,,,,,,,,,,,|,,,,,,r,b,,,,,r,,,,,,b,r,b,,,,b,,,,,,,,,,,,,,,,,,|,,,,,,r,b,,,,,r,,,,,,b,r,b,b,,,b,,,,,,,,,,,,r,,,,,,|,,,,,,r,b,,,,,r,,,,,,b,r,b,b,b,,b,r,,,,,,,,,,,r,,,,,,|,,,,,,r,b,,,,,r,,,,,,b,r,b,b,b,r,b,r,,,,,,,,,,,r,b,,,,,|r,,,,,,r,b,,,,,r,,,,,,b,r,b,b,b,r,b,r,b,,,,,,,,,,r,b,,,,,|r,,,,,,r,b,,,,,r,,,,,,b,r,b,b,b,r,b,r,b,r,b,,,,,,,,r,b,,,,,|r,,,,,,r,b,r,b,,,r,,,,,,b,r,b,b,b,r,b,r,b,r,b,,,,,,,,r,b,,,,,|r,,,,,,r,b,r,b,r,,r,,,,,,b,r,b,b,b,r,b,r,b,r,b,,b,,,,,,r,b,,,,,|r,,,,,,r,b,r,b,r,b,r,b,r,,,,b,r,b,b,b,r,b,r,b,r,b,,b,r,,,,,r,b,,,,,|,,,,,,,,,,,,r,,,,,,b,r,b,r,,,,,,,,,b,,,,,,b,,,,,,|,,,,,,,,,,,,r,,,,,,b,r,b,r,,,r,b,,,,,b,,,,,,b,,,,,,|,,,,,,,,,,,,r,b,,,,,b,r,b,r,r,,r,b,,,,,b,,,,,,b,,,,,,|,,,,,,,,,,,,r,b,,,,,b,r,b,r,r,b,r,b,,,,,b,,,,,,b,r,,,,,|,,,,,,,,,,,,r,b,,,,,b,r,b,r,r,b,r,b,r,b,,,b,,,,,,b,r,,,,,|,,,,,,r,,,,,,r,b,b,,,,b,r,b,r,r,b,r,b,r,b,,,b,,,,,,b,r,,,,,|,,,,,,r,,,,,,r,b,b,r,b,,b,r,b,r,r,b,r,b,r,b,,,b,,,,,,b,r,,,,,|,,,,,,r,,,,,,r,b,b,r,b,,b,r,b,r,r,b,r,b,r,b,r,b,b,,,,,,b,r,,,,,|,,,,,,r,,,,,,r,b,b,r,b,r,b,r,b,r,r,b,r,b,r,b,r,b,b,,,,,,b,r,b,,,,|r,b,,,,,r,,,,,,r,b,b,r,b,r,b,r,b,r,r,b,r,b,r,b,r,b,b,,,,,,b,r,b,,,,|b,,,,,,,,,,,,,,,,,,b,,,,,,r,b,,,,,,,,,,,r,,,,,,|b,,,,,,,,,,,,,,,,,,b,b,,,,,r,b,,,,,r,,,,,,r,,,,,,|b,,,,,,r,,,,,,,,,,,,b,b,b,,,,r,b,,,,,r,,,,,,r,,,,,,|b,,,,,,r,,,,,,,,,,,,b,b,b,r,b,,r,b,,,,,r,,,,,,r,,,,,,|b,,,,,,r,,,,,,,,,,,,b,b,b,r,b,,r,b,r,b,,,r,b,,,,,r,r,,,,,|b,,,,,,r,,,,,,,,,,,,b,b,b,r,b,b,r,b,r,b,r,,r,b,,,,,r,r,,,,,|b,,,,,,r,,,,,,b,,,,,,b,b,b,r,b,b,r,b,r,b,r,,r,b,r,,,,r,r,r,b,,,|b,,,,,,r,,,,,,b,r,b,,,,b,b,b,r,b,b,r,b,r,b,r,,r,b,r,,,,r,r,r,b,,,|,,,,,,b,,,,,,,,,,,,b,,,,,,,,,,,,,,,,,,r,,,,,,|,,,,,,b,,,,,,,,,,,,b,b,,,,,,,,,,,,,,,,,r,r,,,,,|,,,,,,b,r,,,,,,,,,,,b,b,b,,,,,,,,,,,,,,,,r,r,,,,,|,,,,,,b,r,,,,,,,,,,,b,b,b,r,b,,,,,,,,,,,,,,r,r,,,,,|,,,,,,b,r,,,,,b,,,,,,b,b,b,r,b,,r,,,,,,,,,,,,r,r,,,,,|r,,,,,,b,r,,,,,b,,,,,,b,b,b,r,b,b,r,,,,,,,,,,,,r,r,,,,,|r,,,,,,b,r,r,b,,,b,,,,,,b,b,b,r,b,b,r,,,,,,,,,,,,r,r,,,,,|r,,,,,,b,r,r,b,b,,b,,,,,,b,b,b,r,b,b,r,r,,,,,,,,,,,r,r,,,,,|r,r,b,,,,b,r,r,b,b,,b,,,,,,b,b,b,r,b,b,r,r,,,,,,,,,,,r,r,,,,,|r,r,b,r,,,b,r,r,b,b,,b,,,,,,b,b,b,r,b,b,r,r,b,,,,,,,,,,r,r,,,,,|r,r,b,r,r,,b,r,r,b,b,,b,,,,,,b,b,b,r,b,b,r,r,b,b,,,,,,,,,r,r,r,b,,,|,,,,,,,,,,,,b,,,,,,b,r,b,r,b,,,,,,,,,,,,,,r,,,,,,|,,,,,,r,,,,,,b,,,,,,b,r,b,r,b,,,,,,,,b,,,,,,r,,,,,,|,,,,,,r,,,,,,b,,,,,,b,r,b,r,b,,r,b,,,,,b,,,,,,r,,,,,,|,,,,,,r,,,,,,b,,,,,,b,r,b,r,b,,r,b,r,,,,b,b,r,b,,,r,,,,,,|,,,,,,r,,,,,,b,,,,,,b,r,b,r,b,b,r,b,r,,,,b,b,r,b,r,,r,,,,,,|,,,,,,r,r,,,,,b,b,,,,,b,r,b,r,b,b,r,b,r,,,,b,b,r,b,r,,r,,,,,,|,,,,,,r,r,r,b,r,,b,b,,,,,b,r,b,r,b,b,r,b,r,b,,,b,b,r,b,r,,r,,,,,,|,,,,,,r,b,b,,,,r,,,,,,b,,,,,,,,,,,,,,,,,,,,,,,,|,,,,,,r,b,b,,,,r,,,,,,b,r,b,,,,,,,,,,,,,,,,,,,,,,|,,,,,,r,b,b,,,,r,r,b,,,,b,r,b,,,,,,,,,,,,,,,,,,,,,,|,,,,,,r,b,b,,,,r,r,b,,,,b,r,b,,,,,,,,,,r,b,,,,,,,,,,,|,,,,,,r,b,b,,,,r,r,b,,,,b,r,b,b,,,r,,,,,,r,b,,,,,,,,,,,|r,,,,,,r,b,b,,,,r,r,b,,,,b,r,b,b,b,,r,,,,,,r,b,,,,,,,,,,,|r,,,,,,r,b,b,,,,r,r,b,b,,,b,r,b,b,b,r,r,,,,,,r,b,,,,,,,,,,,|,,,,,,,,,,,,r,r,,,,,b,r,b,b,,,,,,,,,,,,,,,b,,,,,,|r,,,,,,,,,,,,r,r,b,,,,b,r,b,b,,,,,,,,,,,,,,,b,,,,,,|r,,,,,,,,,,,,r,r,b,r,,,b,r,b,b,b,,,,,,,,,,,,,,b,,,,,,|r,b,,,,,,,,,,,r,r,b,r,,,b,r,b,b,b,r,,,,,,,,,,,,,b,,,,,,|r,b,r,,,,,,,,,,r,r,b,r,,,b,r,b,b,b,r,b,,,,,,,,,,,,b,,,,,,|r,b,r,,,,,,,,,,r,r,b,r,,,b,r,b,b,b,r,b,b,,,,,r,,,,,,b,,,,,,|r,b,r,,,,,,,,,,r,r,b,r,r,,b,r,b,b,b,r,b,b,b,,,,r,,,,,,b,,,,,,|,,,,,,,,,,,,b,r,b,,,,r,r,b,,,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,b,r,b,,,,r,r,b,b,,,,,,,,,r,,,,,,,,,,,,|,,,,,,,,,,,,b,r,b,,,,r,r,b,b,,,,,,,,,r,r,,,,,b,,,,,,|b,,,,,,,,,,,,b,r,b,,,,r,r,b,b,,,,,,,,,r,r,r,b,,,b,r,,,,,|b,r,,,,,,,,,,,b,r,b,,,,r,r,b,b,b,,,,,,,,r,r,r,b,,,b,r,,,,,|b,r,,,,,,,,,,,b,r,b,b,,,r,r,b,b,b,r,,,,,,,r,r,r,b,,,b,r,,,,,|,,,,,,,,,,,,b,r,b,,,,r,r,b,r,b,,,,,,,,,,,,,,,,,,,,|,,,,,,,,,,,,b,r,b,,,,r,r,b,r,b,,,,,,,,b,,,,,,r,,,,,,|,,,,,,,,,,,,b,r,b,b,,,r,r,b,r,b,,,,,,,,b,r,,,,,r,,,,,,|,,,,,,b,,,,,,b,r,b,b,r,,r,r,b,r,b,,,,,,,,b,r,,,,,r,,,,,,|";
ConnectFour.checkMove = function (board) {
    //if the board matches, play that col
    return validMoves.indexOf(board) != -1;
}