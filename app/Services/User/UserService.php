<?php

namespace App\Services\User;

use Illuminate\Http\Request;
use Exception;
use App\Models\User;
use App\Models\UserMeta;
use App\Http\Resources\User\UserResource;
// use App\Http\Requests\User\UserStoreRequest;
use App\Services\Methods;

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
        $isExistUsername = Methods::existUsernameTelegram($data['telegram']);

        if (!$isExistUsername)
        {
            throw new Exception('Такого аккаунта не существует');
        }

        $user = new User();
        $user->name = 'user-'. $data['telegram'];

        $nextId = Methods::getIncrementFromTable('users');

        $user->email = 'email-user-'. $nextId;
        $user->password = bcrypt('password-user-'. $nextId);

        $user->save();

        $meta = new UserMeta;
        $meta->code = $this->generateUniqueCode();
        $meta->telegram = $data['telegram'];
        $meta->user()->associate($user)->save();

        return new UserResource($user);
    }

    /**
     * generateUniqueCode
     *
     * @return int
     */
    private function generateUniqueCode()
    {
        do
        {
            $code = random_int(100000, 999999);
        }
        while (UserMeta::where('code', '=', $code)->first());

        return intval($code);
    }
}
