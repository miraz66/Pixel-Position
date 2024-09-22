<?php

use App\Http\Controllers\JobController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Search\SearchController;
use App\Http\Controllers\Search\TagSearchController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [JobController::class, 'index']);
Route::get('/jobs', [JobController::class, 'index']);
Route::get('/jobs/create', [JobController::class, 'create']);
Route::post('/jobs/store', [JobController::class, 'store'])->name('jobs.store');
Route::get('/search', SearchController::class);
Route::get('/tags/{tag:name}', TagSearchController::class);


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
