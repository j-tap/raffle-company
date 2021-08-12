<?php

namespace App\Services\User;

use Illuminate\Http\Request;
use Exception;
use App\Models\User;
use App\Models\UserMeta;
use App\Http\Resources\User\UserResource;
// use App\Http\Requests\User\UserStoreRequest;
use App\Services\Methods;
use App\Services\TelegramBot;

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
        TelegramBot::test();
        // $telegram = new Telegram();
        // $test = $telegram->test();
        // dd($test);

        $isExistUsername = Methods::existUsernameTelegram($data['telegram']);
        if (!$isExistUsername)
        {
            throw new Exception('Такого аккаунта не существует');
        }
        // if ()
        // {

        // }

        $user = new User();
        $user->name = 'user-'. $data['telegram'];

        $nextId = Methods::getIncrementFromTable('users');

        $user->email = 'email-user-'. $nextId;
        $user->password = bcrypt('password-user-'. $nextId);

        $user->save();

        $meta = new UserMeta;

        $min = 1000;
        $max = 9999;
        if ($nextId >= 8999)
        {
            $min = 10000;
            $max = 99999;
        }

        $meta->code = $this->generateUniqueCode($min, $max);
        $meta->telegram = $data['telegram'];
        $meta->user()->associate($user)->save();

        return new UserResource($user);
    }

    /**
     * generateUniqueCode
     *
     * @return int
     */
    private function generateUniqueCode(int $from = 1000, int $to = 9999)
    {
        do
        {
            $code = random_int($from, $to);
        }
        while (UserMeta::where('code', '=', $code)->first());

        return intval($code);
    }
}
