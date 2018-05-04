<?php

namespace App\Http\Controllers\API;

use App\Book;
use App\Http\Controllers\Controller;
use Debugbar;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $book = Book::paginate(3);
            return response()->success($book);
        } catch (Exception $e) {
            Debugbar::addThrowable($e);
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $this->validate($request, [
                'author'      => 'required',
                'description' => 'required',
            ]);
            $book = Book::create($request->all());
            if ($request->hasFile('image')) {
                $image           = $request->file('image');
                $name            = time() . '.' . $image->getClientOriginalExtension();
                $destinationPath = public_path('/book');
                $image->move($destinationPath, $name);
                $book->image = url('/') . '/book/' . $name;
                $book->save();
            }
            if ($book) {
                return response()->success($book, 200);
            } else {
                return response()->error($book, 400);
            }
        } catch (Exception $e) {
            Debugbar::addThrowable($e);
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $book = Book::find($id);
            return response()->success($book);
        } catch (Exception $e) {
            Debugbar::addThrowable($e);
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            /*$book              = new Book;
            $book->author      = $request->input('author');
            $book->description = $request->input('description');
            $book->save();*/
            $book = Book::findorFail($id);
            $book = $book->update($request->all());
            return response()->success($book);
        } catch (Exception $e) {
            Debugbar::addThrowable($e);
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $book = Book::find($id);
            $res  = $book->delete();
            return response()->success($res);
        } catch (Exception $e) {
            Debugbar::addThrowable($e);
            return response()->exception($e->getMessage(), $e->getCode());
        }
    }
}
