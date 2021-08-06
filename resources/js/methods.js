export function goToTelegram (channel)
{
    window.location.replace(`tg://resolve?domain=@${channel}`);
};

export function serializeForm (form)
{
    const obj = {};

    for (let [key, value] of form)
    {
        if (obj[key] !== undefined)
        {
            if (!Array.isArray(obj[key]))
            {
                obj[key] = [obj[key]];
            }
            obj[key].push(value);
        }
        else
        {
            obj[key] = value;
        }
    }
    return obj;
};
