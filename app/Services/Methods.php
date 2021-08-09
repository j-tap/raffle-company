<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Type\Integer;

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
}
