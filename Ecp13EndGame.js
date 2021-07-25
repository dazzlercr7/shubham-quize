const chalk = require('chalk');
var readlineSync = require('readline-sync');

var score = 0;

// array of quiz question and answer

var questions = [
    { question: "Where do Shubham Live? ", answer: "dahisar", },
    { question: "Am I older than 25, What do you think? ", answer: "NO", },
    { question: "Do I love Cricket or Football? ", answer: "Football", },
    { question: "Most popular and mine Favourite Football Player? ", answer: 'Cristiano Ronaldo', },
    { question: "Which Company do I work in? ", answer: "atos-syntel", },
    { question: "Do I love to travel? ", answer: "yes", },
    { question: "how many trip I have made? ", answer: '1', },
    { question: "Do you know my School Name? ", answer: 'shailendra', },
    { question: "Do I prefer Anime or Web series? ", answer: 'Anime', },
    {
        question: "If you watch Anime, could you guess mine favourite one? ",
        answer: 'Haikyuu',
    },
    { question: "Last Try guess wid best shot! Do I really exist or am I a bot? ", answer: 'exist', },
]

//High Score Array
var highscore = [
    { name: "shubham", nscore: 10, },
    { name: "Sanket", nscore: 8, },
    { name: "Aditya", nscore: 6, },
]

var userName = readlineSync.question("What's your Name? ");
console.log();
console.log(chalk.green.bgCyan("Welcome " + userName + " TO DO YOU SHUBHAM?? "));
console.log("********************************************");


// function to check ans

function play(newquestion, newanswer) {
    userAnswer = readlineSync.question(chalk.rgb(135, 206, 250)(newquestion));


    if (userAnswer.toUpperCase() === newanswer.toUpperCase()) {
        console.log(chalk.rgb(255, 255, 1)("You are right! " + userName));
        score++;

    } else {
        console.log(chalk.bgRed("You are Wrong " + userName));
        console.log(chalk.rgb(255, 136, 0).bold(newanswer));
        score--;

    }
    console.log("Your current score is: " + chalk.rgb(173, 255, 47).bold(score));
    console.log("------------------------------------------------");

}

//Loop to access question array

for (var i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer); //calling check ans function
}

//conditions to check if score is positive or not
if (score < 0) {
    console.log(chalk.rgb(244, 164, 96)("Sorry Better try to Understand me Final   Score is: " + score));
} else {
    console.log(chalk.rgb(127, 255, 212)("YAY!!! You Gave a good try, Final score: " + score));
}


//Loop to access highscore array

for (i = 0; i < highscore.length; i++) {
    scoreboard(highscore[i].name, highscore[i].nscore); //calling scoreboard function
}

//Loop to check whom user has beaten

function scoreboard(maxname, maxscore) {
    if (score > maxscore) {
        console.log(chalk.red.bold("You have beaten top Scorer: " + maxname + ": " + maxscore));

    }
}

//Printing Top Scorer list

console.log("_______________________________________________________________");
console.log("Check Out Highest Scores of All Users:");
for (i = 0; i < highscore.length; i++) {
    console.log(chalk.green.bold(highscore[i].name + ": " + highscore[i].nscore));
}




// console.log("Your are one of the new top scorer: " +userName);