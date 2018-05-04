<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Debugbar;
use Illuminate\Http\Request;
use Validator;
use App\User;

class RegisterController extends Controller
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name'       => 'required',
                'email'      => 'required|email|unique:users',
                'password'   => 'required',
                'c_password' => 'required|same:password',
            ]);

            if ($validator->fails()) {
                return response()->validationError($validator->errors());
            }
            $input             = $request->all();
            $input['password'] = bcrypt($input['password']);
            $user              = User::create($input);
            //$success['token']  = $user->createToken('MyApp')->accessToken;
            $success['name']   = $user->name;

            return response()->success($success, 'User register successfully.');
        } catch (Exception $e) {
            Debugbar::addThrowable($e);
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }
}
