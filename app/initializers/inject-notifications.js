// app/initializers/inject-notifications.js
export function initialize(application) {
  ['controller', 'component', 'route'].forEach(injectionTarget => {
    application.inject(injectionTarget, 'notifications', 'service:notification-messages');
  });
};

export default {
  name: 'inject-notifications',
  initialize
};