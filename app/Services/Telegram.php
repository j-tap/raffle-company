<?php

namespace App\Services;

/*
 * Docs telegram bot methods:
 * https://core.telegram.org/bots/api#available-methods
 */

class Telegram
{
    private $botId;
    private $baseUrl;

    public function __construct()
    {
        $this->botId = config('app.telegram_bot');
        $this->baseUrl = 'https://api.telegram.org/bot'. $this->botId .'/';
    }

    public function test(string $chat_id = null)
    {
        return $this->sendRequest('getChatMember', [
            'chat_id' => '@test_group_123',
            'user_id' => '@j_tap',
        ]);
    }

    public function checkRegisterUser(int $id = ''): bool
    {

        return false;
    }

    public function sendRequest(string $method = null, array $params = [])
    {
        $url = $this->baseUrl . $method .'?'. http_build_query($params);

        $result = file_get_contents($url);
        return json_decode($result, true);
    }
}
