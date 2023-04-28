/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const postsContainer = document.getElementById('container');

const DeleteComment = (commentId) => {
  fetch(`/post/deleteComment/${commentId}`)
    .then((data) => data.json())
    .then((data) => {
      if (!data.error) {
        window.location.reload();
      }
    })
    .catch(() => console.warn('UnAuthorized'));
};

const addComment = (content, postId, element) => {
  fetch(`/post/comment/${postId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content,
      postId,
    }),
  }).then((data) => data.json())
    .then((comment) => {
      if (comment.error) {
        if (comment.data.message === 'UnAuthorize') {
          window.location.href = '/page/login';
        }
      }
      const thePost = document.getElementById(`postInfo${postId}`);
      const Container = document.getElementById(`container${postId}`);
      const commentDiv = createElement('div', 'comment-div');
      const userComment = createElement('div', 'user-comment');
      const commentImg = createElement('img', 'comment');
      commentImg.src = '/image/reddit.png';
      const usernameComment = createElement('p', 'username-comment');
      usernameComment.textContent = comment.username;
      const commentDate = createElement('p', 'comment-date');
      commentDate.textContent = comment.comment.date;
      const commentContent = createElement('div', 'comment-content');
      const commentText = createElement('p', 'comment-text');
      commentText.textContent = comment.comment.content;
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
      commentMore.id = comment.comment.id;
      userData()
        .then((users) => {
          if (comment.comment.userid === users.user.id) {
            const commentDeleteIco = createElement('i', 'ri-delete-bin-line');
            commentDeleteIco.id = comment.comment.id;
            appendChildren(commentMore, commentDeleteIco);
            commentDeleteIco.addEventListener('click', () => {
              DeleteComment(comment.comment.id);
            });
          }
        });

      appendChildren(Container, commentDiv);
      appendChildren(userComment, commentImg, usernameComment, commentDate);
      appendChildren(commentDiv, userComment, commentContent);
      appendChildren(commentContent, commentText);
      appendChildren(commentDiv, commentButtons);
      appendChildren(commentUp, commentUpIcon);
      appendChildren(commentDown, commentDownIcon);
      appendChildren(commentVote, commentUp, commentNum, commentDown);
      appendChildren(reply, replyIcon);
      appendChildren(commentButtons, commentVote, reply, share, commentMore);
      appendChildren(thePost, Container);
      commentMore.addEventListener('click', () => {
        DeleteComment(commentMore, element);
      });
    })
    // eslint-disable-next-line no-console
    .catch(() => console.log('UnAuthorized'));
};

// eslint-disable-next-line no-unused-vars
const addCommentValidation = (content, postId, element) => {
  if (content.length < 1) { return 'Comment must be three characters at least.'; }
  if (content.length > 250) { return 'Comment must be three characters at least.'; }
  return addComment(content, postId, element);
};
