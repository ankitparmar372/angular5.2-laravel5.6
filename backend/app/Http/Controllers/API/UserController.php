<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Auth;
use Debugbar;

class UserController extends Controller
{
    /**
     * Display the specified user.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getMe()
    {
        try {
            $oUser = User::where('id', Auth::user()->id)->first();
            return response()->success($oUser);
        } catch (Exception $e) {
            Debugbar::addThrowable($e);
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    public function logoutApi()
    {
        try {
            if (Auth::check()) {
                $result = Auth::user()->AauthAcessToken()->delete();
                return response()->success($result);
            }
        } catch (Exception $e) {
            Debugbar::addThrowable($e);
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

}
