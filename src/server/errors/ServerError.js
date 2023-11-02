/** Adds a HTTP status code to the default Error class */
class ServerError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

module.exports = ServerError;
