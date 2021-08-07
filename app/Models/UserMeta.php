<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;

class UserMeta extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'user_id',
        'telegram'
    ];

    /**
     * user
     *
     * @return User
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
