<?php 

$GLOBALS['CONST'] = require './config/constants.php';

spl_autoload_register(function ($class) {
    $file = $GLOBALS['CONST']['CORE'] . $class . '.php';
		var_dump($file);
    if(is_file($file)) {
        require_once $file;
    }
});

