var goal = total = wins = losses = 0;
var statDiv, infoDiv;

$(document).ready(function(){
    generateHTML();
    generateRandomness();
    updateHTML();
});

function generateHTML(){

    //This for loop will create images and append them to the div with id gems-view
    //Each image is given a class (for css and other purposes)
    //Each image is given an on click event to add to the total points
    for(var i = 0; i < 4; i++){
        var crystalImage = $("<img src='assets/images/Gem"+(i+1)+".png'>");
        crystalImage.attr("class", "gems");
        crystalImage.attr("data-value", 0);
        crystalImage.click(function(){
            total += parseInt($(this).attr("data-value"));
            updateHTML();
            checkConditions();
        });
        $("#gems-view").append(crystalImage);
    }
}

function generateRandomness(){
    //Generates a new goal to reach
    goal = randomNum(19,120);
    //Gives each gem a new random value
    $(".gems").each(function(){
        $(this).attr("data-value", randomNum(1,12));
    })
    //resets current total
    total = 0;
    //update the HTML to reflect changes
    updateHTML();
}

function updateHTML(){
    //Update Wins/Losses
    var stats = $(".card-text");
    $(stats[1]).html("Wins: " + wins + "<br>Losses: " +
    losses);
    //Update Current Score:
    $("#goal").text(goal);
    $("#total").text(total);

}

function randomNum(low,high){
    //Generates a random number and rounds down with low and high as floor and ceiling.
    var number = Math.floor(Math.random() * (high - low) ) + low;
    return number
}

function checkConditions(){
    //If current total exceeds goal, you lose. Generate new goal
    if(total > goal){
        losses++;
        generateRandomness();
    }
    //If current total equals goal, you win. Generate new goal
    else if(total === goal){
        wins++;
        generateRandomness();
    }
}