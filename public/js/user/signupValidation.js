// eslint-disable-next-line no-unused-vars
const validation = (data) => {
  const {
    firstName,
    lastName,
    username,
    password,
    confirmPassword,
    email,
    phone,
  } = data;
  if (!firstName.match(/^[a-zA-Z]{3,50}$/) || !lastName.match(/^[a-zA-Z]{3,50}$/)) {
    return 'invalid first or last name';
  } if (!username.match(/^[a-zA-Z0-9]{3,50}$/)) {
    return 'invalid username';
  // eslint-disable-next-line no-useless-escape
  } if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    return 'invalid Email';
  } if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    return 'invalid password';
  } if (confirmPassword !== password) {
    return 'invalid Confirm Password';
  // eslint-disable-next-line no-useless-escape
  } if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    return 'invalid email';
  } if (!phone.length >= 7 && !phone.length <= 11) {
    return 'invalid phone number';
  }
  return true;
};
