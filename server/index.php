<?php 
$GLOBALS['CONST'] = require './config/constants.php';

require $GLOBALS['CONST']['CORE'] . 'AutoLoader.php';

spl_autoload_register(array('AutoLoader', 'load'));

AutoLoader::addPath($GLOBALS['CONST']['CORE']);
AutoLoader::addPath($GLOBALS['CONST']['APP']);
AutoLoader::addPath($GLOBALS['CONST']['LIBS']);

$query = rtrim($_SERVER['QUERY_STRING'], DS);

Router::add('^$', ['controller' => 'Main', 'action' => 'index']);
Router::add('^(?P<controller>[a-z-]+)/?(?P<action>[a-z-]+)?$');

Router::dispath($query);

