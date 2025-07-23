<?php

namespace App\Http\Controllers\blog;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Posts;

class BlogController extends Controller
{
    $post = Post::paginate(2);
    return view('blog.index', compact('posts'))
}
