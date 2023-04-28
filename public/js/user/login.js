/* eslint-disable no-undef */
const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const userData = {
    email: email.value,
    password: password.value,
  };
  if (loginValidation(userData) === true) {
    fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.login) {
          window.location.href = '/page/home';
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
  } else {
    const validateP = document.getElementById('validateP');
    validateP.style.display = 'flex';
    validateP.textContent = loginValidation(userData);
    setTimeout(() => {
      validateP.style.display = 'none';
    }, 4000);
  }
});
