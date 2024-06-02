<?php
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/home' :
        require __DIR__ . '/index.html';
        break;
    default:
        http_response_code(404);
        echo 'Page not found';
        break;
}
?>