let count = 0;
async function getAdvice(){
    count++;
    const result = await fetch('https://api.adviceslip.com/advice');
    const data=await result.json();
    // console.log(data.slip.advice);
   
    document.getElementById('advice-container').textContent= data.slip.advice;
    document.getElementById('advice-count').textContent=  `You Get ${count} pieaces of advice today!`;
} 