"use strict";

const adviceID = document.querySelector('.id');
const text = document.querySelector('.advice-text');
const dice = document.querySelector('.advice-dice');


const getAdvice = async function(){
    try{
        const res = await fetch(`https://api.adviceslip.com/advice`);
        const data = await res.json();
        console.log(data.slip.advice);

        const advice = data.slip.advice;
        const id = data.slip.id;

        adviceID.textContent = id;
        text.textContent = `"${advice}"`;

        if(!res.ok) throw new Error(`${data.message}. Something went wrong. Try again :)`);
    }catch(err){
        console.error(err);
    }
}
const init = function(){
    getAdvice();
}
init();

dice.addEventListener('click', function(){
    getAdvice();
});