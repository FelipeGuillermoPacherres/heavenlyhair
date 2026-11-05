@extends('Layouts.web-template')

@section('seo')
    <title>Heavenly Hair Salon | Hair Salon in Tampa, FL</title>
    <meta property="og:title" content="Heavenly Hair Salon | Tampa, FL">
    <meta property="og:image" content="{{ asset('img/og.png') }}">
    <meta
        name="description"
        content="{{ ($lang ?? 'en') === 'es'
        ? 'Descubre Heavenly Hair Salon en Tampa, Florida. Cortes, coloración y tratamientos capilares con atención personalizada. Agenda tu cita.'
        : 'Discover Heavenly Hair Salon in Tampa, Florida. Personalized haircuts, hair color, and treatments. Book your appointment today.' }}"
    >
    <meta
        name="keywords"
        content="Heavenly Hair Salon, hair salon Tampa, hair salon Tampa FL, salón de belleza en Tampa, peluquería en Tampa, haircuts Tampa, hair color Tampa, hair treatments Tampa"
    >

    <link rel="canonical" href="https://heavenlyhairfl.com/">
@endsection

@section('content')
    <div id="index" data-url="{{ url('/') }}" data-lang="{{ session('lang', 'en') }}"></div>
@endsection
