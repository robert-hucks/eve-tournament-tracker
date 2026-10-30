<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class MatchController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('matches');
    }
}
