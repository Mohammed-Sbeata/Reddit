/* eslint-disable no-useless-escape */
// eslint-disable-next-line no-unused-vars
const loginValidation = (obj) => {
  const { email, password } = obj;
  if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    if (password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      return true;
    }
    return 'Password length must be at least 8 characters and it must consist of letters and numbers';
  }
  return 'invalid Email';
};
