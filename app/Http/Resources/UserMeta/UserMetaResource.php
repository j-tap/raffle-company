<?php

namespace App\Http\Resources\UserMeta;

use Illuminate\Http\Resources\Json\JsonResource;

class UserMetaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'code' => $this->id,
            'telegram' => $this->id,
        ];
    }
}
