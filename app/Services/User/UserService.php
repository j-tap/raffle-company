<?php

namespace App\Services\User;

use Illuminate\Http\Request;

use App\Models\User;
use App\Models\UserMeta;
use App\Http\Resources\User\UserResource;
use App\Http\Requests\User\UserStoreRequest;

class UserService
{
    /**
     * store
     *
     * @param  Request $request
     * @return UserResource
     */
    public function store(array $data): UserResource
    {
        $user = new User();
        $user->name = 'user-'. $data['telegram'];
        $user->save();

        $meta = new UserMeta;
        $meta->telegram = $data['telegram'];
        $meta->user()->associate($user)->save();

        return new UserResource($user);
    }
}
