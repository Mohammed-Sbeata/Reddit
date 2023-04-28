/* eslint-disable no-alert */
/* eslint-disable no-undef */
const rightSideBarBtn = document.querySelectorAll('#right-sid-bar-btn');
const postForm = document.getElementById('postForm');
const postBtn = document.querySelector('.post');
const titleInput = document.querySelector('.post-title');
const imgInput = document.querySelector('.post-img');
const contentInput = document.querySelector('.post-Area');
const updateBtn = document.querySelector('.update');

if (localStorage.getItem('postData')) {
  postBtn.textContent = 'Save';
  const postObj = JSON.parse(localStorage.getItem('postData'));
  titleInput.value = postObj.title;
  imgInput.value = postObj.img;
  contentInput.value = postObj.content;
  postBtn.style.display = 'none';
  updateBtn.style.display = 'block';
  updateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('/post/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: titleInput.value,
        imageUrl: imgInput.value,
        content: contentInput.value,
        postId: postObj.id,
      }),

    }).then((data) => data.json())
      .then((data) => {
        if (!data.error) {
          window.location.href = '/page/home';
          localStorage.clear();
        } else if (data.error) {
          const validateP = document.getElementById('validateP');
          validateP.style.display = 'flex';
          validateP.textContent = data.data.message;
          setTimeout(() => {
            validateP.style.display = 'none';
          }, 4000);
        }
      })
      .catch((error) => {
        const validateP = document.getElementById('validateP');
        validateP.style.display = 'flex';
        validateP.textContent = error.data.message;
        setTimeout(() => {
          validateP.style.display = 'none';
        }, 4000);
      });
  });
  localStorage.clear();
} else {
  postBtn.style.display = 'block';
  updateBtn.style.display = 'none';
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const objData = Object.fromEntries(data);
    if (postValidation(objData) === true) {
      fetch('/post/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(objData),
      }).then((res) => res.json())
        .then((res) => {
          if (!res.error) {
            window.location.href = '/page/home';
          } else if (result.error) {
            const validateP = document.getElementById('validateP');
            validateP.style.display = 'flex';
            validateP.textContent = res.data.message;
            setTimeout(() => {
              validateP.style.display = 'none';
            }, 4000);
          }
        })
        .catch((error) => {
          const validateP = document.getElementById('validateP');
          validateP.style.display = 'flex';
          validateP.textContent = error.data.message;
          setTimeout(() => {
            validateP.style.display = 'none';
          }, 4000);
        });
    } else {
      const validateP = document.getElementById('validateP');
      validateP.style.display = 'flex';
      validateP.textContent = postValidation(objData);
      setTimeout(() => {
        validateP.style.display = 'none';
      }, 4000);
    }
  });
}

rightSideBarBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const classN = btn.classList[0];
    const list = document.querySelector(`div.right-${classN}`);
    if (list.style.display === 'none') {
      list.style.display = 'flex';
    } else {
      list.style.display = 'none';
    }
  });
});
