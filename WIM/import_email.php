<?php


require 'EMSAPI.class.php';

if (isset($_POST['email'])){
    $ems_api = new EMSAPI();
    $em = $_POST['email'];
    $method = 'PUT';
    $data = array("3" => $em,"33865" => "wim");
//echo $unsub_reason;
    $response = $ems_api->query("contact/?create_if_not_exists=1",$data,$method);
    $file = 'log.log';
    $log_line = date('Y-m-d h:m:s').",".$em;
    file_put_contents($file, $log_line, FILE_APPEND | LOCK_EX);

    $new_json = array("key_id" => "3","external_id" => $em, "data" =>"");
    $response = $ems_api->query("event/5169/trigger",$new_json,"POST");


} 



