/* eslint-disable no-alert */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
const createPost = (Data) => {
  if (Data[0].content) {
    const postsContainer = document.getElementById('container');
    postsContainer.textContent = '';
    Data.forEach((element) => {
      // -------------------score------------------
      const post = createElement('div', 'post');
      const score = createElement('div', 'score');
      const scoreUP = createElement('button', 'score-up');
      scoreUP.id = element.id;
      const upIcon = document.createElement('i');
      upIcon.className = 'fa-solid fa-arrow-up';
      const scoreNum = createElement('span', 'score-num');
      scoreNum.id = element.id;
      scoreNum.textContent = 0;
      const scoreDown = createElement('button', 'score-down');
      scoreDown.id = element.id;
      const downIco = document.createElement('i');
      downIco.className = 'fa-solid fa-arrow-down';

      appendChildren(scoreUP, upIcon);
      appendChildren(scoreDown, downIco);
      appendChildren(score, scoreUP, scoreNum, scoreDown);
      // -------------------------post-content------------------
      const postInfo = createElement('div', 'post-info');
      postInfo.id = `postInfo${element.id}`;
      const userInfo = createElement('div', 'user-info');
      const user = createElement('div', 'user');
      const inUser = createElement('div', 'in-user');
      const userIcon = createElement('img', 'user-icon');
      userIcon.src = element.photo;
      const username = createElement('p', 'username');
      username.id = element.userid;
      username.textContent = element.username;
      const date = createElement('div', 'date');
      date.textContent = 'From';
      const dateNum = createElement('span', 'span-num');
      dateNum.textContent = element.created_at;
      const content = createElement('div', 'content');
      const title = createElement('p', 'title');
      title.id = element.id;
      title.textContent = element.title;
      const description = createElement('p', 'post-disc');
      description.id = element.id;
      description.textContent = element.content;
      const img = createElement('img', 'post-img');
      img.id = element.id;
      img.src = element.imageurl;
      const buttons = createElement('div', 'buttons');
      const comments = createElement('button', 'comments');
      comments.id = 'commentsBtn';
      const commentIcon = createElement('i', 'ri-chat-4-line');
      const comNode = document.createTextNode('Comments');
      const Share = createElement('button', 'Share');
      const ShareIcon = createElement('i', 'fa-solid fa-share');
      const shareNode = document.createTextNode('Share');
      const Save = createElement('button', 'Save');
      const SaveIcon = createElement('i', 'fa-regular fa-bookmark');
      const saveNode = document.createTextNode('Save');
      const more = createElement('button', 'more');
      const moreIcon = createElement('i', 'fa-solid fa-ellipsis');
      moreIcon.id = element.id;
      moreIcon.setAttribute('userId', element.userid);
      const edit = createElement('button', 'editBtn');
      const deleteBtn = createElement('button', 'deleteBtn');
      deleteBtn.textContent = 'Delete';
      deleteBtn.id = element.id;
      deleteBtn.style.display = 'none';
      edit.id = element.id;
      edit.textContent = 'Edit';
      edit.style.display = 'none';

      appendChildren(post, score, postInfo);
      appendChildren(userInfo, user);
      appendChildren(user, inUser);
      appendChildren(inUser, userIcon, username, date);
      appendChildren(date, dateNum);
      appendChildren(content, title, description, img);
      appendChildren(postInfo, userInfo, content, buttons);
      appendChildren(comments, commentIcon, comNode);
      appendChildren(Share, ShareIcon, shareNode);
      appendChildren(Save, SaveIcon, saveNode);
      appendChildren(more, deleteBtn, edit, moreIcon);
      appendChildren(buttons, comments, Share, Save, more);
      appendChildren(postsContainer, post);

      // --------------------------------Create comments---------------------

      const commentsContainer = createElement('div', 'comments-container');
      commentsContainer.id = `container${element.id}`;
      // eslint-disable-next-line consistent-return
      comments.addEventListener('click', () => {
        if (commentsContainer.style.display === 'block') {
          commentsContainer.textContent = '';
          // eslint-disable-next-line no-return-assign
          return commentsContainer.style.display = 'none';
        }
        commentsContainer.style.display = 'block';
        const addComment = createElement('div', 'add-comment');
        const CommentTitle = createElement('h4', 'comment-title');
        CommentTitle.textContent = 'Comment As ';
        const userSpan = createElement('span', 'user-span');
        const createComment = createElement('div', 'create-comment');
        const Comment = createElement('input', 'Comment');
        const commentBtn = createElement('button', 'comment-btn');
        commentBtn.textContent = 'Comment';
        commentBtn.id = element.id;

        appendChildren(commentsContainer, addComment);
        appendChildren(CommentTitle, userSpan);
        appendChildren(createComment, Comment, commentBtn);
        appendChildren(addComment, CommentTitle, createComment);

        return createCommentsDom(element, commentsContainer, postInfo, userSpan)
          .then(() => {
            commentBtn.addEventListener('click', (btn) => {
            // eslint-disable-next-line no-undef
              addCommentValidation(Comment.value, btn.target.id, element);
              Comment.value = '';
            });
          })
          .catch(() => window.alert('UnAuthorized'));
      });
    });
  }
};
