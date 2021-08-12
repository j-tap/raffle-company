@extends('layouts.default')

@push('scripts')
<script src="{{ asset('js/raffle.js') }}" defer></script>
@endpush

@section('content')
<section class="container mt-5">
    <h1 class="h3 text-center mb-4">Розыгрыш призов Targeleon</h1>
    <div id="start-block">
        <div class="text-center mb-5">
            <h2 class="h5 mb-2">Перейдите в Telegram и подпишитесь на наш канал, если ещё не сделали этого</h2>
            <button class="btn btn-primary btn-goto-tg">Перейти в Telegram канал</button>
        </div>
        <h2 class="h5 text-center mb-4">Затем заполните форму для участия</h2>
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
                <form id="main-form" class="main-form">
                    <div class="mb-3">
                        <label for="main-form__telegram" class="form-label">Ваш Telegram</label>
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <input type="text" class="form-control" id="main-form__telegram" name="telegram" required>
                            <div class="invalid-feedback"></div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <span class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                        Принять участие
                    </button>
                    <div class="alert alert-danger mt-3 d-none" role="alert"></div>
                </form>
            </div>
        </div>
    </div>
    <div class="final-block d-none" id="final-block">
        <h2 class="h5 text-center mb-5">Вы успешно зарегистрировались в розыгрыше призов</h2>
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
                <h2 class="h6 mb-3">
                    <div>Ваш персональный код: </div>
                    <b class="h4" id="code"></b>
                    <div>Сохраните его до завершения розыгрыша</div>
                </h2>
                <button class="btn btn-primary btn-goto-tg">Перейти в Telegram канал</button>
            </div>
        </div>
    </div>
</section>
@endsection
