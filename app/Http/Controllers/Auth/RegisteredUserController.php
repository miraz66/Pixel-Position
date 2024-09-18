<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Faker\Core\File;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $employerAttributes = $request->validate([
            'employerName' => 'required|string|max:255',
            'logo' => 'required|file|mimes:png,jpg,jpeg',
        ]);

        // Create the user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Store the logo and add the path to $employerAttributes
        $logoPath = $request->file('logo')->store('logos');
        $employerAttributes['logo'] = $logoPath;

        // Create employer record associated with the user
        $user->employer()->create([
            'name' => $employerAttributes['employerName'],
            'logo' => $employerAttributes['logo'],
        ]);

        // Trigger event and login
        event(new Registered($user));
        Auth::login($user);

        return redirect(route('dashboard'));
    }
}
