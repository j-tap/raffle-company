require('./bootstrap');

import Form from './form.js';
import { goToTelegram } from './methods.js';

const tgChannel = 'j_tap';

(function()
{
    const eForm = document.getElementById('main-form');
    const form = new Form(eForm, '/api/users');

    form.formSendData(response => {
        goToTelegram(tgChannel);
    })

})();
