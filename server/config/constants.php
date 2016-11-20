<?php 
define('DS', DIRECTORY_SEPARATOR);
return [
	'ROOT' => dirname(__DIR__),
	'CORE' => dirname(__DIR__) . DS. 'vendor' . DS. 'core' . DS,
	'LIBS' => dirname(__DIR__) . DS. 'vendor' . DS. 'libs' . DS,
	'APP' => dirname(__DIR__) . DS. 'app' . DS
];