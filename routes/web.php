<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebController;

//ruta de Inicio
Route::get('/', [WebController::class, 'index'])->name('inicio');
