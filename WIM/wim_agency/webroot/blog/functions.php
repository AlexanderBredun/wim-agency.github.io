<?php
require(__DIR__ . '/vendor/autoload.php');
// const must be defined inside params-local.php file
function sendEmail($subject = '', $message = '') {
    $sendTo = array(
        'aa@whatifmailing.ru',
        'ek@whatifmailing.ru',
    );

    $transport = Swift_SmtpTransport::newInstance('smtp.yandex.ru', '465', 'ssl')
        ->setUsername('wim.lead@yandex.ru')
        ->setPassword('Wimagency123!')
    ;

    $message = Swift_Message::newInstance($subject)
        ->setFrom('wim.lead@yandex.ru')
        ->setTo($sendTo)
        ->setBody($message, 'text/html')
    ;

    $mailer = Swift_Mailer::newInstance($transport);
    $result = $mailer->send($message);

    return $result;
}