'use strict';

// Decided to place everything in an object so that the code is easier to read.
const NEWSTORAGE = [];

STORAGE.forEach((arrayItem)=>{
    let obj = {};
    obj.quest = arrayItem[0];
    obj.ans = arrayItem[1];
    obj.correct = arrayItem[2];
    obj.feedback = arrayItem[3];
    obj.imgSrc = arrayItem[4];
    obj.imgAlt = arrayItem[5];
    NEWSTORAGE.push(obj);
})

let SCORE = 0;
let QUESTION = 0;
let RAND = [];

function randomGenerator(){
    while(RAND.length<10){
        let num = Math.floor((Math.random()*10))
        if(RAND.includes(num) ==false){
            RAND.push(num)
        }
    }
    report(`Question Order: ${RAND.toString()}`);
}
//  ^^ GLOBAL STUFF ^^

function resetActions(){
    report('resetActions ran');
    SCORE=0;
    QUESTION=0;
    RAND = [];
    updateScore();
    updateQuestion();
    clearAnswers();
    randomGenerator();
}

function resetQuizClick(){
    $('#js-resetQuiz').on('click',()=>{
        report('resetQuizClick ran');
        $('.js-reset').addClass('hidden');
        $('#js-mainPage').removeClass('hidden');
        resetActions();
    })
}

function retakeQuizClick(){
    $('#js-retakeQuiz').on('click', () =>{   
        report('retakeQuizClick ran');
        resetActions();
        toggleResult();
        toggleQuestionPage();
    })
}

function renderResult(str1,str2,str3,str4){
    //goodscore msg img
    report('renderResult ran')
    $('#js-resultMsg1').text(str1);
    $('#js-resultMsg2').text(str2);
    $('#js-resultImg').attr('src',str3).prop('alt',str4);
}

function resultSwitch(){
    report('resultSwitch ran');
    const good = RESULTS.goodResult;
    const bad = RESULTS.badResult;
    (SCORE >= 7) ? renderResult(good.msg1,good.msg2,good.src,good.alt)
        :renderResult(bad.msg1,bad.msg2,bad.src,bad.alt);
}

function finalScore(){
    $(`#js-finalScore`).text(SCORE);
    $('#js-scorePercent').text(` ${SCORE*10}%.`);
    report('finalScore ran');
}

function clearAnswers(){
    $(`input[name=js-answer]`).prop('checked',false);
    report('clearAnswers ran');
}

function toggleResult(){
    $('.js-result').toggleClass('hidden');
    report('toggleResult ran');
}

function addToQuestionCount(){
    QUESTION++;
    report('addToQuestionCount ran');
}

function nextQuestionClick(){
    $('#js-nextQuestion').on('click', () =>{
        report('nextQuestionClick ran');
        addToQuestionCount();
        updateScore();
        updateQuestion();
        clearAnswers();
        toggleFeedback();
        (QUESTION<NEWSTORAGE.length) ? (
            renderQuestionAnswers(),
            toggleQuestionPage()
        ):(
            finalScore(),
            resultSwitch(),
            toggleResult()
        )
    })
}

function addToScore(){
    SCORE++;
    report('addToScore ran')
}

function toggleFeedback(){
    $('#js-feedback').toggleClass('hidden');
    report('toggleFeedback ran')
}

function wrongFeedbackImg(){
    $('#feedbackImage').attr('src','https://i.imgur.com/RqoDdGj.png')
        .prop('alt','Picture of Jules Winnfield with an extremely upset face from the movie "Pulp Fiction"');
    report('wrongFeedbackImg ran');
}

function wrongFeedbackText(){
    $(`#js-feedbackHead`).text(`Say What?!`);
    $(`#js-feedbackResult`).text(`Incorrect! `);
    report('wrongFeedbackText ran');
}

function wrongFeedback(){
    wrongFeedbackImg();
    wrongFeedbackText();
}

function correctFeedbackImg(){
    $('#feedbackImage').attr('src',NEWSTORAGE[RAND[QUESTION]].imgSrc)
        .prop('alt',NEWSTORAGE[RAND[QUESTION]].imgAlt);
    report(`correctFeedbackImg ran`);
}

function correctFeedbackText(){
    $(`#js-feedbackHead`).text(`That's a BINGO!`)
    $(`#js-feedbackResult`).text(`Correct! `);
    report(`correctFeedbackText ran`);
}

function correctFeedback(){
    correctFeedbackText();
    correctFeedbackImg();
}

function feedbackText (){
    $('#js-feedbackText').text(NEWSTORAGE[RAND[QUESTION]].feedback);
    report('feedbackText ran')
}

function isAnswerCorrect(answerValue){
    report('isAnswerCorrect ran');
    (answerValue == NEWSTORAGE[RAND[QUESTION]].correct) ? (
        report('"yes"'), addToScore(), correctFeedback()
        ):(
        report(`"no, should be '${NEWSTORAGE[RAND[QUESTION]].correct}'`), wrongFeedback()
        );
}

function submitAnswerClick(){
    $('#js-form').on('submit', function(event){
        event.preventDefault();
        const answer= $(this).find(`input[name=js-answer]:checked`).val();
        report('submitAnswerClick ran');
        report(`"${answer}"`);
        isAnswerCorrect(answer);
        feedbackText();
        toggleQuestionPage();
        toggleFeedback();
    })
}

function renderQuestionAnswers(){
    //set label values and text for answer choices,set question text
    let objX = NEWSTORAGE[RAND[QUESTION]];
    for(let i=0;i<objX.ans.length;i++){
        $(`label[for=answer${i+1}]`).text(objX.ans[i]);
        $(`#answer${i+1}`).attr('value',objX.ans[i]);
    }
    $(`#js-question`).text(objX.quest);
    report('renderQuestionAnswers ran');
}

function toggleQuestionPage(){
    $('#js-questionPage').toggleClass("hidden");
    report(`toggleQuestionPage ran`);
};

function toggleMainPage(){
    $('#js-mainPage').toggleClass("hidden");
    report('toggleMainPage ran');
};

function updateScore(){
    $('#js-score').text(SCORE);
    report('updateScore ran');
    report(SCORE);
}

function updateQuestion(){
    $('#js-questionNum').text(QUESTION+1);
    report('updateQuestion ran');
    report(QUESTION+1);
}

function startButtonClick(){
//  Quiz Starts Here
    $('#js-startButton').on('click', function(){
        report(`startButtonClick ran`);
        renderQuestionAnswers();
        updateQuestion();
        updateScore();
        toggleMainPage();
        toggleQuestionPage();
    });
};

function report(statement){
    console.log(statement);
}

function runQuiz(){
    report(`runQuiz has ran`)
    randomGenerator();
    startButtonClick();
    submitAnswerClick();
    nextQuestionClick();
    retakeQuizClick()
    resetQuizClick();
}

$(runQuiz);