
const asyncFetch = async (url, method='get') => {
  const res = await fetch(url, {method: method});
  return await res.json();
}

const renderQuestion = (data) => {
  const section = document.querySelector('.questions');
  section.insertAdjacentHTML('afterbegin', `<article class="question">${data.content}</article>`)

}

const getQuestion = () => {
  asyncFetch('/api/v1/questions/random')
    .then(res => {
      renderQuestion(res.data);
    })
    .catch(err =>  console.log(err));
}

getQuestion();
