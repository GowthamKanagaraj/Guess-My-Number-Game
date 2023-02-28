const randomNumber1=Math.floor(Math.random()*100)+1;
console.log(randomNumber1);

//document.querySelector('.random-guess').innerText=randomNumber1;
document.querySelector('.random-guess').style.color='#F62217';
document.querySelector('.random-guess').style.backgroundColor='#C3C3C3';


//console.log(document.querySelector('.user-input').value=63);
let score=20;
document.querySelector('.btn-submit').addEventListener('click',function abc(){
    const userInput=Math.ceil( Number(document.querySelector('.user-input').value));



    if(userInput< 1 || userInput > 100)
    {
        document.querySelector('.error-message').style.display='block';
        document.querySelector('.error-message').innerText='Enter a valid input';
    }
    else
    {
      if(score>0)
      {
            if(userInput===randomNumber1)
            {
              document.querySelector('.error-message').style.display='block';
              document.querySelector('.error-message').style.color='green';
              document.querySelector('.error-message').innerText='you won & your score is '+score;
            }
            else
            {
                if(userInput > randomNumber1)
                {
                  document.querySelector('.error-message').style.display='block';
                  document.querySelector('.error-message').style.color='red';
                  document.querySelector('.error-message').innerText='your guess is higher';
                  score=score-1;
                  document.querySelector('.score').innerText=score;
                }
                else if(userInput < randomNumber1)
                {
                  document.querySelector('.error-message').style.display='block';
                  document.querySelector('.error-message').style.color='red';
                  document.querySelector('.error-message').innerText='your guess is lower';
                  score=score-1;
                  document.querySelector('.score').innerText=score;
                }
            }
      }
      else
      {
        document.querySelector('.error-message').style.display='block';
        document.querySelector('.error-message').innerText='Game  Is Over';654
      }
    }
    console.log(userInput);
});