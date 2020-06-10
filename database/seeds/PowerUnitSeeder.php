<?php

use Illuminate\Database\Seeder;

class PowerUnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\PowerUnit::class, 50)->create();
    }
}
