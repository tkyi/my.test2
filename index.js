'use strict';

const config = require('config');
const hoek = require('@hapi/hoek');

const notificationsValidationErr = config.get('notifications')
    ? hoek.reach(config.get('notifications').options, 'throwValidationErr', {
          default: true
      })
    : false;

console.log('notificationsValidationErr: ', notificationsValidationErr);
console.log('type: ', typeof notificationsValidationErr);
