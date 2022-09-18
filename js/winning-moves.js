/// <reference path="default.js" />

var ConnectFour = ConnectFour || {};

ConnectFour.setWinningMoves = function (colour) {
    //after each turn, calculate which positions would allow either player to win (red="r", black="b", both="x")
    var other = colour == "r" ? "b" : "r"; //the other players colour

    //diagonally - top left to bottom right - win in top left
    if (a[6] == "" && b[5] == colour && c[4] == colour && d[3] == colour) { wA[6] = (wA[6] == other || wA[6] == "x") ? "x" : colour; }
    if (a[5] == "" && b[4] == colour && c[3] == colour && d[2] == colour) { wA[5] = (wA[5] == other || wA[5] == "x") ? "x" : colour; }
    if (a[4] == "" && b[3] == colour && c[2] == colour && d[1] == colour) { wA[4] = (wA[4] == other || wA[4] == "x") ? "x" : colour; }

    if (b[6] == "" && c[5] == colour && d[4] == colour && e[3] == colour) { wB[6] = (wB[6] == other || wB[6] == "x") ? "x" : colour; }
    if (b[5] == "" && c[4] == colour && d[3] == colour && e[2] == colour) { wB[5] = (wB[5] == other || wB[5] == "x") ? "x" : colour; }
    if (b[4] == "" && c[3] == colour && d[2] == colour && e[1] == colour) { wB[4] = (wB[4] == other || wB[4] == "x") ? "x" : colour; }

    if (c[6] == "" && d[5] == colour && e[4] == colour && f[3] == colour) { wC[6] = (wC[6] == other || wC[6] == "x") ? "x" : colour; }
    if (c[5] == "" && d[4] == colour && e[3] == colour && f[2] == colour) { wC[5] = (wC[5] == other || wC[5] == "x") ? "x" : colour; }
    if (c[4] == "" && d[3] == colour && e[2] == colour && f[1] == colour) { wC[4] = (wC[4] == other || wC[4] == "x") ? "x" : colour; }

    if (d[6] == "" && e[5] == colour && f[4] == colour && g[3] == colour) { wD[6] = (wD[6] == other || wD[6] == "x") ? "x" : colour; }
    if (d[5] == "" && e[4] == colour && f[3] == colour && g[2] == colour) { wD[5] = (wD[5] == other || wD[5] == "x") ? "x" : colour; }
    if (d[4] == "" && e[3] == colour && f[2] == colour && g[1] == colour) { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }

    //diagonally - top left to bottom right - win in second to top left
    if (a[6] == colour && b[5] == "" && c[4] == colour && d[3] == colour) { wB[5] = (wB[5] == other || wB[5] == "x") ? "x" : colour; }
    if (a[5] == colour && b[4] == "" && c[3] == colour && d[2] == colour) { wB[4] = (wB[4] == other || wB[4] == "x") ? "x" : colour; }
    if (a[4] == colour && b[3] == "" && c[2] == colour && d[1] == colour) { wB[3] = (wB[3] == other || wB[3] == "x") ? "x" : colour; }

    if (b[6] == colour && c[5] == "" && d[4] == colour && e[3] == colour) { wC[5] = (wC[5] == other || wC[5] == "x") ? "x" : colour; }
    if (b[5] == colour && c[4] == "" && d[3] == colour && e[2] == colour) { wC[4] = (wC[4] == other || wC[4] == "x") ? "x" : colour; }
    if (b[4] == colour && c[3] == "" && d[2] == colour && e[1] == colour) { wC[3] = (wC[3] == other || wC[3] == "x") ? "x" : colour; }

    if (c[6] == colour && d[5] == "" && e[4] == colour && f[3] == colour) { wD[5] = (wD[5] == other || wD[5] == "x") ? "x" : colour; }
    if (c[5] == colour && d[4] == "" && e[3] == colour && f[2] == colour) { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }
    if (c[4] == colour && d[3] == "" && e[2] == colour && f[1] == colour) { wD[3] = (wD[3] == other || wD[3] == "x") ? "x" : colour; }

    if (d[6] == colour && e[5] == "" && f[4] == colour && g[3] == colour) { wE[5] = (wE[5] == other || wE[5] == "x") ? "x" : colour; }
    if (d[5] == colour && e[4] == "" && f[3] == colour && g[2] == colour) { wE[4] = (wE[4] == other || wE[4] == "x") ? "x" : colour; }
    if (d[4] == colour && e[3] == "" && f[2] == colour && g[1] == colour) { wE[3] = (wE[3] == other || wE[3] == "x") ? "x" : colour; }

    //diagonally - top left to bottom right - win in second to bottom right
    if (a[6] == colour && b[5] == colour && c[4] == "" && d[3] == colour) { wC[4] = (wC[4] == other || wC[4] == "x") ? "x" : colour; }
    if (a[5] == colour && b[4] == colour && c[3] == "" && d[2] == colour) { wC[3] = (wC[3] == other || wC[3] == "x") ? "x" : colour; }
    if (a[4] == colour && b[3] == colour && c[2] == "" && d[1] == colour) { wC[2] = (wC[2] == other || wC[2] == "x") ? "x" : colour; }

    if (b[6] == colour && c[5] == colour && d[4] == "" && e[3] == colour) { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }
    if (b[5] == colour && c[4] == colour && d[3] == "" && e[2] == colour) { wD[3] = (wD[3] == other || wD[3] == "x") ? "x" : colour; }
    if (b[4] == colour && c[3] == colour && d[2] == "" && e[1] == colour) { wD[2] = (wD[2] == other || wD[2] == "x") ? "x" : colour; }

    if (c[6] == colour && d[5] == colour && e[4] == "" && f[3] == colour) { wE[4] = (wE[4] == other || wE[4] == "x") ? "x" : colour; }
    if (c[5] == colour && d[4] == colour && e[3] == "" && f[2] == colour) { wE[3] = (wE[3] == other || wE[3] == "x") ? "x" : colour; }
    if (c[4] == colour && d[3] == colour && e[2] == "" && f[1] == colour) { wE[2] = (wE[2] == other || wE[2] == "x") ? "x" : colour; }

    if (d[6] == colour && e[5] == colour && f[4] == "" && g[3] == colour) { wF[4] = (wF[4] == other || wF[4] == "x") ? "x" : colour; }
    if (d[5] == colour && e[4] == colour && f[3] == "" && g[2] == colour) { wF[3] = (wF[3] == other || wF[3] == "x") ? "x" : colour; }
    if (d[4] == colour && e[3] == colour && f[2] == "" && g[1] == colour) { wF[2] = (wF[2] == other || wF[2] == "x") ? "x" : colour; }

    //diagonally - top left to bottom right - win in bottom right
    if (a[6] == colour && b[5] == colour && c[4] == colour && d[3] == "") { wD[3] = (wD[3] == other || wD[3] == "x") ? "x" : colour; }
    if (a[5] == colour && b[4] == colour && c[3] == colour && d[2] == "") { wD[2] = (wD[2] == other || wD[2] == "x") ? "x" : colour; }
    if (a[4] == colour && b[3] == colour && c[2] == colour && d[1] == "") { wD[1] = (wD[1] == other || wD[1] == "x") ? "x" : colour; }

    if (b[6] == colour && c[5] == colour && d[4] == colour && e[3] == "") { wE[3] = (wE[3] == other || wE[3] == "x") ? "x" : colour; }
    if (b[5] == colour && c[4] == colour && d[3] == colour && e[2] == "") { wE[2] = (wE[2] == other || wE[2] == "x") ? "x" : colour; }
    if (b[4] == colour && c[3] == colour && d[2] == colour && e[1] == "") { wE[1] = (wE[1] == other || wE[1] == "x") ? "x" : colour; }

    if (c[6] == colour && d[5] == colour && e[4] == colour && f[3] == "") { wF[3] = (wF[3] == other || wF[3] == "x") ? "x" : colour; }
    if (c[5] == colour && d[4] == colour && e[3] == colour && f[2] == "") { wF[2] = (wF[2] == other || wF[2] == "x") ? "x" : colour; }
    if (c[4] == colour && d[3] == colour && e[2] == colour && f[1] == "") { wF[1] = (wF[1] == other || wF[1] == "x") ? "x" : colour; }

    if (d[6] == colour && e[5] == colour && f[4] == colour && g[3] == "") { wG[3] = (wG[3] == other || wG[3] == "x") ? "x" : colour; }
    if (d[5] == colour && e[4] == colour && f[3] == colour && g[2] == "") { wG[2] = (wG[2] == other || wG[2] == "x") ? "x" : colour; }
    if (d[4] == colour && e[3] == colour && f[2] == colour && g[1] == "") { wG[1] = (wG[1] == other || wG[1] == "x") ? "x" : colour; }


    //diagonally - bottom left to top right - win in bottom left
    if (a[1] == "" && b[2] == colour && c[3] == colour && d[4] == colour) { wA[1] = (wA[1] == other || wA[1] == "x") ? "x" : colour; }
    if (a[2] == "" && b[3] == colour && c[4] == colour && d[5] == colour) { wA[2] = (wA[2] == other || wA[2] == "x") ? "x" : colour; }
    if (a[3] == "" && b[4] == colour && c[5] == colour && d[6] == colour) { wA[3] = (wA[3] == other || wA[3] == "x") ? "x" : colour; }

    if (b[1] == "" && c[2] == colour && d[3] == colour && e[4] == colour) { wB[1] = (wB[1] == other || wB[1] == "x") ? "x" : colour; }
    if (b[2] == "" && c[3] == colour && d[4] == colour && e[5] == colour) { wB[2] = (wB[2] == other || wB[2] == "x") ? "x" : colour; }
    if (b[3] == "" && c[4] == colour && d[5] == colour && e[6] == colour) { wB[3] = (wB[3] == other || wB[3] == "x") ? "x" : colour; }

    if (c[1] == "" && d[2] == colour && e[3] == colour && f[4] == colour) { wC[1] = (wC[1] == other || wC[1] == "x") ? "x" : colour; }
    if (c[2] == "" && d[3] == colour && e[4] == colour && f[5] == colour) { wC[2] = (wC[2] == other || wC[2] == "x") ? "x" : colour; }
    if (c[3] == "" && d[4] == colour && e[5] == colour && f[6] == colour) { wC[3] = (wC[3] == other || wC[3] == "x") ? "x" : colour; }

    if (d[1] == "" && e[2] == colour && f[3] == colour && g[4] == colour) { wD[1] = (wD[1] == other || wD[1] == "x") ? "x" : colour; }
    if (d[2] == "" && e[3] == colour && f[4] == colour && g[5] == colour) { wD[2] = (wD[2] == other || wD[2] == "x") ? "x" : colour; }
    if (d[3] == "" && e[4] == colour && f[5] == colour && g[6] == colour) { wD[3] = (wD[3] == other || wD[3] == "x") ? "x" : colour; }

    //diagonally - bottom left to top right - win in second to bottom left
    if (a[1] == colour && b[2] == "" && c[3] == colour && d[4] == colour) { wB[2] = (wA[2] == other || wB[2] == "x") ? "x" : colour; }
    if (a[2] == colour && b[3] == "" && c[4] == colour && d[5] == colour) { wB[3] = (wA[3] == other || wB[3] == "x") ? "x" : colour; }
    if (a[3] == colour && b[4] == "" && c[5] == colour && d[6] == colour) { wB[4] = (wA[4] == other || wB[4] == "x") ? "x" : colour; }

    if (b[1] == colour && c[2] == "" && d[3] == colour && e[4] == colour) { wC[2] = (wC[2] == other || wC[2] == "x") ? "x" : colour; }
    if (b[2] == colour && c[3] == "" && d[4] == colour && e[5] == colour) { wC[3] = (wC[3] == other || wC[3] == "x") ? "x" : colour; }
    if (b[3] == colour && c[4] == "" && d[5] == colour && e[6] == colour) { wC[4] = (wC[4] == other || wC[4] == "x") ? "x" : colour; }

    if (c[1] == colour && d[2] == "" && e[3] == colour && f[4] == colour) { wD[2] = (wD[2] == other || wD[2] == "x") ? "x" : colour; }
    if (c[2] == colour && d[3] == "" && e[4] == colour && f[5] == colour) { wD[3] = (wD[3] == other || wD[3] == "x") ? "x" : colour; }
    if (c[3] == colour && d[4] == "" && e[5] == colour && f[6] == colour) { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }

    if (d[1] == colour && e[2] == "" && f[3] == colour && g[4] == colour) { wE[2] = (wE[2] == other || wE[2] == "x") ? "x" : colour; }
    if (d[2] == colour && e[3] == "" && f[4] == colour && g[5] == colour) { wE[3] = (wE[3] == other || wE[3] == "x") ? "x" : colour; }
    if (d[3] == colour && e[4] == "" && f[5] == colour && g[6] == colour) { wE[4] = (wE[4] == other || wE[4] == "x") ? "x" : colour; }

    //diagonally - bottom left to top right - win in second to top right
    if (a[1] == colour && b[2] == colour && c[3] == "" && d[4] == colour) { wC[3] = (wC[3] == other || wC[3] == "x") ? "x" : colour; }
    if (a[2] == colour && b[3] == colour && c[4] == "" && d[5] == colour) { wC[4] = (wC[4] == other || wC[4] == "x") ? "x" : colour; }
    if (a[3] == colour && b[4] == colour && c[5] == "" && d[6] == colour) { wC[5] = (wC[5] == other || wC[5] == "x") ? "x" : colour; }

    if (b[1] == colour && c[2] == colour && d[3] == "" && e[4] == colour) { wD[3] = (wD[3] == other || wD[3] == "x") ? "x" : colour; }
    if (b[2] == colour && c[3] == colour && d[4] == "" && e[5] == colour) { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }
    if (b[3] == colour && c[4] == colour && d[5] == "" && e[6] == colour) { wD[5] = (wD[5] == other || wD[5] == "x") ? "x" : colour; }

    if (c[1] == colour && d[2] == colour && e[3] == "" && f[4] == colour) { wE[3] = (wE[3] == other || wE[3] == "x") ? "x" : colour; }
    if (c[2] == colour && d[3] == colour && e[4] == "" && f[5] == colour) { wE[4] = (wE[4] == other || wE[4] == "x") ? "x" : colour; }
    if (c[3] == colour && d[4] == colour && e[5] == "" && f[6] == colour) { wE[5] = (wE[5] == other || wE[5] == "x") ? "x" : colour; }

    if (d[1] == colour && e[2] == colour && f[3] == "" && g[4] == colour) { wF[3] = (wF[3] == other || wF[3] == "x") ? "x" : colour; }
    if (d[2] == colour && e[3] == colour && f[4] == "" && g[5] == colour) { wF[4] = (wF[4] == other || wF[4] == "x") ? "x" : colour; }
    if (d[3] == colour && e[4] == colour && f[5] == "" && g[6] == colour) { wF[5] = (wF[5] == other || wF[5] == "x") ? "x" : colour; }

    //diagonally - bottom left to top right - win in top right
    if (a[1] == colour && b[2] == colour && c[3] == colour && d[4] == "") { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }
    if (a[2] == colour && b[3] == colour && c[4] == colour && d[5] == "") { wD[5] = (wD[5] == other || wD[5] == "x") ? "x" : colour; }
    if (a[3] == colour && b[4] == colour && c[5] == colour && d[6] == "") { wD[6] = (wD[6] == other || wD[6] == "x") ? "x" : colour; }

    if (b[1] == colour && c[2] == colour && d[3] == colour && e[4] == "") { wE[4] = (wE[4] == other || wE[4] == "x") ? "x" : colour; }
    if (b[2] == colour && c[3] == colour && d[4] == colour && e[5] == "") { wE[5] = (wE[5] == other || wE[5] == "x") ? "x" : colour; }
    if (b[3] == colour && c[4] == colour && d[5] == colour && e[6] == "") { wE[6] = (wE[6] == other || wE[6] == "x") ? "x" : colour; }

    if (c[1] == colour && d[2] == colour && e[3] == colour && f[4] == "") { wF[4] = (wF[4] == other || wF[4] == "x") ? "x" : colour; }
    if (c[2] == colour && d[3] == colour && e[4] == colour && f[5] == "") { wF[5] = (wF[5] == other || wF[5] == "x") ? "x" : colour; }
    if (c[3] == colour && d[4] == colour && e[5] == colour && f[6] == "") { wF[6] = (wF[6] == other || wF[6] == "x") ? "x" : colour; }

    if (d[1] == colour && e[2] == colour && f[3] == colour && g[4] == "") { wG[4] = (wG[4] == other || wG[4] == "x") ? "x" : colour; }
    if (d[2] == colour && e[3] == colour && f[4] == colour && g[5] == "") { wG[5] = (wG[5] == other || wG[5] == "x") ? "x" : colour; }
    if (d[3] == colour && e[4] == colour && f[5] == colour && g[6] == "") { wG[6] = (wG[6] == other || wG[6] == "x") ? "x" : colour; }


    //stright accross - win in left
    if (a[1] == "" && b[1] == colour && c[1] == colour && d[1] == colour) { wA[1] = (wA[1] == other || wA[1] == "x") ? "x" : colour; }
    if (a[2] == "" && b[2] == colour && c[2] == colour && d[2] == colour) { wA[2] = (wA[2] == other || wA[2] == "x") ? "x" : colour; }
    if (a[3] == "" && b[3] == colour && c[3] == colour && d[3] == colour) { wA[3] = (wA[3] == other || wA[3] == "x") ? "x" : colour; }
    if (a[4] == "" && b[4] == colour && c[4] == colour && d[4] == colour) { wA[4] = (wA[4] == other || wA[4] == "x") ? "x" : colour; }
    if (a[5] == "" && b[5] == colour && c[5] == colour && d[5] == colour) { wA[5] = (wA[5] == other || wA[5] == "x") ? "x" : colour; }
    if (a[6] == "" && b[6] == colour && c[6] == colour && d[6] == colour) { wA[6] = (wA[6] == other || wA[6] == "x") ? "x" : colour; }

    if (b[1] == "" && c[1] == colour && d[1] == colour && e[1] == colour) { wB[1] = (wB[1] == other || wB[1] == "x") ? "x" : colour; }
    if (b[2] == "" && c[2] == colour && d[2] == colour && e[2] == colour) { wB[2] = (wB[2] == other || wB[2] == "x") ? "x" : colour; }
    if (b[3] == "" && c[3] == colour && d[3] == colour && e[3] == colour) { wB[3] = (wB[3] == other || wB[3] == "x") ? "x" : colour; }
    if (b[4] == "" && c[4] == colour && d[4] == colour && e[4] == colour) { wB[4] = (wB[4] == other || wB[4] == "x") ? "x" : colour; }
    if (b[5] == "" && c[5] == colour && d[5] == colour && e[5] == colour) { wB[5] = (wB[5] == other || wB[5] == "x") ? "x" : colour; }
    if (b[6] == "" && c[6] == colour && d[6] == colour && e[6] == colour) { wB[6] = (wB[6] == other || wB[6] == "x") ? "x" : colour; }

    if (c[1] == "" && d[1] == colour && e[1] == colour && f[1] == colour) { wC[1] = (wC[1] == other || wC[1] == "x") ? "x" : colour; }
    if (c[2] == "" && d[2] == colour && e[2] == colour && f[2] == colour) { wC[2] = (wC[2] == other || wC[2] == "x") ? "x" : colour; }
    if (c[3] == "" && d[3] == colour && e[3] == colour && f[3] == colour) { wC[3] = (wC[3] == other || wC[3] == "x") ? "x" : colour; }
    if (c[4] == "" && d[4] == colour && e[4] == colour && f[4] == colour) { wC[4] = (wC[4] == other || wC[4] == "x") ? "x" : colour; }
    if (c[5] == "" && d[5] == colour && e[5] == colour && f[5] == colour) { wC[5] = (wC[5] == other || wC[5] == "x") ? "x" : colour; }
    if (c[6] == "" && d[6] == colour && e[6] == colour && f[6] == colour) { wC[6] = (wC[6] == other || wC[6] == "x") ? "x" : colour; }

    if (d[1] == "" && e[1] == colour && f[1] == colour && g[1] == colour) { wD[1] = (wD[1] == other || wD[1] == "x") ? "x" : colour; }
    if (d[2] == "" && e[2] == colour && f[2] == colour && g[2] == colour) { wD[2] = (wD[2] == other || wD[2] == "x") ? "x" : colour; }
    if (d[3] == "" && e[3] == colour && f[3] == colour && g[3] == colour) { wD[3] = (wD[3] == other || wD[3] == "x") ? "x" : colour; }
    if (d[4] == "" && e[4] == colour && f[4] == colour && g[4] == colour) { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }
    if (d[5] == "" && e[5] == colour && f[5] == colour && g[5] == colour) { wD[5] = (wD[5] == other || wD[5] == "x") ? "x" : colour; }
    if (d[6] == "" && e[6] == colour && f[6] == colour && g[6] == colour) { wD[6] = (wD[6] == other || wD[6] == "x") ? "x" : colour; }

    //stright accross - win in second to left
    if (a[1] == colour && b[1] == "" && c[1] == colour && d[1] == colour) { wB[1] = (wB[1] == other || wB[1] == "x") ? "x" : colour; }
    if (a[2] == colour && b[2] == "" && c[2] == colour && d[2] == colour) { wB[2] = (wB[2] == other || wB[2] == "x") ? "x" : colour; }
    if (a[3] == colour && b[3] == "" && c[3] == colour && d[3] == colour) { wB[3] = (wB[3] == other || wB[3] == "x") ? "x" : colour; }
    if (a[4] == colour && b[4] == "" && c[4] == colour && d[4] == colour) { wB[4] = (wB[4] == other || wB[4] == "x") ? "x" : colour; }
    if (a[5] == colour && b[5] == "" && c[5] == colour && d[5] == colour) { wB[5] = (wB[5] == other || wB[5] == "x") ? "x" : colour; }
    if (a[6] == colour && b[6] == "" && c[6] == colour && d[6] == colour) { wB[6] = (wB[6] == other || wB[6] == "x") ? "x" : colour; }

    if (b[1] == colour && c[1] == "" && d[1] == colour && e[1] == colour) { wC[1] = (wC[1] == other || wC[1] == "x") ? "x" : colour; }
    if (b[2] == colour && c[2] == "" && d[2] == colour && e[2] == colour) { wC[2] = (wC[2] == other || wC[2] == "x") ? "x" : colour; }
    if (b[3] == colour && c[3] == "" && d[3] == colour && e[3] == colour) { wC[3] = (wC[3] == other || wC[3] == "x") ? "x" : colour; }
    if (b[4] == colour && c[4] == "" && d[4] == colour && e[4] == colour) { wC[4] = (wC[4] == other || wC[4] == "x") ? "x" : colour; }
    if (b[5] == colour && c[5] == "" && d[5] == colour && e[5] == colour) { wC[5] = (wC[5] == other || wC[5] == "x") ? "x" : colour; }
    if (b[6] == colour && c[6] == "" && d[6] == colour && e[6] == colour) { wC[6] = (wC[6] == other || wC[6] == "x") ? "x" : colour; }

    if (c[1] == colour && d[1] == "" && e[1] == colour && f[1] == colour) { wD[1] = (wD[1] == other || wD[1] == "x") ? "x" : colour; }
    if (c[2] == colour && d[2] == "" && e[2] == colour && f[2] == colour) { wD[2] = (wD[2] == other || wD[2] == "x") ? "x" : colour; }
    if (c[3] == colour && d[3] == "" && e[3] == colour && f[3] == colour) { wD[3] = (wD[3] == other || wD[3] == "x") ? "x" : colour; }
    if (c[4] == colour && d[4] == "" && e[4] == colour && f[4] == colour) { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }
    if (c[5] == colour && d[5] == "" && e[5] == colour && f[5] == colour) { wD[5] = (wD[5] == other || wD[5] == "x") ? "x" : colour; }
    if (c[6] == colour && d[6] == "" && e[6] == colour && f[6] == colour) { wD[6] = (wD[6] == other || wD[6] == "x") ? "x" : colour; }

    if (d[1] == colour && e[1] == "" && f[1] == colour && g[1] == colour) { wE[1] = (wE[1] == other || wE[1] == "x") ? "x" : colour; }
    if (d[2] == colour && e[2] == "" && f[2] == colour && g[2] == colour) { wE[2] = (wE[2] == other || wE[2] == "x") ? "x" : colour; }
    if (d[3] == colour && e[3] == "" && f[3] == colour && g[3] == colour) { wE[3] = (wE[3] == other || wE[3] == "x") ? "x" : colour; }
    if (d[4] == colour && e[4] == "" && f[4] == colour && g[4] == colour) { wE[4] = (wE[4] == other || wE[4] == "x") ? "x" : colour; }
    if (d[5] == colour && e[5] == "" && f[5] == colour && g[5] == colour) { wE[5] = (wE[5] == other || wE[5] == "x") ? "x" : colour; }
    if (d[6] == colour && e[6] == "" && f[6] == colour && g[6] == colour) { wE[6] = (wE[6] == other || wE[6] == "x") ? "x" : colour; }

    //stright accross - win in second to right
    if (a[1] == colour && b[1] == colour && c[1] == "" && d[1] == colour) { wC[1] = (wC[1] == other || wC[1] == "x") ? "x" : colour; }
    if (a[2] == colour && b[2] == colour && c[2] == "" && d[2] == colour) { wC[2] = (wC[2] == other || wC[2] == "x") ? "x" : colour; }
    if (a[3] == colour && b[3] == colour && c[3] == "" && d[3] == colour) { wC[3] = (wC[3] == other || wC[3] == "x") ? "x" : colour; }
    if (a[4] == colour && b[4] == colour && c[4] == "" && d[4] == colour) { wC[4] = (wC[4] == other || wC[4] == "x") ? "x" : colour; }
    if (a[5] == colour && b[5] == colour && c[5] == "" && d[5] == colour) { wC[5] = (wC[5] == other || wC[5] == "x") ? "x" : colour; }
    if (a[6] == colour && b[6] == colour && c[6] == "" && d[6] == colour) { wC[6] = (wC[6] == other || wC[6] == "x") ? "x" : colour; }

    if (b[1] == colour && c[1] == colour && d[1] == "" && e[1] == colour) { wD[1] = (wD[1] == other || wD[1] == "x") ? "x" : colour; }
    if (b[2] == colour && c[2] == colour && d[2] == "" && e[2] == colour) { wD[2] = (wD[2] == other || wD[2] == "x") ? "x" : colour; }
    if (b[3] == colour && c[3] == colour && d[3] == "" && e[3] == colour) { wD[3] = (wD[3] == other || wD[3] == "x") ? "x" : colour; }
    if (b[4] == colour && c[4] == colour && d[4] == "" && e[4] == colour) { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }
    if (b[5] == colour && c[5] == colour && d[5] == "" && e[5] == colour) { wD[5] = (wD[5] == other || wD[5] == "x") ? "x" : colour; }
    if (b[6] == colour && c[6] == colour && d[6] == "" && e[6] == colour) { wD[6] = (wD[6] == other || wD[6] == "x") ? "x" : colour; }

    if (c[1] == colour && d[1] == colour && e[1] == "" && f[1] == colour) { wE[1] = (wE[1] == other || wE[1] == "x") ? "x" : colour; }
    if (c[2] == colour && d[2] == colour && e[2] == "" && f[2] == colour) { wE[2] = (wE[2] == other || wE[2] == "x") ? "x" : colour; }
    if (c[3] == colour && d[3] == colour && e[3] == "" && f[3] == colour) { wE[3] = (wE[3] == other || wE[3] == "x") ? "x" : colour; }
    if (c[4] == colour && d[4] == colour && e[4] == "" && f[4] == colour) { wE[4] = (wE[4] == other || wE[4] == "x") ? "x" : colour; }
    if (c[5] == colour && d[5] == colour && e[5] == "" && f[5] == colour) { wE[5] = (wE[5] == other || wE[5] == "x") ? "x" : colour; }
    if (c[6] == colour && d[6] == colour && e[6] == "" && f[6] == colour) { wE[6] = (wE[6] == other || wE[6] == "x") ? "x" : colour; }

    if (d[1] == colour && e[1] == colour && f[1] == "" && g[1] == colour) { wF[1] = (wF[1] == other || wF[1] == "x") ? "x" : colour; }
    if (d[2] == colour && e[2] == colour && f[2] == "" && g[2] == colour) { wF[2] = (wF[2] == other || wF[2] == "x") ? "x" : colour; }
    if (d[3] == colour && e[3] == colour && f[3] == "" && g[3] == colour) { wF[3] = (wF[3] == other || wF[3] == "x") ? "x" : colour; }
    if (d[4] == colour && e[4] == colour && f[4] == "" && g[4] == colour) { wF[4] = (wF[4] == other || wF[4] == "x") ? "x" : colour; }
    if (d[5] == colour && e[5] == colour && f[5] == "" && g[5] == colour) { wF[5] = (wF[5] == other || wF[5] == "x") ? "x" : colour; }
    if (d[6] == colour && e[6] == colour && f[6] == "" && g[6] == colour) { wF[6] = (wF[6] == other || wF[6] == "x") ? "x" : colour; }

    //stright accross - win in right
    if (a[1] == colour && b[1] == colour && c[1] == colour && d[1] == "") { wD[1] = (wD[1] == other || wD[1] == "x") ? "x" : colour; }
    if (a[2] == colour && b[2] == colour && c[2] == colour && d[2] == "") { wD[2] = (wD[2] == other || wD[2] == "x") ? "x" : colour; }
    if (a[3] == colour && b[3] == colour && c[3] == colour && d[3] == "") { wD[3] = (wD[3] == other || wD[3] == "x") ? "x" : colour; }
    if (a[4] == colour && b[4] == colour && c[4] == colour && d[4] == "") { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }
    if (a[5] == colour && b[5] == colour && c[5] == colour && d[5] == "") { wD[5] = (wD[5] == other || wD[5] == "x") ? "x" : colour; }
    if (a[6] == colour && b[6] == colour && c[6] == colour && d[6] == "") { wD[6] = (wD[6] == other || wD[6] == "x") ? "x" : colour; }

    if (b[1] == colour && c[1] == colour && d[1] == colour && e[1] == "") { wE[1] = (wE[1] == other || wE[1] == "x") ? "x" : colour; }
    if (b[2] == colour && c[2] == colour && d[2] == colour && e[2] == "") { wE[2] = (wE[2] == other || wE[2] == "x") ? "x" : colour; }
    if (b[3] == colour && c[3] == colour && d[3] == colour && e[3] == "") { wE[3] = (wE[3] == other || wE[3] == "x") ? "x" : colour; }
    if (b[4] == colour && c[4] == colour && d[4] == colour && e[4] == "") { wE[4] = (wE[4] == other || wE[4] == "x") ? "x" : colour; }
    if (b[5] == colour && c[5] == colour && d[5] == colour && e[5] == "") { wE[5] = (wE[5] == other || wE[5] == "x") ? "x" : colour; }
    if (b[6] == colour && c[6] == colour && d[6] == colour && e[6] == "") { wE[6] = (wE[6] == other || wE[6] == "x") ? "x" : colour; }

    if (c[1] == colour && d[1] == colour && e[1] == colour && f[1] == "") { wF[1] = (wF[1] == other || wF[1] == "x") ? "x" : colour; }
    if (c[2] == colour && d[2] == colour && e[2] == colour && f[2] == "") { wF[2] = (wF[2] == other || wF[2] == "x") ? "x" : colour; }
    if (c[3] == colour && d[3] == colour && e[3] == colour && f[3] == "") { wF[3] = (wF[3] == other || wF[3] == "x") ? "x" : colour; }
    if (c[4] == colour && d[4] == colour && e[4] == colour && f[4] == "") { wF[4] = (wF[4] == other || wF[4] == "x") ? "x" : colour; }
    if (c[5] == colour && d[5] == colour && e[5] == colour && f[5] == "") { wF[5] = (wF[5] == other || wF[5] == "x") ? "x" : colour; }
    if (c[6] == colour && d[6] == colour && e[6] == colour && f[6] == "") { wF[6] = (wF[6] == other || wF[6] == "x") ? "x" : colour; }

    if (d[1] == colour && e[1] == colour && f[1] == colour && g[1] == "") { wG[1] = (wG[1] == other || wG[1] == "x") ? "x" : colour; }
    if (d[2] == colour && e[2] == colour && f[2] == colour && g[2] == "") { wG[2] = (wG[2] == other || wG[2] == "x") ? "x" : colour; }
    if (d[3] == colour && e[3] == colour && f[3] == colour && g[3] == "") { wG[3] = (wG[3] == other || wG[3] == "x") ? "x" : colour; }
    if (d[4] == colour && e[4] == colour && f[4] == colour && g[4] == "") { wG[4] = (wG[4] == other || wG[4] == "x") ? "x" : colour; }
    if (d[5] == colour && e[5] == colour && f[5] == colour && g[5] == "") { wG[5] = (wG[5] == other || wG[5] == "x") ? "x" : colour; }
    if (d[6] == colour && e[6] == colour && f[6] == colour && g[6] == "") { wG[6] = (wG[6] == other || wG[6] == "x") ? "x" : colour; }


    //straight up and down - win at top
    if (a[6] == "" && a[5] == colour && a[4] == colour && a[3] == colour) { wA[6] = (wA[6] == other || wA[6] == "x") ? "x" : colour; }
    if (a[5] == "" && a[4] == colour && a[3] == colour && a[2] == colour) { wA[5] = (wA[5] == other || wA[5] == "x") ? "x" : colour; }
    if (a[4] == "" && a[3] == colour && a[2] == colour && a[1] == colour) { wA[4] = (wA[4] == other || wA[4] == "x") ? "x" : colour; }

    if (b[6] == "" && b[5] == colour && b[4] == colour && b[3] == colour) { wB[6] = (wB[6] == other || wB[6] == "x") ? "x" : colour; }
    if (b[5] == "" && b[4] == colour && b[3] == colour && b[2] == colour) { wB[5] = (wB[5] == other || wB[5] == "x") ? "x" : colour; }
    if (b[4] == "" && b[3] == colour && b[2] == colour && b[1] == colour) { wB[4] = (wB[4] == other || wB[4] == "x") ? "x" : colour; }

    if (c[6] == "" && c[5] == colour && c[4] == colour && c[3] == colour) { wC[6] = (wC[6] == other || wC[6] == "x") ? "x" : colour; }
    if (c[5] == "" && c[4] == colour && c[3] == colour && c[2] == colour) { wC[5] = (wC[5] == other || wC[5] == "x") ? "x" : colour; }
    if (c[4] == "" && c[3] == colour && c[2] == colour && c[1] == colour) { wC[4] = (wC[4] == other || wC[4] == "x") ? "x" : colour; }

    if (d[6] == "" && d[5] == colour && d[4] == colour && d[3] == colour) { wD[6] = (wD[6] == other || wD[6] == "x") ? "x" : colour; }
    if (d[5] == "" && d[4] == colour && d[3] == colour && d[2] == colour) { wD[5] = (wD[5] == other || wD[5] == "x") ? "x" : colour; }
    if (d[4] == "" && d[3] == colour && d[2] == colour && d[1] == colour) { wD[4] = (wD[4] == other || wD[4] == "x") ? "x" : colour; }

    if (e[6] == "" && e[5] == colour && e[4] == colour && e[3] == colour) { wE[6] = (wE[6] == other || wE[6] == "x") ? "x" : colour; }
    if (e[5] == "" && e[4] == colour && e[3] == colour && e[2] == colour) { wE[5] = (wE[5] == other || wE[5] == "x") ? "x" : colour; }
    if (e[4] == "" && e[3] == colour && e[2] == colour && e[1] == colour) { wE[4] = (wE[4] == other || wE[4] == "x") ? "x" : colour; }

    if (f[6] == "" && f[5] == colour && f[4] == colour && f[3] == colour) { wF[6] = (wF[6] == other || wF[6] == "x") ? "x" : colour; }
    if (f[5] == "" && f[4] == colour && f[3] == colour && f[2] == colour) { wF[5] = (wF[5] == other || wF[5] == "x") ? "x" : colour; }
    if (f[4] == "" && f[3] == colour && f[2] == colour && f[1] == colour) { wF[4] = (wF[4] == other || wF[4] == "x") ? "x" : colour; }

    if (g[6] == "" && g[5] == colour && g[4] == colour && g[3] == colour) { wG[6] = (wG[6] == other || wG[6] == "x") ? "x" : colour; }
    if (g[5] == "" && g[4] == colour && g[3] == colour && g[2] == colour) { wG[5] = (wG[5] == other || wG[5] == "x") ? "x" : colour; }
    if (g[4] == "" && g[3] == colour && g[2] == colour && g[1] == colour) { wG[4] = (wG[4] == other || wG[4] == "x") ? "x" : colour; }
}