<?php

declare(strict_types=1);

use App\Http\Controllers;
use Illuminate\Support\Facades\Route;

Route::get('/', [Controllers\MatchController::class, 'show'])->name('matches');
Route::get('/ships', [Controllers\ShipController::class, 'show'])->name('ships');
Route::get('/characters', [Controllers\CharacterController::class, 'show'])->name('characters');
