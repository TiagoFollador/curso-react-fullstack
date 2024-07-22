<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function list() : JsonResponse
    {
        $books = Book::all();
        return response()->json([
            'success' => true,
            'livros' => $books,
            'message' => 'livros foram pegos com sucesso'
        ]);
    }
}
