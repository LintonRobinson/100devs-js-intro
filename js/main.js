// Add all sorting house event listeners
const gryffindor = document.querySelectorAll('.gryffindorCount');
const hufflepuff = document.querySelectorAll('.hufflepuffCount');
const ravenclaw = document.querySelectorAll('.ravenclawCount');
const slytherin = document.querySelectorAll('.slytherinCount');
for (i=0; i < 10; i++) {
    gryffindor[i].addEventListener('click' , gryffindorCounter);
    hufflepuff[i].addEventListener('click' , hufflepuffCounter);
    ravenclaw[i].addEventListener('click' , ravenclawCounter);
    slytherin[i].addEventListener('click' , slytherinCounter);
    


}

// User clicks on Start Quiz button and that hides the first question and reveals the second question. 
const startQuiz = document.getElementById('startQuizOption');
startQuiz.addEventListener('click' , hideStartQuiz);
startQuiz.addEventListener('click' , function() { setTimeout(showStepOne , 700) });


function hideStartQuiz() {
    document.getElementById('startQuiz').classList.toggle('hiddenStep');
    console.log("Hide Start Quiz")
}

function showStepOne() {
    document.getElementById('questionOne').classList.toggle('visableStep');
    document.getElementById('questionOne').classList.toggle('hiddenStep');
    
    console.log("Show Step 1")
}

// User clicks on question one button and that hides the first question and reveals the second question. 

const questionOne = document.querySelectorAll('.questionOneOption');
for (i=0; i < 4; i++) {
    questionOne[i].addEventListener('click' , hideStepOne);
    questionOne[i].addEventListener('click' , function() { setTimeout(showStepTwo , 700) });


}

function hideStepOne() {
    document.getElementById('questionOne').classList.toggle('visableStep');
    document.getElementById('questionOne').classList.toggle('hiddenStep');

    
}

function showStepTwo() {
    document.getElementById('questionTwo').classList.toggle('visableStep');
    document.getElementById('questionTwo').classList.toggle('hiddenStep');

    
}


// User clicks on question two button and that hides the second question and reveals the third question.

const questionTwo = document.querySelectorAll('.questionTwoOption');
for (i=0; i < 4; i++) {
    questionTwo[i].addEventListener('click' , hideStepTwo);
    questionTwo[i].addEventListener('click' , function() { setTimeout(showStepThree , 700) });


}

function hideStepTwo() {
    document.getElementById('questionTwo').classList.toggle('visableStep');
    document.getElementById('questionTwo').classList.toggle('hiddenStep');

    
}

function showStepThree() {
    document.getElementById('questionThree').classList.toggle('visableStep');
    document.getElementById('questionThree').classList.toggle('hiddenStep');

    
}



// User clicks on question three button and that hides the third question and reveals the fourth question.

const questionThree = document.querySelectorAll('.questionThreeOption');
for (i=0; i < 4; i++) {
    questionThree[i].addEventListener('click' , hideStepThree);
    questionThree[i].addEventListener('click' , function() { setTimeout(showStepFour , 700) });


}

function hideStepThree() {
    document.getElementById('questionThree').classList.toggle('visableStep');
    document.getElementById('questionThree').classList.toggle('hiddenStep');

    
}

function showStepFour() {
    document.getElementById('questionFour').classList.toggle('visableStep');
    document.getElementById('questionFour').classList.toggle('hiddenStep');

    
}







// User clicks on question four button and that hides the fourth question and reveals the fifth question.

const questionFour = document.querySelectorAll('.questionFourOption');
for (i=0; i < 4; i++) {
    questionFour[i].addEventListener('click' , hideStepFour);
    questionFour[i].addEventListener('click' , function() { setTimeout(showStepFive , 700) });


}

function hideStepFour() {
    document.getElementById('questionFour').classList.toggle('visableStep');
    document.getElementById('questionFour').classList.toggle('hiddenStep');

    
}

function showStepFive() {
    document.getElementById('questionFive').classList.toggle('visableStep');
    document.getElementById('questionFive').classList.toggle('hiddenStep');

    
}


// User clicks on question five button and that hides the fifth question and reveals the sixth question.


const questionFive = document.querySelectorAll('.questionFiveOption');
for (i=0; i < 4; i++) {
    questionFive[i].addEventListener('click' , hideStepFive);
    questionFive[i].addEventListener('click' , function() { setTimeout(showStepSix , 700) });


}

function hideStepFive() {
    document.getElementById('questionFive').classList.toggle('visableStep');
    document.getElementById('questionFive').classList.toggle('hiddenStep');

    
}

function showStepSix() {
    document.getElementById('questionSix').classList.toggle('visableStep');
    document.getElementById('questionSix').classList.toggle('hiddenStep');

    
}



// User clicks on question six button and that hides the sixth question and reveals the seventh question.

const questionSix = document.querySelectorAll('.questionSixOption');
for (i=0; i < 4; i++) {
    questionSix[i].addEventListener('click' , hideStepSix);
    questionSix[i].addEventListener('click' , function() { setTimeout(showStepSeven , 700) });


}

function hideStepSix() {
    document.getElementById('questionSix').classList.toggle('visableStep');
    document.getElementById('questionSix').classList.toggle('hiddenStep');

    
}

function showStepSeven() {
    document.getElementById('questionSeven').classList.toggle('visableStep');
    document.getElementById('questionSeven').classList.toggle('hiddenStep');

    
}


// User clicks on question seven button and that hides the seventh question and reveals the eighth question.

const questionSeven = document.querySelectorAll('.questionSevenOption');
for (i=0; i < 4; i++) {
    questionSeven[i].addEventListener('click' , hideStepSeven);
    questionSeven[i].addEventListener('click' , function() { setTimeout(showStepEight , 700) });


}

function hideStepSeven() {
    document.getElementById('questionSeven').classList.toggle('visableStep');
    document.getElementById('questionSeven').classList.toggle('hiddenStep');

    
}

function showStepEight() {
    document.getElementById('questionEight').classList.toggle('visableStep');
    document.getElementById('questionEight').classList.toggle('hiddenStep');

    
}


// User clicks on question eight button and that hides the eighth question and reveals the ninth question.

const questionEight = document.querySelectorAll('.questionEightOption');
for (i=0; i < 4; i++) {
    questionEight[i].addEventListener('click' , hideStepEight);
    questionEight[i].addEventListener('click' , function() { setTimeout(showStepNine , 700) });


}

function hideStepEight() {
    document.getElementById('questionEight').classList.toggle('visableStep');
    document.getElementById('questionEight').classList.toggle('hiddenStep');

    
}

function showStepNine() {
    document.getElementById('questionNine').classList.toggle('visableStep');
    document.getElementById('questionNine').classList.toggle('hiddenStep');

    
}



// User clicks on question nine button and that hides the ninth question and reveals the tenth question.

const questionNine = document.querySelectorAll('.questionNineOption');
for (i=0; i < 4; i++) {
    questionNine[i].addEventListener('click' , hideStepNine);
    questionNine[i].addEventListener('click' , function() { setTimeout(showStepTen , 700) });
}

function hideStepNine() {
    document.getElementById('questionNine').classList.toggle('visableStep');
    document.getElementById('questionNine').classList.toggle('hiddenStep');
}

function showStepTen() {
    document.getElementById('questionTen').classList.toggle('visableStep');
    document.getElementById('questionTen').classList.toggle('hiddenStep');    
}


// Store result background elements, logos into variable

const fullscreenBackgroundElement = document.getElementById('fullscreenBackground')
const gryffindorBackgroundElement = document.getElementById('gryffindorBackground')
const gryffindorLogo = document.getElementById('gryffindorLogo')
const hufflepuffBackgroundElement = document.getElementById('hufflepuffBackground')
//const hufflepuffLogo = document.getElementById('hufflepuffLogo')
const ravenclawBackgroundElement = document.getElementById('ravenclawBackground')
//const ravenclawLogo = document.getElementById('ravenclawLogo')
const slytherinBackgroundElement = document.getElementById('slytherinBackground')
//const slytherinLogo = document.getElementById('slytherinLogo')


// User clicks on question ten button and that hides the tenth question and reveals the results


const questionTen = document.querySelectorAll('.questionTenOption');
for (i=0; i < 4; i++) {
    questionTen[i].addEventListener('click' , hideStepTen);
    questionTen[i].addEventListener('click' ,  hideFullscreenBackground);
    questionTen[i].addEventListener('click' , function() { setTimeout(showResult , 1500) });
}

function hideStepTen() {
    document.getElementById('questionTen').classList.toggle('visableStep');
    document.getElementById('questionTen').classList.toggle('hiddenStep');
}





////////////////////////////////////////////////////////////////////////////////////////////////////////



//Show House Result Functions 



function showGryffindor() {
    gryffindorBackgroundElement.classList.toggle('hiddenStep');
    gryffindorBackgroundElement.classList.toggle('visableStep');
    gryffindorLogo.classList.toggle('hiddenStep');
    gryffindorLogo.classList.toggle('visableStep');
    document.getElementById('gryffindorText').classList.toggle('hiddenStep')
    document.getElementById('gryffindorText').classList.toggle('visableStep')

}

function showHufflepuff() {
    hufflepuffBackgroundElement.classList.toggle('hiddenStep');
    hufflepuffBackgroundElement.classList.toggle('visableStep');
    hufflepuffLogo.classList.toggle('hiddenStep');
    hufflepuffLogo.classList.toggle('visableStep');
    document.getElementById('hufflepuffText').classList.toggle('hiddenStep')
    document.getElementById('hufflepuffText').classList.toggle('visableStep')

}

function showRavenclaw() {
    ravenclawBackgroundElement.classList.toggle('hiddenStep');
    ravenclawBackgroundElement.classList.toggle('visableStep');
    ravenclawLogo.classList.toggle('hiddenStep');
    ravenclawLogo.classList.toggle('visableStep');
    document.getElementById('ravenclawText').classList.toggle('hiddenStep')
    document.getElementById('ravenclawText').classList.toggle('visableStep')

}

function showSlytherin() {
    slytherinBackgroundElement.classList.toggle('hiddenStep');
    slytherinBackgroundElement.classList.toggle('visableStep');
    slytherinLogo.classList.toggle('hiddenStep');
    slytherinLogo.classList.toggle('visableStep');
    document.getElementById('slytherinText').classList.toggle('hiddenStep')
    document.getElementById('slytherinText').classList.toggle('visableStep')

}

function hideFullscreenBackground() {
    fullscreenBackgroundElement.classList.toggle('hiddenStep');
    document.getElementById('defaultText').classList.toggle('hiddenStep')
      
}



// House Counter + Variable Declaration 

let gryffindorCount = 0
let hufflepuffCount = 0
let ravenclawCount = 0
let slytherinCount = 0


function gryffindorCounter() {
    gryffindorCount = gryffindorCount + 1; 
    console.log(gryffindorCount)
}

function hufflepuffCounter() {
    hufflepuffCount = hufflepuffCount + 1; 
    console.log(hufflepuffCount)
}

function ravenclawCounter() {
    ravenclawCount = ravenclawCount + 1; 
    console.log(ravenclawCount)
}

function slytherinCounter() {
    slytherinCount = slytherinCount + 1; 
    console.log(slytherinCount)
}





// Calculate House Results

function showResult() {
    if (gryffindorCount > hufflepuffCount && gryffindorCount > ravenclawCount && gryffindorCount > slytherinCount) {
        showGryffindor();
        console.log(`Gryffindor Result: ${gryffindorCount}`)
        console.log(`Hufflepuff Result: ${hufflepuffCount}`) 
        console.log(`Ravenclaw Result: ${ravenclawCount}`)
        console.log(`Slytherin Result: ${slytherinCount}`)
        document.getElementById('portfolioBtn').innerText ='View My Portfolio'
    }

    if (hufflepuffCount > gryffindorCount && hufflepuffCount > ravenclawCount && hufflepuffCount > slytherinCount) {
        showHufflepuff();
        console.log(`Gryffindor Result: ${gryffindorCount}`)
        console.log(`Hufflepuff Result: ${hufflepuffCount}`) 
        console.log(`Ravenclaw Result: ${ravenclawCount}`)
        console.log(`Slytherin Result: ${slytherinCount}`)
    }

    if (ravenclawCount > gryffindorCount && ravenclawCount > hufflepuffCount && ravenclawCount > slytherinCount) {
        showRavenclaw();
        console.log(`Gryffindor Result: ${gryffindorCount}`)
        console.log(`Hufflepuff Result: ${hufflepuffCount}`) 
        console.log(`Ravenclaw Result: ${ravenclawCount}`)
        console.log(`Slytherin Result: ${slytherinCount}`)
    }

    if (slytherinCount > gryffindorCount && slytherinCount > hufflepuffCount && slytherinCount > ravenclawCount) {
        showSlytherin();
        console.log(`Gryffindor Result: ${gryffindorCount}`)
        console.log(`Hufflepuff Result: ${hufflepuffCount}`) 
        console.log(`Ravenclaw Result: ${ravenclawCount}`)
        console.log(`Slytherin Result: ${slytherinCount}`)
    }





}