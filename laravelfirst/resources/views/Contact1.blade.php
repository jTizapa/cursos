<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact1</title>
</head>
<body>
    <h1>Contact Us </h1>
    @if(isset($name))
        <p>Hello, {{ $name }}!</p>
    @else
        <p>Hello, Guest!</p>

    @endif

    @foreach ([1,2,3,4,5,6] as $item)
        {{ $item }}
    @endforeach
    <form  method="POST">
        @csrf
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
    </form>
</body>
</html>
