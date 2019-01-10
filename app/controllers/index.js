import Controller from '@ember/controller';
// import { computed, observer } from '@ember/object';
// import { empty } from '@ember/object/computed';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    emailAddress: '',
    isDisabled: not('isValid'),
    isValid: match('emailAddress', /^.+@.+\..+$/),
    headerMessage: 'Coming Soon',
    
    actions: {
        saveInvitation () {
            const email = this.get('emailAddress');

            const newInvitation = this.store.createRecord('invitation', { email: email });
            newInvitation.save();
      
            this.set('responseMessage', `Thank you! We have just saved your email address: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
            this.get('notifications').success(`Thank you! We've just saved your email address: ${this.get('emailAddress')}`, {
                autoClear: true,
                clearDuration: 5000,
                position: 'bottom'
            });
            this.set('emailAddress', '');
        }
    }
});
