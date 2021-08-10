
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @include('includes.head')
</head>
<body>
    <div id="app">
        <main class="main">
            @yield('content')
        </main>
    </div>

    <footer class="footer">
        @include('includes.footer')
    </footer>

</body>
</html>
