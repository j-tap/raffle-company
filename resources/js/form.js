import { serializeForm } from './methods.js';

export default class Form {
    #form;
    #url;

    constructor(form, url) {
        this.#form = form;
        this.#url = url;
    };

    #showError(error)
    {
        alert(error);
    };

    formSendData(callback)
    {
        this.#form.addEventListener('submit', (event) =>
        {
            const formData = new FormData(this.#form);
            const requestData = serializeForm(formData);

            window.axios.post(this.#url, requestData)
                .then(response =>
                {
                    callback(response);
                })
                .catch(this.#showError);

            event.preventDefault();
        });
    };
 }
