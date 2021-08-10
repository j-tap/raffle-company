<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'telegram' => [
                'required',
                'min:5',
                'max:32',
                'regex:/^([a-z]|[0-9]|[_])*$/',
                'unique:user_metas',
            ],
        ];
    }

    /**
     * messages
     *
     * @return array
     */
    public function messages()
    {
        return [
            'telegram.required' => 'Поле обязательно для заполнения',
            'telegram.min' => 'Должно быть не менее 5 символов',
            'telegram.max' => 'Должно быть не более 32 символов',
            'telegram.regex' => 'Допустимые символы: латинские буквы, цифры и знак подчёркивания',
            'telegram.unique' => 'Этот аккаунт Telegram уже участвует',
        ];
    }
}
