/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const createCommentsDom = (element, commentsContainer, postInfo, userSpan) => fetch(`/post/comment/${element.id}`)
  .then((data) => data.json())
  .then((data) => {
    data.forEach((comment) => {
      const commentDiv = createElement('div', 'comment-div');
      const userComment = createElement('div', 'user-comment');
      const commentImg = createElement('img', 'comment');
      commentImg.src = '/image/reddit.png';
      const usernameComment = createElement('p', 'username-comment');
      usernameComment.textContent = comment.username;
      const commentDate = createElement('p', 'comment-date');
      commentDate.textContent = comment.date;
      const commentContent = createElement('div', 'comment-content');
      const commentText = createElement('p', 'comment-text');
      commentText.textContent = comment.content;
      const commentButtons = createElement('div', 'comment-buttons');
      const commentVote = createElement('div', 'comment-vote');
      const commentUp = createElement('button', 'comment-up');
      const commentUpIcon = document.createElement('i');
      commentUpIcon.className = 'fa-solid fa-arrow-up';
      const commentNum = createElement('span', 'comment-num');
      commentNum.textContent = 0;
      const commentDown = createElement('button', 'comment-down');
      const commentDownIcon = document.createElement('i');
      commentDownIcon.className = 'fa-solid fa-arrow-down';
      const reply = createElement('button', 'reply');
      const replyIcon = createElement('i', 'ri-chat-smile-line');
      const share = createElement('button', 'share');
      const commentMore = createElement('p', 'comment-more');
      commentMore.id = comment.id;

      appendChildren(commentsContainer, commentDiv);
      appendChildren(userComment, commentImg, usernameComment, commentDate);
      appendChildren(commentContent, commentText);
      appendChildren(commentDiv, userComment, commentContent, commentButtons);
      appendChildren(commentUp, commentUpIcon);
      appendChildren(commentDown, commentDownIcon);
      appendChildren(commentVote, commentUp, commentNum, commentDown);
      appendChildren(reply, replyIcon);
      appendChildren(commentButtons, commentVote, reply, share);
      userData()
        .then((users) => {
          if (comment.userid === users.user.id) {
            const commentDeleteIco = createElement('i', 'ri-delete-bin-line');
            commentDeleteIco.id = comment.id;
            commentMore.appendChild(commentDeleteIco);
            commentDeleteIco.addEventListener('click', () => {
              DeleteComment(comment.id);
            });
          }
        });

      appendChildren(commentButtons, commentMore);
    });
    if (document.cookie.split('=')[0] === 'token') {
      userData()
        .then((userData) => {
        // eslint-disable-next-line no-param-reassign
          userSpan.textContent = userData.user?.username;
        }).catch(() => window.alert('This User Dos Not Exist'));
    }
    appendChildren(postInfo, commentsContainer);
  }).catch(() => window.alert('UnAuthorized'));
