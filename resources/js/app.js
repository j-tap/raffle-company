require('./bootstrap');

import Form from './form.js';
import { goToTelegram } from './methods.js';

window.hideClass = 'd-none';
const tgChannel = 'j_tap';
const personalCodeVariable = 'personal_code';

(function()
{
    const eStart = document.getElementById('start-block');
    const eFinal = document.getElementById('final-block');
    const eForm = document.getElementById('main-form');
    const eBtnGotoTg = document.getElementById('btn-goto-tg');
    let personalCode = localStorage.getItem(personalCodeVariable);

    if (personalCode)
    {
        showSuccess(personalCode);

        eBtnGotoTg.addEventListener('click', (event) =>
        {
            goToTelegram(tgChannel);
        });
    }
    else
    {
        const form = new Form(eForm, '/api/users');

        form.formSendData(resp =>
        {
            personalCode = resp.data.code;

            if (personalCode)
            {
                localStorage.setItem(personalCodeVariable, personalCode);
                showSuccess(personalCode);
            }
            else
            {
                form.updateErrorAlert('Unknow error!');
            }
        })
    }

    function showSuccess(code)
    {
        const eCode = document.getElementById('code');

        eCode.innerText = code;
        eStart.classList.add(window.hideClass);
        eFinal.classList.remove(window.hideClass);

        goToTelegram(tgChannel);
    };

})();
