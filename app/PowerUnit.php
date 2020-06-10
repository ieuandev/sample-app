<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PowerUnit extends Model
{

    /**
     * The attributes that aren't mass assignable.
     *
     * All other fields will be mass assignable if only this
     * property has been defined
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['created_at', 'updated_at'];
   //
}
