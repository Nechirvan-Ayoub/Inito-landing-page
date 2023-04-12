const questions=document.querySelectorAll('.question');
const answers=document.querySelectorAll('.answer');
const qBtns=document.querySelectorAll('.q-btn h3');

    
questions.forEach((question, i) => {
    question.addEventListener('click', () => {
      answers[i].classList.toggle('answer-checked');
      if (answers[i].className==='answer') {
        qBtns[i].innerHTML = '+';
      } else {
        qBtns[i].innerHTML = '-';
      }
    });
  });