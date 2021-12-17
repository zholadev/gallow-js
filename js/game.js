document.addEventListener('DOMContentLoaded', () => {

  'use script'

  let result = 4;
  let words = ['программист', 'javascript', 'сайт', 'дедлайн', 'куросовой', 'баг', 'фича']

  let changeDoc = document.getElementById('change')
  let btnStart = document.getElementById('btn-start')
  let interfaceWords = document.getElementById('interface-words')
  let welcomeTitle = document.getElementById('welcome-title')
  let sendSecretLength = document.getElementById('secret-word-show')
  let secretValue = document.getElementById('secret-word').value
  let teaserText = document.getElementById('teaser-text')
  let btnSend = document.getElementById('btn-send')

  let word = words[Math.floor(Math.random() * words.length)]

  teaserText.textContent = "Виселица-игра на угадывание слов. В нашем варианте компьютер будет загадывать слово, а вы отгадывать его."

  btnStart.addEventListener('click', () => {
    welcomeTitle.style.display = 'block'
    interfaceWords.style.display = 'flex'
    btnStart.style.display = 'none'
    teaserText.style.display = 'none'
  })

  let answer = [];

  for (let i = 0; i < word.length; i++) {
    answer[i] = '_'
  }

  let remaining = word.length

  sendSecretLength.textContent = answer.join(' ')

  var motion = 6;// или motion =word.length + 6;
  var isHit = false;
  while ((remaining > 0) && (motion > 0)) {
    alert(answer.join(" "));
    var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры");
    guess = guess.toLowerCase();
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Пожалуйста, введите только одну букву");
    } else {
      isHit = false;// Вот здесь обнулить нужно было
      //Обновляем состояние игры
      for (var j = 0; j < word.length; j++) {
        var letterWasEntered = answer[j] === guess;
        if (letterWasEntered) {
          alert("Вы уже вводили эту букву");
          break;
        } if (word[j] === guess) {
          answer[j] = guess;
          remainingLetters--;
          isHit = true;

        }
      } if (!isHit) {
        motion--;
        alert("У Вас осталось " + motion + " попыток");
        if (motion === 0) {
          alert("Ваши попытки закончились");
          break;
        }
      }
    }
  }


  alert(answerArray.join(" "));
  alert("Было загадано слово " + word);

})