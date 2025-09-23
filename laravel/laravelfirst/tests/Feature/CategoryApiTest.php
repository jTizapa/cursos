<?php
    namespace Tests\Feature;

use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
    use Illuminate\Foundation\Testing\WithFaker;
    use Tests\TestCase;

    class CategoryApiTest extends TestCase{
         public function test_all(){
            $categories = Category::all()->toArray();
            $response = $this->get('/api/category/all');
            $response->assertJson($categories);
            $response->assertStatus(200);
         }
    }

