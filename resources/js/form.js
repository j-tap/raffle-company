import { serializeForm } from './methods.js';

export default class Form {
    formErrors = {};
    #form;
    #url;

    constructor(form, url) {
        this.#form = form;
        this.#url = url;
    };

    formSendData(callback)
    {
        this.#form.addEventListener('submit', (event) =>
        {
            event.preventDefault();
            event.stopPropagation();

            this.formErrors = {};
            const formData = new FormData(this.#form);
            const requestData = serializeForm(formData);

            this.#fieldUpdateErrors();
            this.updateLoading(true);
            this.updateErrorAlert();

            window.axios.post(this.#url, requestData)
                .then(response =>
                {
                    callback(response);
                })
                .catch((error) =>
                {
                    this.updateErrorAlert(error);
                })
                .finally(() =>
                {
                    this.#fieldUpdateErrors();
                    this.updateLoading();
                });
        });
    };

    fieldUpdateError(field)
    {
        const classError = 'is-invalid';
        const key = field.getAttribute('name');
        const errorFeedback = field.nextElementSibling;
        let textError = '';

        if (this.formErrors[key])
        {
            textError = this.formErrors[key].join();
            field.classList.add(classError);
        }
        else
        {
            field.classList.remove(classError);
        }

        errorFeedback.innerText = textError;
    };

    updateLoading(is = false)
    {
        const btn = this.#form.querySelector('[type="submit"]');
        const preloader = btn.querySelector('.spinner-border');

        if (is)
        {
            preloader.classList.remove(window.hideClass);
            btn.setAttribute('disabled', true);
        }
        else
        {
            preloader.classList.add(window.hideClass);
            btn.removeAttribute('disabled');
        }
    }

    updateErrorAlert(error)
    {
        const alert = this.#form.querySelector('.alert-danger');
        let msg = '';

        if (error)
        {
            const resp = error.response;
            msg = error;

            if (resp)
            {
                if (resp.statusText) msg = resp.statusText;
                if (resp.data)
                {
                    if (resp.data.message) msg = resp.data.message;
                }
                if (resp.data.errors)
                {
                    this.formErrors = resp.data.errors;
                }
            }
            alert.classList.remove(window.hideClass);
        }
        else
        {
            alert.classList.add(window.hideClass);
        }

        alert.innerText = msg;
    };

    #fieldUpdateErrors()
    {
        Array.prototype.slice
            .call(this.#form.querySelectorAll(`[name]`))
            .forEach((field) => this.fieldUpdateError(field));
    }
 }
