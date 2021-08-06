@extends('layouts.default')

@section('content')
    <section class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4">
                <form id="main-form">
                    <div class="mb-3">
                        <label for="main-form__telegram" class="form-label">Your telegram</label>
                        <input type="text" class="form-control" id="main-form__telegram" name="telegram">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </section>
@endsection
