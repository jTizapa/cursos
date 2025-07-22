<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::resource('categories',CategoryController::class)->except([
    'create', 'edit'
]);

Route::get('category/all',[CategoryController::class,'all']);
Route::get('category/slug/{Category:slug}', [CategoryController::class,'slug']);

Route::resource('posts',PostController::class)->except([
    'create', 'edit'
]);

Route::get('post/all',[PostController::class,'all']);
Route::get('post/slug/{Post:slug}',[PostController::class,'slug']);
