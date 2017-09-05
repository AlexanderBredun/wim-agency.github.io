<?php
date_default_timezone_set('Europe/Vienna');


class EMSAPI
{	
	private $auth_params;
	private $password_digest;
	
	public function __construct() {		
		$this->auth_params = array(	'param_username' 	=> 'ulmart011',
									'param_nonce' 		=> md5(time()),
									'param_created' 	=> date('c'),
									'param_secret' 		=> 'O7ZN6qv2acG1PTHnyj9z');

		
		$this->password_digest = base64_encode(sha1($this->auth_params['param_nonce'] . $this->auth_params['param_created'] . $this->auth_params['param_secret']));
		$this->service_url = 'https://api.emarsys.net/api/v2/';
		
	}
	public function query($api_call, $post_data = true, $method = true)
	{
        $curl = curl_init($this->service_url.$api_call);
        if($method == 'GET' && $post_data == "")
        {
            curl_setopt($curl, CURLOPT_HTTPGET, TRUE);
        }

        if($method == 'PUT')
        {
            curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
        }
		if($method = 'POST')
		{
			$post_data = json_encode($post_data);
					
			curl_setopt($curl, CURLOPT_POST, false);
			curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);
		}




		curl_setopt($curl, CURLOPT_HEADER, false);
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($curl, CURLOPT_HTTPHEADER, array("Content-Type: application/json",
													 "X-WSSE: UsernameToken Username=\"{$this->auth_params['param_username']}\""
													 . ", PasswordDigest=\"{$this->password_digest}\""
													 . ", Nonce=\"{$this->auth_params['param_nonce']}\""
													 . ", Created=\"{$this->auth_params['param_created']}\""
        ));		
		
		$curl_response = curl_exec($curl);
		$http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
		curl_close($curl);

		$query_result = array('response_text' => $curl_response, 'response_code' => $http_status);
		return $query_result;		
	}
}
?>