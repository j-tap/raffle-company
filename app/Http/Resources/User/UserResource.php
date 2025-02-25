<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserMeta\UserMetaResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $meta = new UserMetaResource($this->meta);
        return [
            // 'id' => $this->id,
            'code' => $meta->code,
            'telegram' => $meta->telegram,
        ];
    }
}
