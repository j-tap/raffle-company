import Form from './Form.js';
import { goToTelegram } from './methods.js';

const tgChannel = 'test_group_123';

window.hideClass = 'd-none';
const personalCodeVariable = 'personal_code';

(function()
{
    const eStart = document.getElementById('start-block');
    const eFinal = document.getElementById('final-block');
    const eForm = document.getElementById('main-form');
    const aBtnsGotoTg = document.querySelectorAll('.btn-goto-tg');
    let personalCode = localStorage.getItem(personalCodeVariable);

    for (let i = 0; i < aBtnsGotoTg.length; i++)
    {
        aBtnsGotoTg[i].addEventListener('click', (event) =>
        {
            goToTelegram(tgChannel);
        });
    }

    if (personalCode)
    {
        showSuccess(personalCode);
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
    };

})();
