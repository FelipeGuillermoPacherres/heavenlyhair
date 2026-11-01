@extends('Layouts.web-template')

@section('content')
    <div id="index" data-url="{{ url('/') }}" data-lang="{{ session('lang', 'en') }}"></div>
@endsection
