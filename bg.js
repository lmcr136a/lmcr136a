// JavaScript source code
const body = document.querySelector("body");
const IMG_NUM = 7;

    function paintImg(imgNum) {
        const image = new Image();
        image.src = '' + imgNum + '.jpg';
        image.classList.add("bgimg");
        body.prepend(image);
    }

// 00~ 08 stars
// 08~11 cloud
// 11~14 yel
// 14~16 moun
// 16~18 falls
// 18~21 purple
// 21~24 nightice

function genNum() {
    var number = 1;
    var day = new Date();
    var h = day.getHours();
        if (h < 8) { number = 1; }
        else if (h <= 11) { number = 2; }
        else if (h <= 14) { number = 3; }
        else if (h <= 16) { number = 4; }
        else if (h <= 18) { number = 5; }
        else if (h <= 21) { number = 6; }
        else { number = 7; }
    return number;
}


function init() {
    const inum = genNum();
    paintImg(inum);
}
init();