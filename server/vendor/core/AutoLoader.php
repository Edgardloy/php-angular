<?php 

class AutoLoader {
    protected static $paths = array();
    
    public static function addPath($path) {
        if ($path) {
            self::$paths[] = $path;
        }
    }
    public static function load($class) {
    	$filename = str_replace('_', DIRECTORY_SEPARATOR, $class).'.php';
        $classPath = $filename;
        foreach (self::$paths as $path) {
            if (is_file($path . $classPath)) {
                require_once $path . $classPath;
                return;
            }
        }
    }
}