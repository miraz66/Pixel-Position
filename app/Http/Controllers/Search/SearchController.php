<?php

namespace App\Http\Controllers\Search;

use App\Models\Job;
use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Support\Facades\Schema;

class SearchController extends Controller
{
    public function __invoke()
    {
        $searchTerm = request('search');
        $query = Job::query();

        // Get all columns from the 'jobs' table
        $columns = Schema::getColumnListing('jobs');

        // Apply search on all columns
        foreach ($columns as $column) {
            $query->orWhere($column, 'like', '%' . $searchTerm . '%');
        }

        $jobs = $query->with('employer')->get();

        // return $jobs;
        return inertia('Results', [
            'jobs' => $jobs,
            'tags'  => Tag::all(),
        ]);
    }
}
