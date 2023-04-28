/* eslint-disable no-undef */
const signUpForm = document.getElementById('signupForm');

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = new FormData(signUpForm);
  const data = Object.fromEntries(obj);
  if (validation(data) === true) {
    fetch('/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          return fetch('/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: data.email, password: data.password }),
          });
        }
        throw new Error(res.data.message);
      })
      .then((res) => res.json())
      .then((dat) => {
        if (dat.login === true) {
          window.location.reload();
        }
      })
      .catch((error) => {
        const validateP = document.getElementById('validateP');
        validateP.style.display = 'flex';
        validateP.textContent = error.message;
        setTimeout(() => {
          validateP.style.display = 'none';
        }, 4000);
      });
  } else {
    const validateP = document.getElementById('validateP');
    validateP.style.display = 'flex';
    validateP.textContent = validation(data);
    setTimeout(() => {
      validateP.style.display = 'none';
    }, 4000);
  }
});
