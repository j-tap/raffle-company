require('./bootstrap');

function serialize (data)
{
    const obj = {};

    for (let [key, value] of data)
    {
        if (obj[key] !== undefined)
        {
            if (!Array.isArray(obj[key]))
            {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
        } else
        {
			obj[key] = value;
		}
	}
	return obj;
}

function formSendData()
{
    const form = document.getElementById('main-form');

    form.addEventListener('submit', function (event)
    {
        const formData = new FormData(form);
        const requestData = serialize(formData);

        window.axios.post('/test', requestData);

        event.preventDefault();
    });
}

(function()
{

    formSendData();

})();
