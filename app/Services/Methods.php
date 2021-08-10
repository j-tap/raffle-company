<?php

namespace App\Services;

use DOMDocument;
use DomXPath;
use Illuminate\Support\Facades\DB;

class Methods
{
    /**
     * getIncrementFromTable
     *
     * @param  string $tableName
     * @return int
     */
    public static function getIncrementFromTable(string $tableName): int
    {
        $table = DB::select("SHOW TABLE STATUS LIKE '$tableName'");
        $nextId = $table[0]->Auto_increment;
        return intval($nextId);
    }

    /**
     * existUsernameTelegram
     * Checking exist username in Telegam
     *
     * @param  string $username
     * @return bool
     */
    public static function existUsernameTelegram(string $username = ''): bool
    {
        $result = false;
        $url = 'https://t.me/';
        $findingTag = '//div[@class="tgme_page_extra"]';

        if (strlen($username) > 4)
        {
            $html = file_get_contents($url . $username);

            $doc = new DOMDocument();
            @$doc->loadHTML($html);

            if ($doc)
            {
                $xpath = new DomXPath($doc);

                if ($xpath)
                {
                    $nodeList = $xpath->query($findingTag);
                    $tagForCheck = $nodeList->item(0);

                    if ($tagForCheck)
                    {
                        $result = (strpos($tagForCheck->textContent, $username) !== false);
                    }
                }
            }
        }

        return $result;
    }
}
