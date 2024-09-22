<?php

namespace App\Http\Controllers;

use App\Models\Job;
use App\Models\Tag;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreJobRequest;
use App\Http\Requests\UpdateJobRequest;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Home/Index', [
            'jobs' => Job::with('employer')->latest()->get(),
            'tags'  => Tag::all(),
            'auth'  => Auth::user() ? true : false,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Jobs/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(Request $request)
    // {
    //     $attributes = $request->validate([
    //         'title' => ['required'],
    //         'salary' => ['required'],
    //         'location' => ['required'],
    //         'schedule' => ['required', Rule::in(["Part Time", "Full Time"])],
    //         'url' => ['required', 'active_url'],
    //         'tags' => ['nullable'],
    //     ]);



    //     // Save the job
    //     $job = Auth::user()->employer->jobs()->create(Arr::except($attributes, 'tags'));

    //     if ($attributes['tags'] ?? false) {
    //         foreach (explode(',', $attributes['tags']) as $tag) {
    //             $job->tags($tag);
    //         }
    //     }

    //     // Redirect or return a success message
    //     return redirect('/')->with('success', 'Job posted successfully!');
    // }

    public function store(Request $req)
    {
        $attrs = $req->validate([
            'title' => ['required'],
            'salary' => ['required'],
            'location' => ['required'],
            'schedule' => ['required', Rule::in(['Part Time', 'Full Time'])],
            'url' => ['required', 'active_url'],
            'tags' => ['nullable'],
        ]);

        $attrs['featured'] = $req->has('feature');

        // Ensure the user has an employer
        $user = Auth::user();

        if (!$user->employer) {
            return back()->withErrors(['error' => 'No employer associated with this user.']);
        }

        // Save the job
        $job = $user->employer->jobs()->create(Arr::except($attrs, 'tags'));

        // Attach tags if provided
        if ($attrs['tags'] ?? false) {
            foreach (explode(',', $attrs['tags']) as $tag) {
                $job->tag($tag);
            }
        }

        return redirect('/')->with('success', 'Job posted successfully!');
    }



    /**
     * Display the specified resource.
     */
    public function show(Job $job)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Job $job)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateJobRequest $request, Job $job)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Job $job)
    {
        //
    }
}
