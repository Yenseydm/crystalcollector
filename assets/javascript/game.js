
// randomly show a score when game starts
// scores are between: 19-120

// four crystals with random number each
// when crystals are clicked it adds it to your total score
// scores are between: 1-12

//match your score to random number 
//once matched then you win
// if over then you lose

// when game is over then all numbers reset and your score is back to 0
$(document).ready(() => { 

    var randomScore = Math.floor((Math.random() * 120) + 19);
    $('#randomScore').text(randomScore);

    //gem value
    var gem1 = Math.floor((Math.random() * 12) + 1);;
    var gem2 = Math.floor((Math.random() * 12) + 1);;
    var gem3 = Math.floor((Math.random() * 12) + 1);;
    var gem4 = Math.floor((Math.random() * 12) + 1);;
    
    var wins = 0;
    var losses = 0 ;
    
    var yourScore = 0;
    $('#finalScore').text(yourScore);
   

    $('#gem1').click(() => {
        yourScore = yourScore + gem1
        $('#finalScore').text(yourScore);
        if (yourScore === randomScore) {
            wins++;
            $('#wins').text("Wins: " + wins);
            reset();
            resetGame();
        } else if (yourScore > randomScore) {
            losses++;
            $('#losses').text("Losses: " + losses);
            reset();
            resetGame();
        }
    });

    $('#gem2').click(() => {
        yourScore = yourScore + gem2
        $('#finalScore').text(yourScore);
        if (yourScore === randomScore) {
            wins++;
            $('#wins').text("Wins: " + wins);
            reset();
            resetGame();
        } else if (yourScore > randomScore) {
            losses++;
            $('#losses').text("Losses: " + losses);
            reset();
            resetGame();
        }
    });

    $('#gem3').click(() => {
        yourScore = yourScore + gem3
        $('#finalScore').text(yourScore);
        if (yourScore === randomScore) {
            wins++
            $('#wins').text("Wins: " + wins);
            reset();
            resetGame();
        } else if (yourScore > randomScore) {
            losses++;
            $('#losses').text("Losses: " + losses);
            reset();
            resetGame();
        }
    });

    $('#gem4').click(() => {
        yourScore = yourScore + gem4
        $('#finalScore').text(yourScore);
        if (yourScore === randomScore) {
            wins++
            $('#wins').text("Wins: " + wins);
            reset();
            resetGame();
        } else if (yourScore > randomScore) {
            losses++
            $('#losses').text("Losses: " + losses);
            reset();
            resetGame();
        }
    });

    function reset() {
        yourScore = 0;
        $('#finalScore').text(yourScore);
    }

    function resetGame() {
        randomScore = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
        $('#randomScore').html(randomScore);
        gem1 = Math.floor(Math.random() * 12) + 1;
        gem2 = Math.floor(Math.random() * 12) + 1;
        gem3 = Math.floor(Math.random() * 12) + 1;
        gem4 = Math.floor(Math.random() * 12) + 1;
    }


});





