const Btn1 = document.querySelector("#applause")
const Btn2 = document.querySelector("#boo")
const Btn3 = document.querySelector("#gasp")
const Btn4 = document.querySelector("#tada")
const Btn5 = document.querySelector("#victory")
const Btn6 = document.querySelector("#wrong")


const audio1 = document.querySelector("#applause-audio")
const audio2 = document.querySelector("#boo-audio")
const audio3 = document.querySelector("#gasp-audio")
const audio4 = document.querySelector("#tada-audio")
const audio5 = document.querySelector("#victory-audio")
const audio6 = document.querySelector("#wrong-audio")


Btn1.addEventListener(
    'click',
    function(){
        stopAudio();
        audio1.play();
    }
)

Btn2.addEventListener(
    'click',
    function(){
        stopAudio();
        audio2.play();
    }
)

Btn3.addEventListener(
    'click',
    function(){
        stopAudio();
        audio3.play();
    }
)

Btn4.addEventListener(
    'click',
    function(){
        stopAudio();
        audio4.play();
    }
)

Btn5.addEventListener(
    'click',
    function(){
        stopAudio();
        audio5.play();
    }
)

Btn6.addEventListener(
    'click',
    function(){
        stopAudio();
        audio6.play();
    }
)

function stopAudio(){
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio6.pause();
    audio6.currentTime = 0;
}