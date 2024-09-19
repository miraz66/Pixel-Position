<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\Tag;

class TagSearchController extends Controller
{
    public function __invoke(Tag $tag)
    {
        return inertia('Results', [
            'jobs' => $tag->jobs()->with('employer')->get(),
            'tags'  => Tag::all(),
        ]);
    }
}
