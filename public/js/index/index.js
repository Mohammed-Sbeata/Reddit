/* eslint-disable no-undef */
const loginSignupBtn = document.querySelector('.last');
const rightSideBar = document.querySelector('.right-lists');

loginSignupBtn.addEventListener('click', () => {
  window.location.href = '/page/login';
});

setTimeout(() => {
  const usernames = document.querySelectorAll('.in-user p');
  usernames.forEach((user) => {
    user.addEventListener('click', () => {
      window.location.href = `/page/profile/${user.id}`;
    });
  });
}, 100);

window.onscroll = () => {
  if (window.scrollY >= 355) {
    rightSideBar.style.position = 'fixed';
    rightSideBar.style.top = '64px';
  } else {
    rightSideBar.style.position = 'absolute';
    rightSideBar.style.top = '350px';
  }
};

// sittingBtn.addEventListener('click', () => {
//   if (setting.style.display === 'none') {
//     setting.style.display = 'block';
//   } else {
//     setting.style.display = 'none';
//   }
// });
