<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BaseRequest extends FormRequest
{

    public function expectsJson()
    {
        return true;
    }
    public function wantsJson()
    {
        return true;
    }
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
