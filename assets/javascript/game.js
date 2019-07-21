var goal = total = wins = losses = 0;

$(document).ready(function(){

});

function generateHTML(){
    for(var i = 0; i < 4; i++){
        var crystalImage = $("<img src='assets/images/Gem"+(i+1)+".png'>");
        crystalImage.attr("class", "gems");
        crystalImage.attr("data-value", 0);
        crystalImage.click(function(){
            total += $(this).attr("data-value");
        });
        $("#gems-view").append(crystalImage);
    }
}

function generateRandomness(){
    goal = randomNum(19,120);
    $(".gems").each(function(){
        $(this).attr("data-value", randomNum())
    })
    total = 0;
}

function randomNum(low,high){
    return Math.floor(Math.random*(high-low))+low;
}