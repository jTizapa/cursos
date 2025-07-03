<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>master</title>
</head>
<body>
    <h1>Master Layout</h1>
    <nav>
        <ul>
            <li><a href="{{ route('contact') }}">Contact</a></li>
            <li><a href="{{ route('contact1') }}">Contact 1</a></li>
        </ul>
    </nav>

    @yield('content')

    <session>
        @yield('more_content')
    </session>

    <footer>
        <p>&copy; 2025 My Laravel App</p>
    </footer>

</body>
</html>
