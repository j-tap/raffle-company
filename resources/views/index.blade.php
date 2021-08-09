@extends('layouts.default')

@section('content')
<section class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div id="start-block">
                <form id="main-form" class="main-form">
                    <h1 class="h3 mb-3">Заполните форму для участия в розыгрыше призов</h1>
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
            <div class="final-block d-none" id="final-block">
                <h1 class="h3 mb-3">Вы успешно зарегистрировались в розыгрыше призов</h1>
                <h2 class="h5 mb-4">Ваш персональный код: <br><b class="h4" id="code"></b></h2>
                <button class="btn btn-primary" id="btn-goto-tg">Перейти в Telegram канал розыгрыша</button>
            </div>
        </div>
    </div>
</section>
@endsection
