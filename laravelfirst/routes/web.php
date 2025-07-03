<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/contact', function () {
    return view('contact',["name" => "John Doe"]);
})->name('contact');

Route::get('/contact1', function () {
    return redirect()->route('contact'); // ejecicio de la sessión 3 video 20 redireccionamiento de rutas
})->name('contact1');
