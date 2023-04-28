/* eslint-disable no-alert */
/* eslint-disable no-undef */
fetch('/post/get', {
  method: 'GET',
}).then((data) => data.json())
  .then((data) => data.reverse())
  .then(createPost)
  .catch(() => window.alert('Something wrong'));
