<?php
require_once(__DIR__ . '/../../functions.php');

$message = '';
foreach ($_POST as $key => $value) {
    $message .= "<b>$key:</b> $value<br/>";
}

sendEmail('Подписался на рассылку Wim', $message);