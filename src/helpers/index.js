const CustomError = require('./errorClass');
const { promiseSign, promiseVerify } = require('./jwt');

module.exports = { CustomError, promiseSign, promiseVerify };
