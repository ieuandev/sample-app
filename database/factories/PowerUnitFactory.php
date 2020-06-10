<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\PowerUnit;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(PowerUnit::class, function (Faker $faker) {
    $units = ['Watt', 'kilowatt', 'horsepower', 'Joule', 'calorie'];
    $random_unit = $units[rand(0, count($units) - 1)];
    $minimum = rand(0, 10);
    $maximum = rand(1000, 10000);
    return [
        'quantity' => $faker->numberBetween($minimum, $minimum),
        'unit_name' => $random_unit,
        'minimum' => $minimum,
        'maximum' => $maximum
     ];
});
