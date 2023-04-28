/* eslint-disable no-undef */
const rightSideBarBtn = document.querySelectorAll('#right-sid-bar-btn');
const sideBarBtn = document.querySelectorAll('#sid-bar-btn');
const rightSideBar = document.querySelector('.right-lists');
const loginBtn = document.querySelector('.login-btn');
const joinBtn = document.getElementById('joinBtn');
const names = document.querySelector('.profile-name');
const userName = document.querySelector('.profile-userName');
const addBtn = document.querySelector('.join-btn');
const removeBtn = document.querySelector('.remove-btn');
const userImg = document.querySelector('.block img');

fetch('/user/profile')
  .then((data) => data.json())
  .then((data) => {
    // eslint-disable-next-line no-undef
    createPost(data);
    return data[0];
  // eslint-disable-next-line consistent-return
  }).then((data) => {
    if (data.error) {
      const validateP = document.getElementById('validateP');
      validateP.style.display = 'flex';
      validateP.textContent = data.data.message;
      setTimeout(() => {
        validateP.style.display = 'none';
      }, 4000);
      throw new Error('Something is wrong');
    } else {
      addBtn.id = data.id;
      userImg.src = data.photo;
      names.textContent = `${data.firstname} ${data.lastname}`;
      userName.textContent = data.username;
      return data.userid;
    }
  })
  .then((id) => {
    if (document.cookie.startsWith('token')) {
      fetch(`/friends/check/${id}`)
        .then((data) => data.json())
        .then((data) => {
          if (data.error) {
            const validateP = document.getElementById('validateP');
            validateP.style.display = 'flex';
            validateP.textContent = data.data.message;
            setTimeout(() => {
              validateP.style.display = 'none';
            }, 4000);
            throw new Error('Something is wrong');
          }
          if (data.friend) {
            removeBtn.style.display = 'block';
            addBtn.style.display = 'none';
          } else {
            removeBtn.style.display = 'none';
            addBtn.style.display = 'block';
          }

          addBtn.addEventListener('click', () => {
            removeBtn.style.display = 'block';
            addBtn.style.display = 'none';
            fetch(`/friends/add/${id}`)
              .then((res) => res.json())
              .then((res) => {
                if (res.error) {
                  const validateP = document.getElementById('validateP');
                  validateP.style.display = 'flex';
                  validateP.textContent = res.data.message;
                  setTimeout(() => {
                    validateP.style.display = 'none';
                  }, 4000);
                }
              }).catch((error) => {
                const validateP = document.getElementById('validateP');
                validateP.style.display = 'flex';
                validateP.textContent = error.data.message;
                setTimeout(() => {
                  validateP.style.display = 'none';
                }, 4000);
              });
          });

          removeBtn.addEventListener('click', () => {
            removeBtn.style.display = 'none';
            addBtn.style.display = 'block';
            fetch(`/friends/remove/${id}`)
              .then((res) => res.json())
              .then((res) => {
                if (res.error) {
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
          });
        });
    } else {
      removeBtn.style.display = 'none';
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

if (joinBtn) {
  joinBtn.addEventListener('click', () => {
    window.location.href = '/page/signup';
  });
}

sideBarBtn.forEach((btn) => {
  const classN = btn.classList[0];
  const list = document.querySelector(`div.${classN}`);
  btn.addEventListener('click', () => {
    if (list.style.display === 'none') {
      list.style.display = 'flex';
    } else {
      list.style.display = 'none';
    }
  });
});

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

window.onscroll = () => {
  if (window.scrollY >= 355) {
    rightSideBar.style.position = 'fixed';
    rightSideBar.style.top = '64px';
  } else {
    rightSideBar.style.position = 'absolute';
    rightSideBar.style.top = '400px';
  }
};

loginBtn.addEventListener('click', () => {
  window.location.href = '/page/login';
});
