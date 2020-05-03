
const asyncFetch = async (url, method='get') => {
  const res = await fetch(url, {method: method});
  return await res.json();
}

const renderAuthor = (profile) => {
  if (profile.name) {
    return `
      <div class="author">
        ${profile.name}
      </div>
    `
  } else {
    return '';
  }
}

const renderQuestion = data => {
  const questions = document.querySelector('.questions');
  const boxes = questions.querySelectorAll('.questionBox');
  if (boxes.length) {
    boxes.forEach(box => box.remove());
  }
  questions.insertAdjacentHTML('afterbegin', `
    <article class="questionBox">
      <div class="question">
        ${data.content}
        ${renderAuthor(data.profile)}
      </div>
    </article>
  `)
}

const getQuestion = () => {
  asyncFetch('/api/v1/questions/random')
    .then(res => {
      console.log(res.data)
      renderQuestion(res.data);
    })
    .catch(err =>  console.log(err));
}

getQuestion();

document.querySelector('button[name=refresh]').addEventListener('click', getQuestion);
