<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */
Route::post('register', 'API\RegisterController@register');
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => ['cors','auth:api']], function () {
	Route::get('me','API\UserController@getMe');
	Route::post('logout','API\UserController@logoutApi');
    Route::resource('book', 'API\BookController');
});
