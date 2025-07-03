<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/contact', function () {
    return view('contact',["name" => "John Doe"]);
})->name('contact');

Route::get('/contact1', function () {
    return view('contact1');
})->name('contact1');
