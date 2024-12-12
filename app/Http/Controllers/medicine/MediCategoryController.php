<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\medicine\mediCategory;
use Illuminate\Http\Request;

class MediCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function category_list()
    {
        return Inertia::render('medicine/category/category-list');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function category_add()
    {
        return Inertia::render('medicine/category/add-category');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        //
    }
}
