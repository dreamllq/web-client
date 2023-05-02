import errorHandler from './handler';

export default {
  install(app) {
    app.config.errorHandler = function (err, vm, info) {
      errorHandler(err);
    };
    
    window.onerror = (message, source, line, column, err) => {
      errorHandler(err);
    };
    
    window.addEventListener('unhandledrejection', event => {
      event.preventDefault();
      errorHandler(event.reason);
    });
  }
};