const words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "event in which people come together"
    },
    {
        word: "exchange",
        hint: "the act of trading"
    },
    {
        word: "number",
        hint: "math symbol used for counting"
    },
    {
        word: "canvas",
        hint: "piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "space for planting flower and plant"
    },
    {
        word: "library",
        hint: "place containing collection of books"
    },
    {
        word: "second",
        hint: "one-sixtieth of a minute"
    },
    {
        word: "statement",
        hint: "a declaration of something"
    },
    {
        word: "expert",
        hint: "person with extensive knowledge"
    },
    {
        word: "needle",
        hint: "a thin and sherp metal pin"
    },
    {
        word: "pocket",
        hint: "a bag for carrying small items"
    },
    {
        word: "chocolate",
        hint: "a dark brown food made form roastedd cacao seeds"
    },
    {
        word: "html",
        hint: "hypertext markup language"
    },
];
let wordtext = document.querySelector('.word');
let hintext = document.querySelector('.hint span');
let refreshWord = document.querySelector('.refresh-word');
let Check = document.querySelector('.check-word');
let input = document.querySelector('.input');
let time = document.querySelector('.time b');


let correctWord,
timer;

const iniTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return time.innerHTML = maxTime;
        }
        clearInterval(timer);
        alert(`Time Out! ${correctWord.toLocaleLowerCase()} was the a correct word`);
        initGame();
    }, 1000);
    
}

const  initGame = () => {
    iniTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let  wordArray = randomObj.word.split(""); 
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
    }
    wordtext.innerText = wordArray.join("");
    hintext.innerText = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    input.value = "";
    input.setAttribute("maxlength", correctWord.length);
}
initGame();

const CheckWord = () => {
    let userword = input.value.toLocaleLowerCase();
    if(!userword) return alert("Please enter a word check");
    if(userword !== correctWord) return alert(`opps! ${userword} is not a correct word`);
    alert(`Congrats! ${userword.toUpperCase()} is a correct word`);
    initGame();
    
}   

refreshWord.addEventListener('click', initGame);
Check.addEventListener('click', CheckWord);























