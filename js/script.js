var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("pic");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

$(document).ready(function(){
    // TODO: Auto adjust size of powerpoint slides
    // $("#slide_deck")
    // $("#pdr_slides").height()
    pad_height = $("body div nav").first().outerHeight()+"px" 
    console.log(pad_height)
    $("body").css(
        'padding-top',
        pad_height
    );
    
}); 