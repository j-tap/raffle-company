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
}
