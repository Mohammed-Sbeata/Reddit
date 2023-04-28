class CustomError {
  constructor(status, message) {
    this.message = message;
    this.status = status;
  }
}

module.exports = CustomError;
