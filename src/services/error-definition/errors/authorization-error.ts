export default class AuthorizationError extends Error {
  constructor (msg) {
    super(msg);
    this.status = 401;
  }
}
