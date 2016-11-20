<?php 
define('DS', DIRECTORY_SEPARATOR);
return [
	'WWW' => $_SERVER['DOCUMENT_ROOT'] . DS,
	'ROOT' => dirname(__DIR__) . DS,
	'CORE' => dirname(__DIR__) . DS. 'vendor' . DS. 'core' . DS,
	'LIBS' => dirname(__DIR__) . DS. 'vendor' . DS. 'libs' . DS,
	'APP' => dirname(__DIR__) . DS. 'app' . DS,
	'CONTROLLER' => dirname(__DIR__) . DS . 'app' . DS . 'controller' . DS,
	'MODEL' => dirname(__DIR__) . DS . 'app' . DS . 'model' . DS,
	'CONFIG' => dirname(__DIR__) . DS . 'config' . DS,
];