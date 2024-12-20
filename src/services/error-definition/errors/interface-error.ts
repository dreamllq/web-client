export default class InterfaceError extends Error {
  constructor(msg, code) {
    super(msg);
    this.code = code;
    this.status = 200;
  }
}