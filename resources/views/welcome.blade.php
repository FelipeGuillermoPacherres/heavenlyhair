<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heavenly Hair Salon 👑| Tampa, FL</title>

    <meta property="og:type" content="website">
    <meta property="og:title" content="Heavenly Hair Salon | Tampa, FL">
    <meta property="og:description" content="Donde la belleza se encuentra con la perfección. Descubre nuestros servicios y agenda tu cita.">
    <meta property="og:image" content="{{ asset('img/og.png') }}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Heavenly Hair Salon - Where Beauty Meets Perfection">

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('img/favicon.png') }}" type="image/x-icon">


    <!-- Vite React -->
    @viteReactRefresh
    @vite(['resources/scss/app.scss', 'resources/js/app.jsx'])
</head>
<body>

    <div id="index" data-url="{{ url('/') }}"></div>

</body>
</html>
