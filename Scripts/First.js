body = document.querySelector("body")
title = document.querySelector("#title");

document.querySelector("#Turquoise").onclick = function() {
    body.style.backgroundColor = "Turquoise"
    title.style.color = "MidnightBlue"
}

document.querySelector("#Gray").onclick = function() {
    body.style.backgroundColor = "Gray"
    title.style.color = "White"

}

document.querySelector("#White").onclick = function() {
    body.style.backgroundColor = "White"
    title.style.color = "DimGrey"
}

document.querySelector("#DeepSkyBlue").onclick = function() {
    body.style.backgroundColor = "DeepSkyBlue"
    title.style.color = "LightCyan"
}

function blink()
{
    let Wow = document.querySelector("#wow");
    if (Wow.style.visibility === "hidden")
    {
        Wow.style.visibility = "visible";
    }
    else
    {
        Wow.style.visibility = "hidden";
    }
}

window.setInterval(blink, 300);

function ReadMore(idDots, idMore, idRead) {
    var dots = document.getElementById(idDots);
    var moreText = document.getElementById(idMore);
    var btnText = document.getElementById(idRead);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more >>";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less <<";
        moreText.style.display = "inline";
    }
}