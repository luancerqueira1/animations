//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
   const btn = question.querySelector('.question-btn');
   btn.addEventListener('click', function () {
      const questionContainer = question.querySelector('.question-container');
      const questionHeight = questionContainer.getBoundingClientRect().height;
      questions.forEach(function (item) {
         const questionText = item.querySelector('.question-text');
         if (item !== question) {
            item.classList.remove('show-text');
            questionText.style.height = 0;
         } else if (item === question) {
            questionText.style.height = `${questionHeight + 40}px`;
         }
         if (question.classList.contains('show-text')) {
            questionText.style.height = 0;
         }
      });
      question.classList.toggle('show-text');
   });
});
