import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    contactHeader: 'Contact',
    email: '',
    textarea: '',
    validations: {
        email: {
            presence: true,
            format: {
                with: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            }
        },
    },

    actions: {
        submit() {
            this.get('notifications').success(`Your message has been received, a reply will be sent to: ${this.get('email')}`, {
                autoClear: true,
                clearDuration: 2300
            });
        }
    }
});
