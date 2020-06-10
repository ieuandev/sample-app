<?php

namespace App\Http\Controllers;

use App;
use App\PowerUnit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class PowerUnitsController extends Controller
{

    public function __construct()
    {

    }

    /**
     * Provides full collection of recrods in reverse-chron order, so most recent first, and returns them as JSON
     *
     * @param  Request $request request object
     *
     * @return null
     */
    public function getPowerUnits(Request $request)
    {

        $powerUnits = PowerUnit::orderBy('created_at', 'desc')->get();
        return response()->json($powerUnits);

    }

    /**
     * Receives data from request, writes records, and returns to the front end
     *
     * @param  Request $request request object
     */
    public function store(Request $request)
    {

        // create the user
        $powerUnit = PowerUnit::create([
            'quantity' => $request->quantity ?? 0,
            'minimum' => $request->minimum ?? 0,
            'maximum' => $request->maximum ?? 0,
            'unit_name' => $request->unit_name
        ]);

        return response()->json($powerUnit);

    }

}
