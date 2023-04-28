/* eslint-disable no-alert */
const addVote = (id) => fetch(`/vote/add/${id}`, {
  method: 'GET',
}).then((data) => data.json());

const decreaseVote = (id) => fetch(`/vote/decrease/${id}`, {
  method: 'GET',
}).then((data) => data.json());

const getVote = (id) => fetch(`/vote/get/${id}`)
  .then((data) => data.json());

setTimeout(() => {
  const upBtn = document.querySelectorAll('button.score-up');
  const downBtn = document.querySelectorAll('button.score-down');

  upBtn.forEach((btn) => {
    const score = btn.nextElementSibling;
    getVote(btn.id)
      .then((data) => {
        score.textContent = data.score;
        if (data.class === '#FF4500') {
          // eslint-disable-next-line no-param-reassign
          btn.style.color = data.class;
          score.style.color = data.class;
        } else if (data.class === '#ccc') {
          score.style.color = data.class;
          score.nextElementSibling.style.color = data.class;
        }
      });
  });
  upBtn.forEach((btn) => btn.addEventListener('click', () => {
    const score = btn.nextElementSibling;
    score.textContent = '';
    addVote(btn.id)
      .then((data) => {
        if (data.class) {
          // eslint-disable-next-line no-param-reassign
          btn.style.color = data.class;
          score.style.color = data.class;
        }
        score.textContent = data.score;
      });
  }));

  downBtn.forEach((btn) => btn.addEventListener('click', () => {
    const score = btn.previousElementSibling;
    score.textContent = '';
    decreaseVote(btn.id)
      .then((data) => {
        score.textContent = data.score;
        if (data.data === 'add') {
          btn.classList.remove('black');
          btn.classList.add('gray');
        } else {
          btn.classList.remove('gray');
          btn.classList.add('black');
        }
      }).catch(() => window.alert('Something wrong'));
  }));
}, 200);
