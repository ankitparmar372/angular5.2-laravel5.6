<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Response;

class ResponseMacroServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Response::macro('success', function ($data) {
            return Response::json([
                'errors'      => false,
                'data'        => $data,
                'status_code' => 200,
            ]);
        });

        Response::macro('error', function ($message, $status = 400) {
            return Response::json([
                'message'     => $status . ' error',
                'errors'      => [
                    'message' => [$message],
                ],
                'status_code' => $status,
            ], $status);
        });

        Response::macro('exception', function ($message, $status = 400) {
            return Response::json([
                'message'     => $status . ' error',
                'errors'      => [
                    'message' => [$message],
                ],
                'status_code' => $status,
            ], $status);
        });

        Response::macro('notFound', function ($message, $status = 404) {
            return Response::json([
                'message'     => $status . ' error',
                'data'        => null,
                'status_code' => $status,
            ], $status);
        });

        Response::macro('validationError', function ($errors) {
            return Response::json([
                'status_code' => 422,
                'errors'      => $errors,
                'message'     => '422 Unprocessable Entity',
            ], 422);
        });
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
