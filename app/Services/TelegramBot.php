<?php

namespace App\Services;

use WeStacks\TeleBot\TeleBot;
use Exception;

class TelegramBot
{
    private static function getChatName()
    {
        return config('app.telegram_chat');
    }

    public static function test()
    {
        // Telegram::getMe()
        // $response = self::sendRequest('sendMessage', [
        //     'chat_id' => self::getChatName(),
        //     'text' => 'Test!',
        // ]);
        $response = self::sendRequest('getUpdates');

        $newUsers = [];
        $leaveUsers = [];
        foreach ($response as $item)
        {
            if (isset($item->message->new_chat_members))
            {
                foreach ($item->message->new_chat_members as $member)
                {
                    $newUsers[] = $member->id;
                }
            }
            if (isset($item->message->left_chat_member))
            {
                $leaveUsers[] = $item->message->left_chat_member->id;
            }
        }
        dd([
            'new_users' => $newUsers,
            'leave_users' => $leaveUsers,
        ], $response);
    }

    private static function sendRequest(string $method, array $params = [])
    {
        try
        {
            $bot = new TeleBot(config('telebot.bots.bot.token'));
            // return $bot->getMe();
            return $bot->$method($params);
        }
        catch (\Throwable $e)
        {
            throw new Exception($e->getMessage());
        }
    }
}
