/* eslint-disable no-unused-vars */
const postValidation = (object) => {
  const { title, imageUrl, content } = object;
  // eslint-disable-next-line no-useless-escape
  if (!(title.split(' ').join('')).match(/^[a-zA-Z!@#$&()-`.+,/\"]{3,100}$/)) {
    return 'Title It should not be more than 100 or less than a letter';
  } if (imageUrl) {
    if (imageUrl.length < 40) {
      return 'invalid image url';
    }
  }
  return true;
};
