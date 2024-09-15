<?php

use App\Models\Job;
use App\Models\Tag;
use App\Models\Employer;

it('belongs to an employer', function () {
    // Arrange
    $employer = Employer::factory()->create();
    $job = Job::factory()->create([
        'employer_id' => $employer->id
    ]);

    //  Act & Assert
    expect($job->employer->is($employer))->toBeTrue();
});

it('has many tags', function () {
    // Arrange
    $job = Job::factory()->create();

    // Act: Add tags to the job
    $job->tag('Frontend');
    $job->tag('Backend');

    // Assert: Check if the job has the correct number of tags
    expect($job->tags)->toHaveCount(2); // Access the 'tags' relationship
});
