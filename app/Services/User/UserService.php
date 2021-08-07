<?php

namespace App\Services\User;

use Illuminate\Http\Request;

use App\Models\User;
use App\Http\Resources\User\UserResource;

class UserService
{
    /**
     * store
     *
     * @param  Array $request
     * @return UserResource
     */
    public function store(Request $request)
    {
        $user = new User();

        $user->telegram = $request->input('telegram');

        $user->save();

        return new UserResource($user);
    }
}
