@extends('layouts.default')

@section('content')
    <section class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
                <form id="main-form" class="main-form">
                    <div class="mb-3">
                        <label for="main-form__telegram" class="form-label">Your telegram</label>
                        <div class="input-group">
                            <span class="input-group-text" id="basic-addon1">@</span>
                            <input type="text" class="form-control" id="main-form__telegram" name="telegram" required>
                            <div class="invalid-feedback"></div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">
                        <span class="spinner-border spinner-border-sm d-none" role="status" aria-hidden="true"></span>
                        Submit
                    </button>
                    <div class="alert alert-danger mt-3 d-none" role="alert"></div>
                </form>
            </div>
        </div>
    </section>
@endsection
