<?php

use App\Http\Controllers\FirtsController;
use App\Http\Controllers\Dashboard\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/contact', [FirtsController::class, 'index'])->name('contact');

/*Route::get('/contact', function () {
    return view('contact',["name" => "John Doe"]);
})->name('contact');*/

Route::get('/contact1', function () {
    // return redirect()->route('contact'); // ejecicio de la sessión 3 video 20 redireccionamiento de rutas
    return view('contact1');
})->name('contact1');


Route::resource('/posts', PostController::class)->names('posts');
