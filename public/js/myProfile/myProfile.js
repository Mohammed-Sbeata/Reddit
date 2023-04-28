/* eslint-disable no-alert */
/* eslint-disable no-undef */
const sideBarBtn = document.querySelectorAll('#sid-bar-btn');
const rightSideBarBtn = document.querySelectorAll('#right-sid-bar-btn');
const friendsList = document.querySelector('.friends');
const profileImg = document.getElementById('profile-img');
const profileImageDiv = document.querySelector('.Profile-image-div');
const addImageBtn = document.getElementById('Profile-image-button');
const profileImgInput = document.getElementById('profile-img-input');
fetch('/user/getImg')
  .then((data) => data.json())
  .then((data) => {
    profileImg.src = data.img;
  }).catch(() => window.alert('You do not have picture'));

profileImg.addEventListener('click', () => {
  if (profileImageDiv.style.display === 'flex') {
    profileImageDiv.style.display = 'none';
  } else {
    profileImageDiv.style.display = 'flex';
  }
});

addImageBtn.addEventListener('click', () => {
  if (profileImgInput.value.trim().length >= 50) {
    profileImageDiv.style.display = 'none';
    fetch('/user/image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: profileImgInput.value }),
    }).then((data) => data.json())
      // eslint-disable-next-line consistent-return
      .then((data) => {
        if (data.error) {
          return 'Invalid url';
        }
        profileImg.src = data.url;
      }).catch(() => window.alert('UnAuthorized'));
  } else {
    window.alert('Invalid url');
  }
});
friendsList.addEventListener('click', () => {
  fetch('/friends/myFriends')
    .then((data) => data.json())
    .then((data) => data.message)
    .then((data) => {
      const list = document.querySelector('.right-friends');
      list.textContent = '';
      data.forEach((user) => {
        const userBtn = document.createElement('a');
        const userImg = document.createElement('img');
        userImg.src = user.photo;
        userImg.id = 'friendImg';
        const userNode = document.createTextNode(user.username);
        userBtn.id = user.friendid;
        userBtn.href = `/page/profile/${user.friendid}`;
        userBtn.appendChild(userImg);
        userBtn.appendChild(userNode);
        list.appendChild(userBtn);
      });
    })
    .catch(() => window.alert('You do not have friends'));
});

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

fetch('/user/myProfile')
  .then((data) => data.json())
  .then((data) => {
    const profileName = document.querySelector('.profile-name');
    const profileUserName = document.querySelector('.profile-userName');
    profileUserName.textContent = data[0].username;
    profileName.textContent = data[0].username;
    createPost(data);
  })
  .catch(() => window.alert('UnAuthorized'));
